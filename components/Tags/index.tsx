import Head from 'next/head'
import { useRouter } from 'next/router'

interface ITags {
    description: string;
    title: string;
    ogImage?: string;
}

export default function Tags({ title, ogImage, description }: ITags) {
    const router = useRouter();
    const rootUrl = process.env.NODE_ENV === 'development' ? "http://localhost:3003" : "https://landingjoy.com";
    const truncatedDescription = description.substring(0, 155)
    let socialImage = `${rootUrl}/og.png`;
    if (ogImage) {
        if (ogImage.includes("://")) {
            socialImage = ogImage;
        } else {
            socialImage = `${rootUrl}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;
        }
    }

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={truncatedDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`${rootUrl}${router.asPath}`} />
            <meta property="og:image" content={socialImage} />
            <meta property="og:description" content={truncatedDescription} />
            <meta property="og:description" content={truncatedDescription} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={truncatedDescription} />
            <meta name="twitter:image" content={socialImage} />
            <meta name="color-scheme" content="dark light" />

            <link rel="manifest" href={`${rootUrl}/favicon/site.webmanifest`} />
            <link rel="apple-touch-icon" sizes="180x180" href={`${rootUrl}/favicon/apple-touch-icon.png`} />
            {/* <link rel="icon" type="image/png" sizes="16x16" href={`${rootUrl}/favicon/favicon-16x16.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${rootUrl}/favicon/favicon-32x32.png`} /> */}
            <link rel="shortcut icon" href={`${rootUrl}/favicon.ico`} type="image/x-icon" />
            <meta name="msapplication-config" content={`${rootUrl}/favicon/browserconfig.xml`} />
            <meta name="application-name" content="Landingjoy" />
        </Head>
    )
}
