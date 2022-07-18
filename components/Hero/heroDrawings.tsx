import { ReactComponent as Icon1 } from '../../assets/hero-images/1.svg'
import { ReactComponent as Icon2 } from '../../assets/hero-images/2.svg'
import { ReactComponent as Icon3 } from '../../assets/hero-images/3.svg'
import { ReactComponent as Icon4 } from '../../assets/hero-images/4.svg'
import { ReactComponent as Icon5 } from '../../assets/hero-images/5.svg'
import { ReactComponent as Icon6 } from '../../assets/hero-images/6.svg'
import { ReactComponent as Icon7 } from '../../assets/hero-images/7.svg'
import { ReactComponent as Icon8 } from '../../assets/hero-images/8.svg'
import { ReactComponent as Icon9 } from '../../assets/hero-images/9.svg'
import { ReactComponent as Icon10 } from '../../assets/hero-images/10.svg'
import { ReactComponent as Icon11 } from '../../assets/hero-images/11.svg'
import { ReactComponent as Icon12 } from '../../assets/hero-images/12.svg'
import { ReactComponent as Icon13 } from '../../assets/hero-images/13.svg'
import { ReactComponent as Icon14 } from '../../assets/hero-images/14.svg'
import { ReactComponent as Icon15 } from '../../assets/hero-images/15.svg'
import { ReactComponent as Icon16 } from '../../assets/hero-images/16.svg'
import { ReactComponent as Icon17 } from '../../assets/hero-images/17.svg'
import { ReactComponent as Icon18 } from '../../assets/hero-images/18.svg'
import { ReactComponent as Icon19 } from '../../assets/hero-images/19.svg'
import { ReactComponent as Icon20 } from '../../assets/hero-images/20.svg'

interface HeroSvg {
    Component: (props: Partial<React.SVGProps<SVGSVGElement>>) => JSX.Element;
    bottom?: number | string;
    left?: number | string;
    size: number | string;
}

const heroDrawings: { desktop: HeroSvg[], mobile: HeroSvg[] } = {
    desktop: [
        {
            bottom: -9,
            left: "0%",
            size: 130,
            Component: (props) => <Icon1 {...props} />
        },
        {
            bottom: "15%",
            left: "8%",
            size: 120,
            Component: (props) => <Icon3 {...props} />
        },
        {
            bottom: "12%",
            left: "20%",
            size: 130,
            Component: (props) => <Icon2 {...props} />
        },
        {
            bottom: "2%",
            left: "15%",
            size: 90,
            Component: (props) => <Icon4 {...props} />
        },
        {
            bottom: "-2%",
            left: "29%",
            size: 80,
            Component: (props) => <Icon7 {...props} />
        },
        {
            bottom: "9%",
            left: "33%",
            size: 120,
            Component: (props) => <Icon6 {...props} />
        },
        {
            bottom: "3%",
            left: "43%",
            size: 90,
            Component: (props) => <Icon5 {...props} />
        },
        {
            bottom: "-5%",
            left: "54%",
            size: 120,
            Component: (props) => <Icon8 {...props} />
        },
        {
            bottom: "9%",
            left: "56%",
            size: 130,
            Component: (props) => <Icon9 {...props} />
        },
        {
            bottom: "15%",
            left: "71%",
            size: 90,
            Component: (props) => <Icon10 {...props} />
        },
        {
            bottom: "3%",
            left: "69%",
            size: 80,
            Component: (props) => <Icon11 {...props} />
        },
        {
            bottom: "-4%",
            left: "78%",
            size: 120,
            Component: (props) => <Icon12 {...props} />
        },
        {
            bottom: "14%",
            left: "87%",
            size: 80,
            Component: (props) => <Icon14 {...props} />
        },
        {
            bottom: "2%",
            left: "91%",
            size: 90,
            Component: (props) => <Icon15 {...props} />
        },
        {
            bottom: "-15%",
            left: "67%",
            size: 120,
            Component: (props) => <Icon13 {...props} />
        },
        {
            bottom: "-12%",
            left: "38%",
            size: 110,
            Component: (props) => <Icon16 {...props} />
        },
        {
            bottom: "-16%",
            left: "20%",
            size: 100,
            Component: (props) => <Icon18 {...props} />
        },
        {
            bottom: "-12%",
            left: "8%",
            size: 120,
            Component: (props) => <Icon20 {...props} />
        },
        {
            bottom: "-18%",
            left: "50%",
            size: 120,
            Component: (props) => <Icon17 {...props} />
        },
        {
            bottom: "-14%",
            left: "85%",
            size: 90,
            Component: (props) => <Icon19 {...props} />
        },
    ],
    mobile: [
        {
            bottom: -5,
            left: "0%",
            size: 140,
            Component: (props) => <Icon1 {...props} />
        },
        {
            bottom: "20%",
            left: "12%",
            size: 120,
            Component: (props) => <Icon3 {...props} />
        },
        {
            bottom: "16%",
            left: "58%",
            size: 130,
            Component: (props) => <Icon2 {...props} />
        },
        {
            bottom: "5%",
            left: "45%",
            size: 90,
            Component: (props) => <Icon4 {...props} />
        },
        {
            bottom: "1%",
            left: "69%",
            size: 80,
            Component: (props) => <Icon7 {...props} />
        },
        {
            bottom: "14%",
            left: "27%",
            size: 80,
            Component: (props) => <Icon14 {...props} />
        },
    ]
}

export default heroDrawings;
