import anime from "animejs";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react";
import UiContext from "../../components/Context/UiContext";
import colors from "../../utils/colors";
import Head from "next/head";
import Header from "../../components/Header";
import Texture from "../../components/Texture";
import clsx from "clsx";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Tags from "../../components/Tags";
import useIsMounted from "../../utils/useIsMounted";

export default function BookingIndex() {
    const router = useRouter();
    const { booking_index } = router.query;
    const { isDarkMode, isMountedOnDarkMode } = useContext(UiContext);
    const displayNoneTimeoutRect = useRef<NodeJS.Timeout>();
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
    }, [isDarkMode])

    const bookingIndexStr: string = booking_index as string;

    const pageData: Record<string, { route: string }> = {
        "1": {
            route: "landing-pages"
        },
        "2": {
            route: "review"
        },
        "3": {
            route: "strategy-call"
        }
    }

    return (
        <>
            <Tags 
                title="Let's get in touch – #1 SaaS Landing Page Development Agency"
                description="Learn how your SaaS can triple its landing page conversion rate with the team at Landingjoy. We get started in less than 24 hours."
            />
            <Header />
            <main className={clsx('overflow-x-hidden relative')}>
                <>
                    <div className='absolute-center overflow-hidden'>
                        <Texture fadeIn fadeOut />
                        <Texture fadeIn />
                        <Texture />
                        <Texture />
                    </div>
                    <Container className={""}>

                    </Container>
                    <Container className='bg-black text-white'>
                        <Layout>
                            <Footer />
                        </Layout>
                    </Container>
                </>
            </main>
        </>
    )
}