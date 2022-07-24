import Head from 'next/head'
import { useRouter } from 'next/router'

interface ITags {
    description: string;
    title: string;
    ogImage?: string;
}

export default function Tags({ title, ogImage, description }: ITags) {
    const router = useRouter();
    const rootUrl = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://landingjoy.com";
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

            <link rel="icon" type="image/svg+xml" href={`${rootUrl}/favicon/favicon.svg`} />
            <link rel="icon" type="image/png" href={`${rootUrl}/favicon/favicon.png`} />
            <meta name="application-name" content="Landingjoy" />
        </Head>
    )
}
