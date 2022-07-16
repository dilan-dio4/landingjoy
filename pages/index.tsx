import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/index.module.css';
import clsx from 'clsx';
import { ReactComponent as Icon1 } from '../assets/hero-images/1.svg'
import { ReactComponent as Icon2 } from '../assets/hero-images/2.svg'
import { ReactComponent as Icon3 } from '../assets/hero-images/3.svg'
import { ReactComponent as Icon4 } from '../assets/hero-images/4.svg'
import { ReactComponent as Icon5 } from '../assets/hero-images/5.svg'
import { ReactComponent as Icon6 } from '../assets/hero-images/6.svg'
import { ReactComponent as Icon7 } from '../assets/hero-images/7.svg'
import { ReactComponent as Icon8 } from '../assets/hero-images/8.svg'
import { ReactComponent as Icon9 } from '../assets/hero-images/9.svg'
import { ReactComponent as Icon10 } from '../assets/hero-images/10.svg'
import { ReactComponent as Icon11 } from '../assets/hero-images/11.svg'
import { ReactComponent as Icon12 } from '../assets/hero-images/12.svg'
import { ReactComponent as Icon13 } from '../assets/hero-images/13.svg'
import { ReactComponent as Icon14 } from '../assets/hero-images/14.svg'
import { ReactComponent as Icon15 } from '../assets/hero-images/15.svg'
import { ReactComponent as Icon16 } from '../assets/hero-images/16.svg'
import useDeviceSize from '../utils/useDeviceSize';

const Home: NextPage = () => {
  const { isMobile } = useDeviceSize();
  interface HeroSvg {
    Component: (props: Partial<React.SVGProps<SVGSVGElement>>) => JSX.Element;
    bottom?: number | string;
    left?: number | string;
    size: number | string;
  }

  // const dynamicPositions: HeroSvg[] = [
  //   {
  //     top: -5,
  //     left: -10,
  //     size: 160,
  //     Component: (props) => <Icon1 />
  //   },
  //   {
  //     top: 40,
  //     right: 70,
  //     size: 140,
  //     Component: (props) => <Icon3 />
  //   },
  //   {
  //     bottom: 14,
  //     right: -10,
  //     size: 150,
  //     Component: (props) => <Icon2 />
  //   },
  //   {
  //     top: 150,
  //     left: 280,
  //     size: 110,
  //     Component: (props) => <Icon4 />
  //   },
  //   {
  //     bottom: 205,
  //     left: 90,
  //     size: 100,
  //     Component: (props) => <Icon7 />
  //   },
  //   {
  //     bottom: -24,
  //     left: 155,
  //     size: 140,
  //     Component: (props) => <Icon6 />
  //   },
  //   {
  //     bottom: 164,
  //     right: 120,
  //     size: 130,
  //     Component: (props) => <Icon5 />
  //   },
  //   {
  //     top: 80,
  //     right: 370,
  //     size: 140,
  //     Component: (props) => <Icon8 />
  //   },
  //   {
  //     bottom: 214,
  //     right: -60,
  //     size: 150,
  //     Component: (props) => <Icon9 />
  //   },
  //   {
  //     top: 200,
  //     right: 200,
  //     size: 110,
  //     Component: (props) => <Icon10 />
  //   },
  //   {
  //     bottom: -11,
  //     right: 202,
  //     size: 100,
  //     Component: (props) => <Icon11 />
  //   },
  //   {
  //     bottom: 30,
  //     left: 300,
  //     size: 140,
  //     Component: (props) => <Icon12 />
  //   },
  //   {
  //     top: 304,
  //     right: 400,
  //     size: 130,
  //     Component: (props) => <Icon13 />
  //   },
  //   {
  //     top: 250,
  //     left: 20,
  //     size: 100,
  //     Component: (props) => <Icon14 />
  //   },
  //   {
  //     top: 20,
  //     right: 400,
  //     size: 140,
  //     Component: (props) => <Icon15 />
  //   },
  //   {
  //     bottom: 64,
  //     right: 400,
  //     size: 130,
  //     Component: (props) => <Icon16 />
  //   }
  // ]

  const dynamicPositions: HeroSvg[] = [
    {
      bottom: -5,
      left: "0%",
      size: 160,
      Component: (props) => <Icon1 />
    },
    {
      bottom: "25%",
      left: "10%",
      size: 140,
      Component: (props) => <Icon3 />
    },
    {
      bottom: "20%",
      left: "20%",
      size: 150,
      Component: (props) => <Icon2 />
    },
    {
      bottom: "5%",
      left: "18%",
      size: 110,
      Component: (props) => <Icon4 />
    },
    {
      bottom: "-4%",
      left: "29%",
      size: 100,
      Component: (props) => <Icon7 />
    },
    {
      bottom: "19%",
      left: "33%",
      size: 140,
      Component: (props) => <Icon6 />
    },
    {
      bottom: "8%",
      left: "43%",
      size: 110,
      Component: (props) => <Icon5 />
    },
    {
      bottom: "-1%",
      left: "54%",
      size: 140,
      Component: (props) => <Icon8 />
    },
    {
      bottom: "22%",
      left: "56%",
      size: 150,
      Component: (props) => <Icon9 />
    },
    {
      bottom: "22%",
      left: "71%",
      size: 110,
      Component: (props) => <Icon10 />
    },
    {
      bottom: "8%",
      left: "69%",
      size: 100,
      Component: (props) => <Icon11 />
    },
    {
      bottom: "0%",
      left: "79%",
      size: 140,
      Component: (props) => <Icon12 />
    },
    {
      bottom: "22%",
      left: "89%",
      size: 100,
      Component: (props) => <Icon14 />
    },
    {
      bottom: "0%",
      left: "89%",
      size: 140,
      Component: (props) => <Icon15 />
    },
  ]

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx()}>
        <>
          <div className={clsx('h-[100vh] relative', styles['texture-blur'])}>
            {dynamicPositions.map(({ Component, size, ...position }, i) => (
              <div key={i} style={{ height: size, width: size, position: "absolute", opacity: 0.8, ...position }} ><Component /></div>
            ))}
          </div>
          <h1>Some more stuff</h1>
        </>
      </main>
      {/* <svg>
        <filter id='roughpaper'>
          <feTurbulence type="fractalNoise" baseFrequency='0.04' result='noise' numOctaves="5" />

          <feDiffuseLighting in='noise' lightingColor='#F8EDEB' surfaceScale='0.5'>
            <feDistantLight azimuth='45' elevation='60' />
          </feDiffuseLighting>
        </filter>
      </svg> */}

    </>
  )
}

export default Home
