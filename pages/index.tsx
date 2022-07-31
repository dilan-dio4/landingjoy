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
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import UiContext from '../components/Context/UiContext';
import { IoSync } from 'react-icons/io5';
import { CgScreen } from 'react-icons/cg';
import type { IconBaseProps } from 'react-icons';
import anime from 'animejs';
import Globe from '../components/Globe';
import WithSingleLine from '../components/WithSingleLine';
import Texture from '../components/Texture';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import Tags from '../components/Tags';
import useIsMounted from '../utils/useIsMounted';

const Home: NextPage = () => {
    const { isDarkMode } = useContext(UiContext);
    const displayNoneTimeoutRect = useRef<NodeJS.Timeout>();
    const router = useRouter();
    const isMounted = useIsMounted();

    useEffect(() => {
        if (isDarkMode) {
            // Mounted on dark mode
            document
                .querySelectorAll<SVGElement>('.dark-texture-panel')
                .forEach((ele) => {
                    ele.style.display = 'block';
                    ele.style.opacity = "1";
                });
            document
                .querySelectorAll<SVGElement>('.light-texture-panel')
                .forEach((ele) => (ele.style.display = 'none'))
        }
    }, [])

    /**
     * For some reason all of this is necessary for properly
     * restarting the animations when the hash changes
     */
    function runTriadAnimations() {
        setTimeout(() => {
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
        }, 100)
    }

    useEffect(() => {
        if (!isMounted) {
            return;
        }
        const TEXTURE_DUR = 650;
        anime({
            targets: `.dark-texture-panel`,
            opacity: isDarkMode ? '1' : '0',
            duration: TEXTURE_DUR,
            easing: 'easeInOutQuad',
            begin() {
                clearTimeout(displayNoneTimeoutRect.current);
                document
                    .querySelectorAll<SVGElement>(isDarkMode ? '.dark-texture-panel' : '.light-texture-panel')
                    .forEach((ele) => (ele.style.display = 'block'));
                displayNoneTimeoutRect.current = setTimeout(
                    () =>
                        document
                            .querySelectorAll<SVGElement>(isDarkMode ? '.light-texture-panel' : '.dark-texture-panel')
                            .forEach((ele) => (ele.style.display = 'none')),
                    TEXTURE_DUR,
                );
            },
        });

        runTriadAnimations();
    }, [isDarkMode]);

    useEffect(() => {
        router.events.on("hashChangeStart", runTriadAnimations);

        return () => {
            router.events.off("hashChangeStart", runTriadAnimations);
        };
    }, [router.events])

    const heroTextRoot = 'dark:text-secondary-100 transition-all duration-500 translate-x-0 translate-y-0';
    const heroTextShadowRoot = 'absolute top-0 left-0 right-0 text-primary-200 transition-all duration-500 opacity-0 dark:opacity-100';

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://landingjoy.com/#organization",
        "name": "Landingjoy",
        "url": "https://landingjoy.com",
        "logo": "https://landingjoy.com/og.png",
        "email": "hello@landingjoy.com",
    };

    return (
        <>
            <Head>
                <link rel="canonical" href="https://landingjoy.com/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
            <Tags
                description="The team at Landingjoy creates beautiful, high-converting landing pages for SaaS companies. Learn how you can triple your conversion rate."
                title="#1 SaaS Landing Page Development Agency – Landingjoy"
            />
            <Header />
            <main className={clsx('overflow-x-hidden relative')}>
                <>
                    <div className='absolute-center overflow-hidden'>
                        <Texture fadeIn fadeOut />
                        <Texture fadeIn />
                        <Texture />
                        <Texture />
                        <Texture />
                        <Texture />
                        <Texture />
                        <Texture />
                    </div>
                    <Bee />
                    <Container className={clsx('h-[calc(100vh+50px)]')}>
                        <div className='flex-center flex-col text-center h-[75%] sm:h-[85%]'>
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
                                <HeroPrimaryButton onClick={(_) => router.push('#plans')} text='See plans' className='min-w-[250px] px-[48px] py-[20px]' />
                                <div className='relative mt-8 ml-1'>
                                    {isDarkMode ? (
                                        <>
                                            <h3
                                                className={clsx(heroTextRoot, 'dark:-translate-x-0.5 dark:-translate-y-0.5 !text-xs italic pointer-events-none')}
                                            >
                                                {dict.hero.tag}
                                            </h3>
                                            <h3 className={clsx(heroTextShadowRoot, '!text-xs italic')}>
                                                <Link href='/book/3'>
                                                    <a>{dict.hero.tag}</a>
                                                </Link>
                                            </h3>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className={clsx(heroTextRoot, 'dark:-translate-x-0.5 dark:-translate-y-0.5 !text-xs italic')}>
                                                <Link href='/book/3'>
                                                    <a>{dict.hero.tag}</a>
                                                </Link>
                                            </h3>
                                            <h3 className={clsx(heroTextShadowRoot, '!text-xs italic pointer-events-none')}>{dict.hero.tag}</h3>
                                        </>
                                    )}
                                </div>
                            </Layout>
                        </div>
                        <HeroDrawings />
                    </Container>
                    <Container id='methodology'>
                        <Layout header={dict.section1.header} className="mt-14">
                            <div className='flex flex-col sm:flex-row'>
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
                        </Layout>
                    </Container>

                    <Container id='plans'>
                        <Layout header={'Plans'}>
                            <WithSingleLine rotation={-15} top={-170} left={-40} right={-20}>
                                <Pricing />
                            </WithSingleLine>
                        </Layout>
                    </Container>
                    <Container id='faqs'>
                        <Layout header={'FAQs'}>
                            <WithSingleLine rotation={15} top={-280} left={-30} right={-50}>
                                <FAQs />
                            </WithSingleLine>
                        </Layout>
                    </Container>
                    <Container className='bg-black text-white'>
                        <Layout>
                            <Footer />
                        </Layout>
                    </Container>
                </>
            </main>
        </>
    );
};

export default Home;
