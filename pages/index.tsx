import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/index.module.css';
import clsx from 'clsx';
import heroDrawings from '../components/Hero/heroDrawings';
import useDeviceSize from '../utils/useDeviceSize';
import useBrowserName from '../utils/useBrowserName';
import Header from '../components/Header';
import Bee from '../components/Hero/Bee';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import { HeroPrimaryButton, SmallPrimaryButton } from '../components/Buttons';
import Pricing from '../components/Pricing';

const Home: NextPage = () => {
  const { isMobile } = useDeviceSize();
  const browserName = useBrowserName();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header variant='primary' />
      <main className={clsx('overflow-x-hidden')}>
        <>
          <Bee />
          <Container className={clsx('h-[calc(100vh+50px)]')} fadeOut>
            <div className='flex flex-col justify-center items-center text-center h-[75%] sm:h-[85%]'>
              <Layout>
                {/* <h1>Beautiful SaaS landing pages<br />that'll convert quickly</h1> */}
                {/* <h1 >Your SaaS needs a landing page<br />that will convert</h1> */}
                <h1>Your SaaS needs landing pages<span id="beeLineDestination">&#8203;</span><br />and we <span className='font-extrabold'>love</span> building them</h1>
                <h2 className='mt-4'>and we'll build the whole thing</h2>
                {/* <div className={clsx(styles['button-outline'], 'mt-10 z-10')}>
                  <button className={clsx(styles['hero-button'])}>
                    <p className={clsx('text-[#f8edeb] p-0 text-lg leading-none font-bold tracking-wide')}>See plans</p>
                  </button>
                </div> */}
                <HeroPrimaryButton text="See plans" className="min-w-[250px] px-[48px] py-[20px]" />
                <h2 className='mt-12'>A SaaS landing page subscription that'll convert quickly</h2>
              </Layout>
            </div>
            <div className='absolute top-0 bottom-0 left-0 w-[100vw]'>
              {heroDrawings[isMobile ? "mobile" : "desktop"].map(({ Component, size, ...position }, i) => (
                <Component key={"hero-key-" + i} style={{ height: size, width: size, position: "absolute", opacity: 0.8, zIndex: 1, ...position }} />
              ))}
            </div>
          </Container>
          <Container fadeIn>
            <Layout>
              <h3 className='mt-20'>The weight of converting, lifted off your shoulders</h3>
              <div className="flex mt-36">
                {[
                  {
                    icon: () => <></>,
                    title: "Totally async",
                    description: "We deliver products directly to you"
                  },
                  {
                    icon: () => <></>,
                    title: "Totally async",
                    description: "We deliver products directly to you"
                  },
                  {
                    icon: () => <></>,
                    title: "Totally async",
                    description: "We deliver products directly to you"
                  }
                ].map(ele => (
                  <div key={ele.title} className='flex flex-col basis-1/3 items-center'>
                    <>{ele.icon}</>
                    <h4>{ele.title}</h4>
                    <p className="mt-2">{ele.description}</p>
                  </div>
                ))}
              </div>
              <svg className='absolute top-20 left-0 right-0' viewBox="0 0 800 400">
                <path d="M0,200 Q250,160 400,200 T800 200"
                  fill="none" stroke="#fcd5ce" strokeWidth="0.43" />
              </svg>
              <h3 className='mt-28'>So&#8230; what's the catch?</h3>
              <p className='text-center m-auto max-w-[600px] mt-10'>
                We tend to only work with <em>ideal</em> SaaS companies. This is because we have limited time and like to keep a tight, trustworthy team. This allows us to be respectful to yourself and other potential clients while delivering the highest quality of work.
                <br />
                <br />
                Consider this a long term relationship.
              </p>

              <h3 className='mt-28'>What's an <em>ideal</em> company?</h3>
              <p className='text-center m-auto max-w-[600px] mt-10'>
                An ideal customer is typically defined by the following characteristics:
                <br />
                <br />
              </p>
              <p className='flex justify-center text-left'>
                1. &nbsp;&nbsp;Has a platform that we believe in
                <br />
                2. &nbsp;&nbsp;Has a team that we mesh with
                <br />
                3. &nbsp;&nbsp;Is excited to scale their growth
              </p>
              <h3 className='mt-28'>You just got a lot leaner</h3>
            </Layout>
          </Container>

          <Container>
            <Layout>
              <h3 className='mb-10'>Plans</h3>
                <Pricing />
            </Layout>
          </Container>
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
