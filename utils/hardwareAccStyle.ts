import React from 'react';

const hardwareAccStyle: React.CSSProperties = {
    transform: 'translate3d(0, 0, 0)',
    willChange: 'display, opacity',
    backfaceVisibility: 'hidden',
    /** Force hardware acceleration */
};

export default hardwareAccStyle;
