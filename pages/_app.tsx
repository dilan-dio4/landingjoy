import '../styles/globals.css';
import type { AppProps } from 'next/app';
import UiProvider from '../components/Context/UiProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import mixpanel from 'mixpanel-browser';

const isDev = process.env.NODE_ENV === 'development';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        mixpanel.init(isDev ? '9f0cbc6c3bf05ba5acac424524685b68' : '572148e2389279933f3a442e2befaf2d', {
            debug: isDev,
            api_host: '/pm',
            ignore_dnt: true,
            loaded: () => handleRouteChange(router.pathname),
        });
    }, []);

    const handleRouteChange = (url: string) => {
        mixpanel.track('page_view', { url });
    };

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <UiProvider>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
            </Head>
            <Component {...pageProps} />
        </UiProvider>
    );
}

export default MyApp;
