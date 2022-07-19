import React, { useContext, useEffect } from "react"
import UiContext from "../Context/UiContext";
import colors from '../../utils/colors';
import anime from "animejs";
import useId from "../../utils/useId";

interface ISingleTexture {
    variant: "light" | "dark";
    id: number;
    style: React.CSSProperties;
}

function SingleTexture({ variant, id, style }: ISingleTexture) {

    const { browserName } = useContext(UiContext);

    const textureColors = {
        light: {
            bg: colors.primary[100],
            effect: colors.primary[300],
        },
        dark: {
            bg: colors.secondary[300],
            effect: "#87615a"
        }
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className='absolute -z-5' style={style} height="100%" width="100vw" preserveAspectRatio="true" id={`svg-root-${variant}-${id}`}>
            <defs>
                <filter
                    id={`fractal-${variant}-${id}`}
                    x="-20%"
                    y="-20%"
                    width={browserName === "Apple Safari" ? "40%" : "140%"}
                    height={browserName === "Apple Safari" ? "40%" : "140%"}
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                    colorInterpolationFilters="linearRGB"
                >
                    <feTurbulence
                        baseFrequency={0.151}
                        numOctaves={4}
                        seed={15}
                        stitchTiles="stitch"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        result="turbulence"
                    />
                    <feSpecularLighting
                        surfaceScale={15}
                        specularConstant={0.75}
                        specularExponent={20}
                        lightingColor={textureColors[variant].effect}
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="turbulence"
                        result="specularLighting"
                    >
                        <feDistantLight azimuth={3} elevation={100} />
                    </feSpecularLighting>
                </filter>
            </defs>
            <path fill={textureColors[variant].bg} d="M0 0h7000v7000H0z" />
            <path fill={textureColors[variant].effect} filter={`url(#fractal-${variant}-${id})`} d="M0 0h7000v7000H0z" />
        </svg>
    )
}

export default function Texture() {
    const id = useId();
    const { isDarkMode } = useContext(UiContext);

    useEffect(() => {
        if (id) {
            anime({
                targets: `#svg-root-dark-${id}`,
                translateX: isDarkMode ? "0" : "100vw",
                duration: 800,
                easing: "easeInOutQuad"
            });
        }
    }, [isDarkMode])

    if (!id) return <></>;

    return (
        <>
            <SingleTexture style={{ zIndex: -10 }} id={id} variant="light" />
            <SingleTexture style={{ zIndex: -5, transform: "translate3d(0, 0, 0) translateX(100vw)", backfaceVisibility: "hidden" /** Force hardware acceleration */ }} id={id} variant="dark" />
        </>
    )
}