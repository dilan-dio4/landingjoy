import type { NextPage } from 'next';
import Head from 'next/head';
import clsx from 'clsx';
import HeroDrawings from '../components/Hero/HeroDrawings';
import Header from '../components/Header';
import Bee from '../components/Hero/Bee';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import { HeroPrimaryButton } from '../components/Buttons';
import Pricing from '../components/Pricing';
import dict from '../components/dict';
import colors from '../utils/colors';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import UiContext from '../components/Context/UiContext';
import { IoSync } from 'react-icons/io5';
import { CgScreen } from 'react-icons/cg';
import type { IconBaseProps } from 'react-icons';
import anime from 'animejs';
import Globe from '../components/Globe';
import WithSingleLine from '../components/WithSingleLine';
import Texture, { SingleTexture } from '../components/Texture';

const Home: NextPage = () => {
    const { isDarkMode } = useContext(UiContext);

    useEffect(() => {
        anime({
            targets: `#triad-icon-0`,
            rotate: {
                value: '1turn',
            },
            loop: true,
            duration: 2000,
            easing: 'linear',
        });
        anime({
            targets: `#triad-icon-1 path`,
            loop: true,
            easing: 'linear',
            strokeDashoffset: [
                { value: [anime.setDashoffset, 0], duration: 4500 },
                { value: [0, anime.setDashoffset], duration: 4500 },
            ],
            endDelay: 900,
            begin: function () {
                document.querySelector('#triad-icon-1 path')!.setAttribute('stroke', 'currentColor');
                document.querySelector('#triad-icon-1 path')!.setAttribute('fill', 'none');
            },
        });

        // const target = {
        //     percent: '0%',
        // };
        // anime({
        //     targets: target,
        //     percent: [
        //         { value: '100%', duration: 5000 },
        //         { value: '0%', duration: 5000, delay: 4000 },
        //     ],
        //     easing: 'linear',
        //     endDelay: 4000,
        //     loop: true,
        //     update: function () {
        //         document.querySelector<HTMLDivElement>(
        //             `#triad-icon-2 ~ div`,
        //         )!.style.backgroundImage = `linear-gradient(to top, #C7EDF9 ${target.percent}, transparent 0)`;
        //     },
        // });

        if (!isDarkMode) {
            document.querySelectorAll<SVGElement>('.light-texture-panel').forEach(ele => ele.style.display = 'block')
        }

        anime({
            targets: `.dark-texture-panel`,
            opacity: isDarkMode ? '1' : '0',
            duration: 650,
            easing: 'easeInOutQuad',
            complete() {
                if (isDarkMode) {
                    document.querySelectorAll<SVGElement>('.light-texture-panel').forEach(ele => ele.style.display = 'none')
                }
            }
        });
    }, [isDarkMode]);

    const heroTextRoot = 'dark:text-secondary-100 transition-all duration-500 translate-x-0 translate-y-0';
    const heroTextShadowRoot = 'absolute top-0 left-0 right-0 text-primary-200 transition-all duration-500 opacity-0 dark:opacity-100';

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
                <meta name='theme-color' content={colors.primary[100]} />
            </Head>
            <Header />
            <main className={clsx('overflow-x-hidden relative')}>
                <>
                    <div className='absolute top-0 bottom-0 left-0 right-0 overflow-hidden'>
                        <SingleTexture id='dark-root' variant='dark' style={{ position: 'absolute' }} />
                        <SingleTexture id='dark-light' variant='light'  style={{ position: 'absolute' }} />
                        <Texture fadeIn fadeOut />
                        <Texture fadeIn />
                        <Texture />
                        <Texture />
                        <Texture />
                        <Texture />
                        <Texture />
                        <Texture />
                        <Texture />
                        <Texture />
                        <Texture />
                    </div>
                    <Bee />
                    <Container className={clsx('h-[calc(100vh+50px)]')}>
                        <div className='flex flex-col justify-center items-center text-center h-[75%] sm:h-[85%]'>
                            <Layout>
                                {/* <h1>Beautiful SaaS landing pages<br />that'll convert quickly</h1> */}
                                {/* <h1 >Your SaaS needs a landing page<br />that will convert</h1> */}
                                <div className='relative'>
                                    <h1 className={clsx(heroTextRoot, 'dark:-translate-x-1 dark:-translate-y-1')}>{dict.hero.header}</h1>
                                    <h1 className={heroTextShadowRoot}>{dict.hero.header}</h1>
                                </div>
                                <div className='relative mt-4'>
                                    <h2 className={clsx(heroTextRoot, 'dark:-translate-x-0.5 dark:-translate-y-0.5')}>{dict.hero.subheader}</h2>
                                    <h2 className={heroTextShadowRoot}>{dict.hero.subheader}</h2>
                                </div>
                                <HeroPrimaryButton text='See plans' className='min-w-[250px] px-[48px] py-[20px]' />
                                <div className='relative mt-8 ml-1'>
                                    {isDarkMode ? (
                                        <>
                                            <h3
                                                className={clsx(heroTextRoot, 'dark:-translate-x-0.5 dark:-translate-y-0.5 text-xs italic pointer-events-none')}
                                            >
                                                {dict.hero.tag} &#8594;
                                            </h3>
                                            <h3 className={clsx(heroTextShadowRoot, 'text-xs italic')}>
                                                <Link href='https://google.com'>
                                                    <a>{dict.hero.tag} &#8594;</a>
                                                </Link>
                                            </h3>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className={clsx(heroTextRoot, 'dark:-translate-x-0.5 dark:-translate-y-0.5 text-xs italic')}>
                                                <Link href='https://google.com'>
                                                    <a>{dict.hero.tag} &#8594;</a>
                                                </Link>
                                            </h3>
                                            <h3 className={clsx(heroTextShadowRoot, 'text-xs italic pointer-events-none')}>{dict.hero.tag} &#8594;</h3>
                                        </>
                                    )}
                                </div>
                            </Layout>
                        </div>
                        <HeroDrawings />
                    </Container>
                    <Container>
                        <Layout>
                            <h3 className='mt-20'>{dict.section1.header}</h3>
                            <div className='flex mt-14 flex-col sm:flex-row'>
                                {[
                                    {
                                        Icon: (props: IconBaseProps) => <IoSync {...props} />,
                                        title: dict.section1.triad[0].title,
                                        description: dict.section1.triad[0].description,
                                    },
                                    {
                                        Icon: (props: IconBaseProps) => <CgScreen {...props} strokeWidth='1' />,
                                        title: dict.section1.triad[1].title,
                                        description: dict.section1.triad[1].description,
                                    },
                                    {
                                        Icon: () => <Globe />,
                                        title: dict.section1.triad[2].title,
                                        description: dict.section1.triad[2].description,
                                    },
                                ].map(({ Icon, ...ele }, i) => (
                                    <div key={ele.title} className='flex flex-col basis-1/3 items-center text-center my-6 mx-0 sm:mx-3'>
                                        <Icon size={40} id={`triad-icon-${i}`} />
                                        <h4 className='my-2'>{ele.title}</h4>
                                        <p>{ele.description}</p>
                                    </div>
                                ))}
                            </div>
                            <h3 className='mt-28'>{dict.section2.header1}</h3>
                            <p className='text-center m-auto max-w-[600px] mt-10'>{dict.section2.description1}</p>

                            <h3 className='mt-28'>{dict.section2.header2}</h3>
                            <p className='text-center m-auto max-w-[600px] mt-10'>{dict.section2.description2}</p>
                            <p className='flex justify-center text-left'>{dict.section2.bullets2}</p>
                            <WithSingleLine top={60} rotation={0}>
                                <p className='text-center m-auto max-w-[600px] mt-6'>{dict.section2.description2Subheader}</p>
                            </WithSingleLine>

                            <h3 className='mt-28'>{dict.section2.header3}</h3>
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
        </>
    );
};

export default Home;
