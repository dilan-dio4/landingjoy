import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Footer from '../../Footer';
import Header from '../../Header';
import Tags from '../../Tags';
import SocialSharer from '../../SocialSharer';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import colors from '../../../utils/colors';
import Container from '../../Container';
import Layout from '../../Layout/Layout';
import { ReactNode, useContext, useEffect } from 'react';
import useIsMounted from '../../../utils/useIsMounted';
import UiContext from '../../Context/UiContext';
import anime from 'animejs';
import { useLayoutEffect } from 'react';
import { useFloating, shift } from '@floating-ui/react-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface ITeardown {
    image?: string;
    siteImage: StaticImageData;
    date: Date;
    dateModified?: Date;
    description: string;
    notes: { x: number, y: number; content: React.ReactNode }[];
    topChildren?: ReactNode;
    bottomChildren?: ReactNode;
    score: number;
    platform: string;
}

export default function Teardown({ 
    siteImage, 
    score, 
    platform, 
    image, 
    date, 
    dateModified, 
    description, 
    notes, 
    topChildren, 
    bottomChildren
}: ITeardown) {
    const router = useRouter();

    const { isDarkMode, isMountedOnDarkMode } = useContext(UiContext);
    const isMounted = useIsMounted();
    const MAIN_ID = "main-container";

    const { x, y, reference, floating, strategy } = useFloating();

    useLayoutEffect(() => {
        // Call reference with the virtual element inside an effect
        // or event handler.
        reference({
            getBoundingClientRect() {
                return {
                    x: 0,
                    y: 0,
                    top: 200,
                    left: 200,
                    bottom: 20,
                    right: 20,
                    width: 20,
                    height: 20,
                };
            },
        });
    }, [reference]);

    useEffect(() => {
        if (isMountedOnDarkMode) {
            document.getElementById(MAIN_ID)!.style.backgroundColor = colors.secondary[300]
        }
    }, [isMountedOnDarkMode])

    useEffect(() => {
        if (!isMounted) {
            return;
        }

        const TEXTURE_DUR = 650;
        anime({
            targets: "#" + MAIN_ID,
            backgroundColor: isDarkMode ? colors.secondary[300] : colors.primary[100],
            duration: TEXTURE_DUR,
            easing: 'easeInOutQuad',
        });
    }, [isDarkMode])
    
    const title = `SaaS landing page breakdown – ${platform}`;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "url": `https://landingjoy.com${router.pathname}`
        },
        "headline": ,
        "image": image ? image.includes(`://`) ? image : `https://landingjoy.com` + image : `https://landingjoy.com/og.png`,
        "author": {
            "@type": "Person",
            "name": "Ryan Parker"
        },
        "publisher": {
            "@type": "Organization",
            "@id": "https://landingjoy.com/#organization",
            "name": "Landingjoy",
            "logo": {
                "@type": "ImageObject",
                "url": "https://landingjoy.com/og.png"
            }
        },
        "datePublished": date.toISOString(),
        "dateModified": (dateModified || date).toISOString()
    }

    let stars: ReactNode[] = [];
    for (let i = 0; i < 5; i++) {
        if (i < score) {
            if (score - i === .5) {
                stars.push(<BsStarHalf className='mx-[1px]' size={24} />);
            } else {
                stars.push(<BsStarFill className='mx-[1px]' size={24} />);
            }
        } else {
            stars.push(<BsStar className='mx-[1px]' size={24} />);
        }
    }

    return (
        <main>
            <Tags
                description={description}
                title={title}
            />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
                {/* <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/gml.min.css"></link> */}
            </Head>
            <Header />
            <main className={clsx('overflow-x-hidden relative')} style={{ backgroundColor: colors.primary[100], transitionDuration: "0s" }} id={MAIN_ID}>
                <>
                    <Container>
                        <Layout>
                            <article className="mx-auto max-w-[1200px] px-6 pt-10 text-secondary-300 dark:text-primary-100">
                                <h1>{title}</h1>
                                {topChildren}
                                <Image src={siteImage} alt={``} />
                                <div
                                    ref={floating}
                                    style={{
                                        position: strategy,
                                        top: y ?? 0,
                                        left: x ?? 0,
                                    }}
                                >
                                    Tooltip
                                </div>
                                <div className="flex mb-2">
                                    {stars}
                                </div>
                                <p>Score: {"" + score} / 5</p>
                                {bottomChildren}
                                <br />
                                <div className="rounded-lg border-solid border border-gray-700 px-3 py-2 prose-sm mb-5">
                                    <p className="m-0">Written by <b>Ryan Parker</b> on {date.toLocaleDateString()}</p>
                                    {dateModified && <p className="m-0">Modified {dateModified.toLocaleDateString()}</p>}
                                    <p><em>Ryan Parker is a Growth Marketing Manager and Staff Writer for Easybase. He has previously written and contributed to various tech-related publications.</em></p>
                                </div>
                                <SocialSharer path={router.asPath} title={title} className="my-4" />
                            </article>
                        </Layout>
                    </Container>
                    <Container className='bg-black text-white'>
                        <Layout>
                            <Footer />
                        </Layout>
                    </Container>
                </>
            </main>
        </main>
    )
}
