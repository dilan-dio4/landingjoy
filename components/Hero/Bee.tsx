import { useEffect, useRef, useState, useMemo } from "react";
import { ReactComponent as LeftLine } from '../../assets/bee/hero-line-left.svg'
import { ReactComponent as LineRight } from '../../assets/bee/hero-line-right.svg'
import { ReactComponent as BeePath } from '../../assets/bee/bee-path.svg'
import anime, { AnimeParams } from 'animejs';
import useBrowserName from "../../utils/useBrowserName";
import useAsyncEffect from "use-async-effect";

export default function Bee() {
    const beeLineRef = useRef<HTMLDivElement>(null);
    const beeLottieRef = useRef<HTMLDivElement>(null);

    const browserName = useBrowserName();

    const LINE_LEFT_DUR = 1150;
    const LINE_LEFT_DELAY = 200;

    const LINE_RIGHT_DUR = 1700;
    const LINE_IN_BETWEEN_DELAY = 150;

    const BEE_DUR = 3500;
    const BEE_DELAY = 800;

    const UNDRAW_DELAY = 900;

    const DEFAULT_ANIM_OPTIONS: AnimeParams = {
        begin: (anim) => anim.animatables.forEach(ele => {
            ele.target.classList.remove('invisible');
            ele.target.parentElement?.classList.remove('invisible');
        }),
    }

    function setBeeLineCoordinates() {
        const beeLineDOMRect = document.getElementById('beeLineDestination')!.getBoundingClientRect();
        const top = beeLineDOMRect.top + (beeLineDOMRect.height / 2);
        const left = beeLineDOMRect.right;
        beeLineRef.current!.style.top = `${top}px`;
        beeLineRef.current!.style.left = `${left}px`;
        return { top, left };
    }

    async function sendBee() {
        // Draw bee
        const beeLottieDestination = setBeeLineCoordinates()
        await new Promise(resolve => setTimeout(resolve, BEE_DELAY));
        sendLineAnimation("beePathSvg", 100, BEE_DUR, "drawReverse", "easeInOutSine");
        beeLottieRef.current!.style.top = `${beeLottieDestination.top}px`;
        beeLottieRef.current!.style.left = `${beeLottieDestination.left}px`;
        const beePath = anime.path(`#beePathSvg path`)
        anime({
            ...DEFAULT_ANIM_OPTIONS,
            targets: '#beeLottie',
            translateX: beePath('x'),
            translateY: beePath('y'),
            rotate: beePath('angle'),
            duration: BEE_DUR,
            direction: 'reverse',
            easing: "easeInOutSine"
        });
    }

    useAsyncEffect(async isActive => {
        await sendLineAnimation("lineLeftSvg", LINE_LEFT_DELAY, LINE_LEFT_DUR, "drawReverse", "easeInSine").finished;
        await sendLineAnimation("lineRightSvg", LINE_IN_BETWEEN_DELAY, LINE_RIGHT_DUR, "draw", "easeOutSine").finished;

        sendBee();

        // Undraw them
        await sendLineAnimation("lineRightSvg", UNDRAW_DELAY, LINE_RIGHT_DUR, "undraw", "easeInSine").finished;
        await sendLineAnimation("lineLeftSvg", LINE_IN_BETWEEN_DELAY, LINE_LEFT_DUR, "undrawReverse", "easeOutSine").finished;
    }, [])

    useEffect(() => {
        window.addEventListener('resize', setBeeLineCoordinates);
        return () => window.removeEventListener('resize', setBeeLineCoordinates);
    }, []);

    function pathAnimation(path: SVGGeometryElement) {
        return {
            tail: {
                strokeDashoffset: [anime.setDashoffset, browserName === "Apple Safari" ? 0 : path.getTotalLength() * -1],
                direction: 'normal'
            },
            tailReverse: {
                strokeDashoffset: [path.getTotalLength(), anime.setDashoffset],
                direction: 'normal'
            },
            draw: {
                strokeDashoffset: [anime.setDashoffset, browserName === "Apple Safari" ? 1 : 0],
                direction: 'normal'
            },
            drawReverse: {
                strokeDashoffset: [anime.setDashoffset, path.getTotalLength() * 2],
                direction: 'normal'
            },
            undraw: {
                strokeDashoffset: [browserName === "Apple Safari" ? 1 : 0, anime.setDashoffset],
                direction: 'normal'
            },
            undrawReverse: {
                strokeDashoffset: [path.getTotalLength() * 2, anime.setDashoffset],
                direction: 'normal'
            }
        }
    }

    function sendLineAnimation(
        id: string,
        delay: number,
        duration: number,
        animation: "undrawReverse" | "undraw" | "tail" | "tailReverse" | "draw" | "drawReverse",
        easing: "easeInSine" | "easeOutSine" | "easeInOutSine",
        onComplete?: (anim: AnimeParams) => void
    ) {
        // For stroke-dashoffset size:
        // https://stackoverflow.com/a/63377806
        const path: SVGGeometryElement = document.querySelector(`#${id} path`)!
        return anime({
            ...DEFAULT_ANIM_OPTIONS,
            ...pathAnimation(path)[animation],
            targets: path,
            duration,
            delay,
            easing,
            complete: onComplete,
        })
    }

    return (
        <div className="absolute overflow-hidden left-0 top-0 right-0 h-[100vh]">
            <div className="absolute left-0 top-0 h-[400px] w-[400px] z-20">
                <LeftLine id="lineLeftSvg" className="invisible" />
            </div>
            <div className="absolute right-0 top-0 h-[400px] w-[400px] z-20">
                <LineRight id="lineRightSvg" className="invisible" />
            </div>
            <div className="absolute h-[400px] w-[400px] z-20 overflow-hidden" ref={beeLineRef}>
                <BeePath id="beePathSvg" className="invisible" />
            </div>
            <div className="absolute w-5 h-5 bg-black z-50 invisible" ref={beeLottieRef} id="beeLottie"></div>
        </div>
    )
}