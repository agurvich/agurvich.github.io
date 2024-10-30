// Tooltip.jsx

import { useState } from "react";

function Tooltip({ tooltipIsVisible, content, x, y, ...pars }) {

    return (
        <div
        className={`
            absolute
            bg-white border
            border-gray-300
            p-6 rounded-md shadow-lg
            transition-all duration-150
            ${tooltipIsVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ top: y, left: x, transform: 'translateX(-50%)' }}
            {...pars}
        >
            {`Start: ${content?.startDate}, End: ${content?.endDate}`}
        </div>
    );
}

export default Tooltip;