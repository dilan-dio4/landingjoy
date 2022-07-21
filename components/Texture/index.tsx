import React from 'react';
import colors from '../../utils/colors';
import useId from '../../utils/useId';
import hardwareAccStyle from '../../utils/hardwareAccStyle';
import useDeviceSize from '../../utils/useDeviceSize';
import clsx from 'clsx';

interface ISingleTexture {
    variant: 'light' | 'dark';
    id: string;
    style?: React.CSSProperties;
    className?: string;
}

function SingleTexture({ variant, id, style, className }: ISingleTexture) {
    const { height, width } = useDeviceSize();

    const textureColors = {
        light: {
            bg: colors.primary[100],
            effect: colors.primary[300],
        },
        dark: {
            bg: colors.secondary[300],
            effect: '#87615a',
        },
    };

    const svgWidth = width;
    const svgHeight = height * 2;

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className={clsx('-z-5', className)}
            style={style}
            height='100%'
            width='100%'
            preserveAspectRatio='true'
            id={`svg-root-${variant}-${id}`}
        >
            <defs>
                <filter
                    id={`fractal-${variant}-${id}`}
                    x='0%'
                    y='0%'
                    width={"100%"}
                    height={"100%"}
                    filterUnits='objectBoundingBox'
                    primitiveUnits='userSpaceOnUse'
                    colorInterpolationFilters='linearRGB'
                >
                    <feTurbulence
                        baseFrequency={0.151}
                        numOctaves={4}
                        seed={15}
                        stitchTiles='stitch'
                        x='0%'
                        y='0%'
                        width='100%'
                        height='100%'
                        result='turbulence'
                    />
                    <feSpecularLighting
                        surfaceScale={15}
                        specularConstant={0.75}
                        specularExponent={20}
                        lightingColor={textureColors[variant].effect}
                        x='0%'
                        y='0%'
                        width='100%'
                        height='100%'
                        in='turbulence'
                        result='specularLighting'
                    >
                        <feDistantLight azimuth={3} elevation={100} />
                    </feSpecularLighting>
                </filter>
            </defs>
            <path fill={textureColors[variant].bg} d={`M0 0h${svgWidth}v${svgHeight}H0z`} />
            <path fill={textureColors[variant].effect} filter={`url(#fractal-${variant}-${id})`} d={`M0 0h${svgWidth}v${svgHeight}H0z`} />
        </svg>
    );
}

interface ITexture {
    fadeIn?: boolean;
    fadeOut?: boolean;
}

export default function Texture({ fadeIn, fadeOut }: ITexture) {
    const id = useId();

    // useEffect(() => {
    //     if (id) {
    //         anime({
    //             targets: `#dark-root-${id}`,
    //             opacity: isDarkMode ? '1' : '0',
    //             duration: 650,
    //             easing: 'easeInOutQuad',
    //         });
    //     }
    // }, [isDarkMode]);

    if (!id) return <></>;

    return (
        <>
            <div className='relative h-[100vh] w-[100vw]'>
                <SingleTexture style={{ zIndex: -10, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} id={id} className="light-texture-panel" variant='light' />
                {fadeIn && (
                    <div
                        className='absolute top-0 left-0 right-0 -z-10'
                        style={{
                            background: `linear-gradient(180deg, ${colors.primary[200] + '77'} 0%, transparent 100%)`,
                            height: 150,
                        }}
                    />
                )}

                {fadeOut && (
                    <div
                        className='absolute bottom-0 left-0 right-0 -z-10'
                        style={{
                            background: `linear-gradient(180deg, transparent 0%, ${colors.primary[200] + '77'} 100%)`,
                            height: 150,
                        }}
                    />
                )}

                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -5, opacity: 0, ...hardwareAccStyle }} className="dark-texture-panel">
                    <SingleTexture variant='dark' id={id} />
                    {fadeIn && (
                        <div
                            className='absolute top-0 left-0 right-0'
                            style={{
                                background: `linear-gradient(180deg, ${colors.secondary[200] + '57'} 0%, transparent 100%)`,
                                height: 150,
                            }}
                        />
                    )}
                    {fadeOut && (
                        <div
                            className='absolute bottom-0 left-0 right-0'
                            style={{
                                background: `linear-gradient(180deg, transparent 0%, ${colors.secondary[200] + '57'} 100%)`,
                                height: 150,
                            }}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
