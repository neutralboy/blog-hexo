import Head from "next/head";

interface ISEO{
    title: string,
    image?: string,
    description: string,
    keywords?: string,
    url?: string,
    article: boolean,
    date?: string
}

const SEO = ({ title, image, description, keywords, url, article, date }: ISEO) => {
    return(
        <>
            <Head>
                <title>{title} | Poorna's Blog</title>
                <meta property="description" content={description} />
                <meta property="og:title" content={`${title} | Poorna's Blog`} />
                <meta property="og:type" content="blog" />
                <meta property="og:url" content={`https://www.poorna.dev/${url || ""}`} />
                <meta property="og:image" content={ image ? image : `https://res.cloudinary.com/poorna/image/upload/v1622971116/my-blog/logo/Screenshot_2021-06-06_at_14-45-29_Screenshot.png`} />
                <meta property="og:locale" content="en_US" />
                {
                    article && 
                    <>
                        <meta property="og:article:published_time" content={date} />
                        <meta property="og:article:tag" content={keywords} />
                        <meta property="og:article:author" content="Poornachandra" />
                    </>
                }
            </Head>
        </>
    )
};

export default SEO;