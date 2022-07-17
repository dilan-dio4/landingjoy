import { useEffect, useRef, useState, useMemo } from "react";
import { ReactComponent as LeftLine } from '../../assets/bee/bee-path-3.svg'
import { ReactComponent as BeePath } from '../../assets/bee/bee-path-2.svg'
import anime from 'animejs';

const pathAnimation = (path: SVGGeometryElement) => ({
    tail: {
        strokeDashoffset: [anime.setDashoffset, path.getTotalLength() * -1],
        direction: 'normal'
    },
    tailReverse: { 
        strokeDashoffset: [path.getTotalLength(), anime.setDashoffset],
        direction: 'normal'
    },
    draw: {
        strokeDashoffset: [anime.setDashoffset, 0],
        direction: 'normal'
    },
    drawReverse: {
        strokeDashoffset: [0, path.getTotalLength() * -1],
        direction: 'reverse'
    }
})

export default function Bee() {
    const rootRef = useRef<HTMLDivElement>(null);
    const [t, setT] = useState<Point[]>();

    useEffect(() => {

        // For stroke-dashoffset size:
        // https://stackoverflow.com/a/63377806
        const path: SVGGeometryElement = document.querySelector('#asdf2 path')!
        anime({
            targets: path,
            easing: 'easeInOutQuad',
            duration: 4000,
            ...pathAnimation(path).tail
        })
    }, [])

    return (
        <>
            <div className="absolute left-0 top-0 h-[400px] w-[400px]">
                <LeftLine />
            </div>
            <div className="absolute right-0 top-0 h-[400px] w-[400px]">
                <BeePath style={{ strokeDasharray: 500, strokeDashoffset: 10 }} id="asdf2" />
            </div>
        </>
    )
}