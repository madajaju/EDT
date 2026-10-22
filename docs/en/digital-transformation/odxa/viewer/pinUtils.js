export function tint(hex, amount = 0.1) {
    try {
        if (hex.length === 4) hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        const r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
        const t = (c) => Math.max(0, Math.min(255, Math.round(c + (255 - c) * amount)));
        return '#' + t(r).toString(16).padStart(2, '0') + t(g).toString(16).padStart(2, '0') + t(b).toString(16).padStart(2, '0');
    } catch {
        return hex;
    }
}
// Darken a hex color by fraction (0..1)
export function shade(hex, amount = 0.2) {
    try {
        if (!hex) return hex;
        if (hex.length === 4) hex = '#' + hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3];
        const r = parseInt(hex.slice(1,3),16),
            g = parseInt(hex.slice(3,5),16),
            b = parseInt(hex.slice(5,7),16);
        const s = (c)=> Math.max(0, Math.min(255, Math.round(c*(1-amount))));
        return '#'+s(r).toString(16).padStart(2,'0')+s(g).toString(16).padStart(2,'0')+s(b).toString(16).padStart(2,'0');
    } catch { return hex; }
}

// Brighter 2.5D radial gradient for the pin bubble
export function ensurePinGradient(svgEl, gradId, baseColor) {
    let defs = svgEl.querySelector('defs');
    if (!defs) {
        defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
        svgEl.prepend(defs);
    }
    let grad = svgEl.querySelector('#'+CSS.escape(gradId));
    if (grad) return 'url(#'+gradId+')';

    const center = tint(baseColor, 0.65); // much lighter center for contrast
    const mid    = tint(baseColor, 0.20); // near the original
    const edge   = shade(baseColor, 0.40); // darker rim

    grad = document.createElementNS('http://www.w3.org/2000/svg','radialGradient');
    grad.setAttribute('id', gradId);
    grad.setAttribute('cx','35%');
    grad.setAttribute('cy','30%');
    grad.setAttribute('r','80%');

    const s0 = document.createElementNS('http://www.w3.org/2000/svg','stop');
    s0.setAttribute('offset','0%');   s0.setAttribute('stop-color', center);

    const s1 = document.createElementNS('http://www.w3.org/2000/svg','stop');
    s1.setAttribute('offset','60%');  s1.setAttribute('stop-color', mid);

    const s2 = document.createElementNS('http://www.w3.org/2000/svg','stop');
    s2.setAttribute('offset','100%'); s2.setAttribute('stop-color', edge);

    grad.appendChild(s0); grad.appendChild(s1); grad.appendChild(s2);
    defs.appendChild(grad);
    return 'url(#'+gradId+')';
}

export function getFontColor(hex) {
    if (!hex || !hex.startsWith('#') || (hex.length !== 7 && hex.length !== 4)) return '#000000';
    if (hex.length === 4) hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    const r = parseInt(hex.substr(1, 2), 16),
        g = parseInt(hex.substr(3, 2), 16),
        b = parseInt(hex.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 200 ? '#ffffff' : '#000000';
}
