import { useFloating } from '@floating-ui/react-dom';
import { ReactNode } from 'react';
import SingleLine from '../Hero/SingleLine';

interface WithSingleLine {
    children: ReactNode;
    rotation?: number;
    top?: number;
    left?: number;
    right?: number;
}

export default function WithSingleLine({ children, top = 0, rotation, left = 0, right = 0 }: WithSingleLine) {
    const { x, y, reference, floating, strategy } = useFloating({
        placement: 'bottom',
    });
    return (
        <>
            <div ref={reference}>{children}</div>
            <div
                ref={floating}
                style={{
                    position: strategy,
                    top: y ? y + top : 0,
                    left,
                    right,
                    transform: `translateY(-50%)` + (rotation ? ` rotateZ(${rotation}deg)` : ''),
                    pointerEvents: 'none',
                    zIndex: -1,
                }}
            >
                <SingleLine />
            </div>
        </>
    );
}
