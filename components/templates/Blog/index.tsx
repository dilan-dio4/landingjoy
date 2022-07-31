import Head from 'next/head';
import Image from 'next/image';
import Footer from '../../Footer';
import Header from '../../Header';
import Tags from '../../Tags';
import SocialSharer from '../../SocialSharer';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import colors from '../../../utils/colors';
import Container from '../../Container';
import Layout from '../../Layout/Layout';
import { useContext, useEffect } from 'react';
import useIsMounted from '../../../utils/useIsMounted';
import UiContext from '../../Context/UiContext';
import anime from 'animejs';

interface IBlog {
    title: string;
    image?: string;
    date: Date;
    dateModified?: Date;
    description: string;
    children: React.ReactNode;
}

export default function Blog({ title, image, date, dateModified, description, children }: IBlog) {
    const router = useRouter();

    const { isDarkMode, isMountedOnDarkMode } = useContext(UiContext);
    const isMounted = useIsMounted();
    const MAIN_ID = "main-container";

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

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "url": `https://landingjoy.com${router.pathname}`
        },
        "headline": title,
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
                    <Container className={""}>
                        <Layout>
                            <article className="prose mx-auto max-w-[676px] px-6 pt-10 text-secondary-300 dark:text-primary-100">
                                <h1>{title}</h1>
                                {image && (
                                    <Image
                                        alt={`landingjoy blog ${title} image`}
                                        src={image}
                                        width="100%"
                                        height="60%"
                                        layout="responsive"
                                        objectFit="contain"
                                    />
                                )}
                                {children}
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
