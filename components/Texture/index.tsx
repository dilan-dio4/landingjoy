export default function Texture() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className='absolute -z-10' height="100%" width="100%" preserveAspectRatio="true">
            <defs>
                <filter
                    id="fractal-a"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                    colorInterpolationFilters="linearRGB"
                    filterRes="200"
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
                        lightingColor="#ffb5a7"
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
            <path fill="#f8edeb" d="M0 0h7000v7000H0z" />
            <path fill="#ffb5a7" filter="url(#fractal-a)" d="M0 0h7000v7000H0z" />
        </svg>
    )
}