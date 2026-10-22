// viewer/customerOverlay.js

import {shade, tint, ensurePinGradient, getFontColor} from './pinUtils.js';
// you can also extract those helpers if you like

// state
let customerData = null;
let phaseTheme = null;

// build the theme for pins
export function buildPhaseTheme(data) {
    const phases = data?.phases || {};
    const names = Object.keys(phases);
    const decorated = names.map(n => ({
        "name": n,
        order: phases[n]?.order ?? Infinity
    }));
    decorated.sort((a, b) => (a.order - b.order) || a.name.localeCompare(b.name));
    const order = decorated.map(d => d.name);
    const palette = ['#ff0000', '#ff00ff', '#88aa44', '#aa8844', '#4488aa', '#0000ff'];
    const styles = {};
    order.forEach((name, i) => {
        const custom = phases[name]?.color;
        styles[name] = {stroke: custom || palette[i % palette.length]};
    });
    return {order, styles};
}

// build the map path → { phaseName→{count,engagements[]} }
export function buildOverlayIndex(data, opts = {}) {
    const idx = new Map();
    if (!data?.phases) return idx;
    const root = String(opts.rootName || 'GEAR').trim(), rootLC = root.toLowerCase();
    const normalize = raw => {
        const parts = String(raw).split(/\s*-\s*/).map(s => s.trim()).filter(Boolean);
        if (!parts.length) return root;
        if (parts[0].toLowerCase() !== rootLC) parts.unshift(root);
        return parts.join(' - ');
    };
    for (const [pname, phase] of Object.entries(data.phases)) {
        for (const sup of Object.values(phase.suppliers || {})) {
            for (const eng of sup.engagements || []) {
                for (const raw of eng.layers || []) {
                    const path = normalize(raw);
                    if (!idx.has(path)) idx.set(path, {});
                    const bucket = idx.get(path);
                    if (!bucket[pname]) bucket[pname] = {count: 0, engagements: []};
                    bucket[pname].count++;
                    bucket[pname].engagements.push({
                        supplier: sup.name, "name": eng.name, description: eng.description
                    });
                }
            }
        }
    }
    return idx;
}

// draw one pin
export function drawPin(svgEl, parentG, {phaseName, color, cx, cy, count = 1}) {
    const r = 15, tipH = 8, stroke = shade(color, 0.5),
        fill = ensurePinGradient(svgEl, `grad-${parentG.id}-${phaseName}`, color);
    const g = document.createElementNS(svgEl.namespaceURI, 'g');
    g.setAttribute('class', 'overlay-pin');
    g.setAttribute('filter', 'url(#pinGlowShadow)');

    // circle
    const c = document.createElementNS(svgEl.namespaceURI, 'circle');
    c.setAttribute('cx', cx);
    c.setAttribute('cy', cy);
    c.setAttribute('r', r);
    c.setAttribute('fill', fill);
    c.setAttribute('stroke', stroke);
    c.setAttribute('stroke-width', '1.5');
    g.appendChild(c);
    // pointer
    const p = document.createElementNS(svgEl.namespaceURI, 'path');
    const b = 5;
    const left = `${cx - b},${cy + r - 2}`, mid = `${cx},${cy + r + 2}`, right = `${cx + b},${cy + r - 2}`,
        tip = `${cx},${cy + r + tipH}`;
    p.setAttribute('d', `M ${left} L ${mid} L ${right} L ${tip} Z`);
    p.setAttribute('fill', shade(color, 0.45));
    p.setAttribute('stroke', stroke);
    p.setAttribute('stroke-width', '1');
    g.appendChild(p);
    // count text
    if (count > 1) {
        const t = document.createElementNS(svgEl.namespaceURI, 'text');
        t.setAttribute('x', cx);
        t.setAttribute('y', cy + 5);
        t.setAttribute('text-anchor', 'middle');
        t.setAttribute('font-size', '14');
        t.setAttribute('font-weight', '700');
        t.setAttribute('fill', "#000");
        t.textContent = count;
        g.appendChild(t);
    }
    parentG.appendChild(g);
    g.style.cursor = 'pointer';
    g.addEventListener('click', ev => {
        ev.stopPropagation();
        // 1) clear prior selection
        svgEl.querySelectorAll('.overlay-pin.selected')
            .forEach(el => el.classList.remove('selected'));

        // 2) mark this pin
        g.classList.add('selected');

        // 3) read & show its <title> text
        const tip = g.querySelector('title')?.textContent || '';
        const desc = document.getElementById('description-panel');
        if (desc) desc.textContent = tip;
    });
    return g;
}

// position all pins on one layer-group
export function addPinsForNode(svgEl, group, phases) {
    const rect = group.querySelector('rect');
    if (!rect || !phaseTheme) return;
    group.querySelectorAll('.overlay-pin').forEach(n => n.remove());
    const x = +rect.getAttribute('x'), y = +rect.getAttribute('y'), w = +rect.getAttribute('width');
    const margin = 6, pinW = 30, gap = 6, rowH = 24;
    const xLeft = x + margin, xRight = x + w - margin;
    let row = 0, xCur = xLeft;
    phaseTheme.order.forEach(name => {
        const bucket = phases[name];
        const cnt = bucket?.count || 0;
        if (!cnt) return;
        if (xCur + pinW > xRight) {
            row++;
            xCur = xLeft;
        }
        const cx = xCur + pinW / 2, cy = y + 14 + row * rowH;
        const color = phaseTheme.styles[name].stroke;
        const pin = drawPin(svgEl, group, {phasename: name, color, cx, cy, count: cnt});
        // tooltip
        const title = document.createElementNS(svgEl.namespaceURI, 'title');
        const lines = [`${name}: ${cnt} engagement${cnt > 1 ? 's' : ''}`];
        bucket.engagements.slice(0, 6).forEach(e => lines.push(` • ${e.name}`));
        if (bucket.engagements.length > 6) lines.push(' …');
        title.textContent = lines.join('\n');
        pin.prepend(title);
        xCur += pinW + gap;
    });
}

// main entrypoint: call after you render your SVG into the DOM
export function applyOverlay(svgEl, data, model, root, depth) {
    if (!data || !model) return;
    if (!phaseTheme) phaseTheme = buildPhaseTheme(data);
    const raw = buildOverlayIndex(data);
    if (!raw.size) return;
    svgEl.querySelectorAll('.overlay-pin').forEach(n => n.remove());
    const visible = new Map();
    raw.forEach((phases, path) => {
        const node = model.byPath.get(path);
        // find visible ancestor …
        let vis = node;
        while (vis && vis._depth > root._depth + depth) vis = vis._parent;
        if (!vis) return;
        const key = vis._path;
        if (!visible.has(key)) visible.set(key, {});
        const agg = visible.get(key);
        Object.entries(phases).forEach(([pn, b]) => {
            if (!agg[pn]) agg[pn] = {count: 0, engagements: []};
            agg[pn].count += b.count;
            agg[pn].engagements.push(...b.engagements);
        });
    });
    visible.forEach((phases, path) => {
        const node = model.byPath.get(path);
        const g = svgEl.getElementById(node._id);
        if (g) addPinsForNode(svgEl, g, phases);
    });
    // Update the legend.
    const legend = document.getElementById('legend');
    const items  = document.getElementById('legend-items');
    if (legend && items) {
        items.innerHTML = '';                    // clear prior
        phaseTheme.order.forEach(name => {
            const swatch = document.createElement('span');
            swatch.className = 'legend-swatch';
            swatch.style.background = phaseTheme.styles[name].stroke;

            const label = document.createElement('span');
            label.textContent = name;

            const row = document.createElement('div');
            row.className = 'legend-row';
            row.append(swatch, label);

            items.appendChild(row);
        });
        legend.style.display = phaseTheme.order.length ? 'block' : 'none';
    }
}

// clear all pins & legend
export function clearOverlay(svgEl) {
    svgEl.querySelectorAll('.overlay-pin').forEach(n => n.remove());
    const legend = document.getElementById('legend');
    if (legend) legend.style.display = 'none';
}

export function setCustomerData(data) {
    customerData = data;
    phaseTheme = null;
}

export function getCustomerData() {
    return customerData;
}
