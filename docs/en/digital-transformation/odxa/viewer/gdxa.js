// gdxa.js (top level)
import strategic_domain from './strategic-domain.js';
import physical_domain from './physical-domain.js';
import digital_domain from './digital-domain.js';
import process_domain from './process-domain.js';
import organizational_domain from './organizational-domain.js';

export const gdxa = {
    layers: {
        'Strategic Domain': strategic_domain,
        'Physical Domain': physical_domain,
        'Digital Domain': digital_domain,
        'Process Domain': process_domain,
        'Organizational Domain': organizational_domain
    },
    "name": "ODXA",
    id: "ODXA"
};

export default gdxa;
