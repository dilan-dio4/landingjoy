import { ReactComponent as Icon1 } from '../../assets/hero-images/1.svg'
import { ReactComponent as Icon1Alt } from '../../assets/hero-images/1-alt.svg'
import { ReactComponent as Icon2 } from '../../assets/hero-images/2.svg'
import { ReactComponent as Icon2Alt } from '../../assets/hero-images/2-alt.svg'
import { ReactComponent as Icon3 } from '../../assets/hero-images/3.svg'
import { ReactComponent as Icon3Alt } from '../../assets/hero-images/3-alt.svg'
import { ReactComponent as Icon4 } from '../../assets/hero-images/4.svg'
import { ReactComponent as Icon4Alt } from '../../assets/hero-images/4-alt.svg'
import { ReactComponent as Icon5 } from '../../assets/hero-images/5.svg'
import { ReactComponent as Icon5Alt } from '../../assets/hero-images/5-alt.svg'
import { ReactComponent as Icon6 } from '../../assets/hero-images/6.svg'
import { ReactComponent as Icon6Alt } from '../../assets/hero-images/6-alt.svg'
import { ReactComponent as Icon7 } from '../../assets/hero-images/7.svg'
import { ReactComponent as Icon7Alt } from '../../assets/hero-images/7-alt.svg'
import { ReactComponent as Icon8 } from '../../assets/hero-images/8.svg'
import { ReactComponent as Icon8Alt} from '../../assets/hero-images/8-alt.svg'
import { ReactComponent as Icon9 } from '../../assets/hero-images/9.svg'
import { ReactComponent as Icon9Alt } from '../../assets/hero-images/9-alt.svg'
import { ReactComponent as Icon10 } from '../../assets/hero-images/10.svg'
import { ReactComponent as Icon10Alt } from '../../assets/hero-images/10-alt.svg'
import { ReactComponent as Icon11 } from '../../assets/hero-images/11.svg'
import { ReactComponent as Icon11Alt } from '../../assets/hero-images/11-alt.svg'
import { ReactComponent as Icon12 } from '../../assets/hero-images/12.svg'
import { ReactComponent as Icon12Alt } from '../../assets/hero-images/12-alt.svg'
import { ReactComponent as Icon13 } from '../../assets/hero-images/13.svg'
import { ReactComponent as Icon13Alt } from '../../assets/hero-images/13-alt.svg'
import { ReactComponent as Icon14 } from '../../assets/hero-images/14.svg'
import { ReactComponent as Icon14Alt } from '../../assets/hero-images/14-alt.svg'
import { ReactComponent as Icon15 } from '../../assets/hero-images/15.svg'
import { ReactComponent as Icon15Alt } from '../../assets/hero-images/15-alt.svg'
import { ReactComponent as Icon16 } from '../../assets/hero-images/16.svg'
import { ReactComponent as Icon16Alt } from '../../assets/hero-images/16-alt.svg'
import { ReactComponent as Icon17 } from '../../assets/hero-images/17.svg'
import { ReactComponent as Icon17Alt } from '../../assets/hero-images/17-alt.svg'
import { ReactComponent as Icon18 } from '../../assets/hero-images/18.svg'
import { ReactComponent as Icon18Alt } from '../../assets/hero-images/18-alt.svg'
import { ReactComponent as Icon19 } from '../../assets/hero-images/19.svg'
import { ReactComponent as Icon19Alt } from '../../assets/hero-images/19-alt.svg'
import { ReactComponent as Icon20 } from '../../assets/hero-images/20.svg'
import { ReactComponent as Icon20Alt } from '../../assets/hero-images/20-alt.svg'
import useDeviceSize from '../../utils/useDeviceSize'
import { useContext, useEffect } from 'react'
import UiContext from '../Context/UiContext'
import anime from 'animejs';
import hardwareAccStyle from '../../utils/hardwareAccStyle';

interface HeroSvg {
    Component: (props: Partial<React.SVGProps<SVGSVGElement>>) => JSX.Element;
    bottom?: number | string;
    left?: number | string;
    size: number | string;
}


const heroDrawingData = (isDarkMode: boolean): { desktop: HeroSvg[], mobile: HeroSvg[] } => ({
    desktop: [
        {
            bottom: -9,
            left: "0%",
            size: 130,
            Component: (props) => !isDarkMode ? <Icon1 {...props} /> : <Icon1Alt {...props} />
        },
        {
            bottom: "15%",
            left: "8%",
            size: 120,
            Component: (props) => !isDarkMode ? <Icon3 {...props} /> : <Icon3Alt {...props} />
        },
        {
            bottom: "12%",
            left: "20%",
            size: 130,
            Component: (props) => !isDarkMode ? <Icon2 {...props} /> : <Icon2Alt {...props} />
        },
        {
            bottom: "2%",
            left: "15%",
            size: 90,
            Component: (props) => !isDarkMode ? <Icon4 {...props} /> : <Icon4Alt {...props} />
        },
        {
            bottom: "-2%",
            left: "29%",
            size: 80,
            Component: (props) => !isDarkMode ? <Icon7 {...props} /> : <Icon7Alt {...props} />
        },
        {
            bottom: "9%",
            left: "33%",
            size: 120,
            Component: (props) => !isDarkMode ? <Icon6 {...props} /> : <Icon6Alt {...props} />
        },
        {
            bottom: "3%",
            left: "43%",
            size: 90,
            Component: (props) => !isDarkMode ? <Icon5 {...props} /> : <Icon5Alt {...props} />
        },
        {
            bottom: "-5%",
            left: "54%",
            size: 120,
            Component: (props) => !isDarkMode ? <Icon8 {...props} /> : <Icon8Alt {...props} />
        },
        {
            bottom: "9%",
            left: "56%",
            size: 130,
            Component: (props) => !isDarkMode ? <Icon9 {...props} /> : <Icon9Alt {...props} />
        },
        {
            bottom: "15%",
            left: "71%",
            size: 90,
            Component: (props) => !isDarkMode ? <Icon10 {...props} /> : <Icon10Alt {...props} />
        },
        {
            bottom: "3%",
            left: "69%",
            size: 80,
            Component: (props) => !isDarkMode ? <Icon11 {...props} /> : <Icon11Alt {...props} />
        },
        {
            bottom: "-4%",
            left: "78%",
            size: 120,
            Component: (props) => !isDarkMode ? <Icon12 {...props} /> : <Icon12Alt {...props} />
        },
        {
            bottom: "14%",
            left: "87%",
            size: 80,
            Component: (props) => !isDarkMode ? <Icon14 {...props} /> : <Icon14Alt {...props} />
        },
        {
            bottom: "2%",
            left: "91%",
            size: 90,
            Component: (props) => !isDarkMode ? <Icon15 {...props} /> : <Icon15Alt {...props} />
        },
        {
            bottom: "-15%",
            left: "67%",
            size: 120,
            Component: (props) => !isDarkMode ? <Icon13 {...props} /> : <Icon13Alt {...props} />
        },
        {
            bottom: "-12%",
            left: "38%",
            size: 110,
            Component: (props) => !isDarkMode ? <Icon16 {...props} /> : <Icon16Alt {...props} />
        },
        {
            bottom: "-16%",
            left: "20%",
            size: 100,
            Component: (props) => !isDarkMode ? <Icon18 {...props} /> : <Icon18Alt {...props} />
        },
        {
            bottom: "-12%",
            left: "8%",
            size: 120,
            Component: (props) => !isDarkMode ? <Icon20 {...props} /> : <Icon20Alt {...props} />
        },
        {
            bottom: "-18%",
            left: "50%",
            size: 120,
            Component: (props) => !isDarkMode ? <Icon17 {...props} /> : <Icon17Alt {...props} />
        },
        {
            bottom: "-14%",
            left: "85%",
            size: 90,
            Component: (props) => !isDarkMode ? <Icon19 {...props} /> : <Icon19Alt {...props} />
        },
    ],
    mobile: [
        {
            bottom: -5,
            left: "0%",
            size: 140,
            Component: (props) => !isDarkMode ? <Icon1 {...props} /> : <Icon1Alt {...props} />
        },
        {
            bottom: "20%",
            left: "12%",
            size: 120,
            Component: (props) => !isDarkMode ? <Icon3 {...props} /> : <Icon3Alt {...props} />
        },
        {
            bottom: "16%",
            left: "58%",
            size: 130,
            Component: (props) => !isDarkMode ? <Icon2 {...props} /> : <Icon2Alt {...props} />
        },
        {
            bottom: "5%",
            left: "45%",
            size: 90,
            Component: (props) => !isDarkMode ? <Icon4 {...props} /> : <Icon4Alt {...props} />
        },
        {
            bottom: "1%",
            left: "69%",
            size: 80,
            Component: (props) => !isDarkMode ? <Icon7 {...props} /> : <Icon7Alt {...props} />
        },
        {
            bottom: "14%",
            left: "27%",
            size: 80,
            Component: (props) => !isDarkMode ? <Icon14 {...props} /> : <Icon14Alt {...props} />
        },
        {
            bottom: "-10%",
            left: "5%",
            size: 80,
            Component: (props) => !isDarkMode ? <Icon15 {...props} /> : <Icon15Alt {...props} />
        },
        {
            bottom: "-12%",
            left: "72%",
            size: 100,
            Component: (props) => !isDarkMode ? <Icon13 {...props} /> : <Icon13Alt {...props} />
        },
        {
            bottom: "-6%",
            left: "36%",
            size: 90,
            Component: (props) => !isDarkMode ? <Icon16 {...props} /> : <Icon16Alt {...props} />
        },
    ]
})

export default function HeroDrawing() {
    const { isMobile } = useDeviceSize();
    const { isDarkMode } = useContext(UiContext);

    useEffect(() => {
        anime({
            targets: `#alt-hero-drawing-root`,
            opacity: isDarkMode ? "1" : "0",
            duration: 650,
            easing: "easeInOutQuad"
        });
    }, [isDarkMode])

    return (
        <>
            <div className='absolute top-0 bottom-0 left-0 w-[100vw] -z-10'>
                {heroDrawingData(false)[isMobile ? "mobile" : "desktop"].map(({ Component, size, ...position }, i) => (
                    <Component key={"hero-key-" + i} style={{ height: size, width: size, position: "absolute", opacity: 0.8, zIndex: 1, ...position }} />
                ))}
            </div>
            <div id="alt-hero-drawing-root" className='absolute top-0 bottom-0 left-0 w-[100vw]' style={{ opacity: '0', ...hardwareAccStyle }}>
                {heroDrawingData(true)[isMobile ? "mobile" : "desktop"].map(({ Component, size, ...position }, i) => (
                    <Component key={"hero-key-" + i} style={{ height: size, width: size, position: "absolute", opacity: 0.8, zIndex: 1, ...position }} />
                ))}
            </div>
        </>
    )
}
