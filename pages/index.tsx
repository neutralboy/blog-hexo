import Head from "next/head";
import { GetStaticProps } from 'next';
import { getAllPosts, postType } from "../lib/api";

import SEO from "../components/SEO";

interface IHome{
  posts: postType[]
};

const turnToSchema = (posts: postType[]) => {
  let counter = 0;  
  let a: any[] = [];
  posts.map(e => {
    counter = counter + 1;
    a.push({
      "@type": "ListItem",
      "position": counter,
      "url": `https://www.poorna.dev/post/${e.slug}`
    })
  });
  return JSON.stringify({
    "@context":"https://schema.org",
    "@type":"ItemList",
    "itemListElement": a
  });
};

export default function Home({ posts }: IHome) {
  return (
    <>
    <SEO article={false} title={"Home"} description={"A blog on Cloud, DevOps, Analytics and Healthcare"} />
    <Head>
      <script type="application/ld+json" >
        {turnToSchema(posts)}
      </script>
    </Head>
    <div className="lg:p-20 p-6 jumbo-bg ">
      <div>
        <div>

          <div className="lg:p-10 p-3">
            <div className="text-center">
              <h1 className="text-2xl lg:text-5xl p-8 block  mx-auto text-white">

                <span className="bg-indigo-600 p-2 text-white m-2 border-solid border-white border-b-8 inline-block font-display text-3xl lg:text-7xl">Cloud</span>,
                <span className="bg-indigo-600 p-2 text-white m-2 border-solid border-white border-b-8 inline-block font-display text-3xl lg:text-7xl">DevOps</span>,
                <span className="bg-indigo-600 p-2 text-white m-2 border-solid border-white border-b-8 inline-block font-display text-3xl lg:text-7xl">Analytics</span>,
                <span className="bg-indigo-600 p-2 text-white m-2 border-solid border-white border-b-8 inline-block font-display text-3xl lg:text-7xl">Healthcare</span>
                <span> and everything else </span> 
              </h1>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div className="flex justify-center" >
      <div className="xl:container p-6">
        <h3 className="text-white lg:text-5xl text-2xl">Latest Posts</h3>

        <div className="lg:grid lg:grid-flow-rows lg:grid-cols-3 lg:auto-rows-max lg:mt-10 mt-4 lg:space-y-0 space-y-4">

      {
        posts.map(e => 
            <div className="h-full lg:py-2 py-0" key={Math.random()}>
              <a href={`/post/${e.slug}`}>
              <div  className="flex flex-col justify-between h-full lg:mx-2 mt-1 lg:mb-8 lg:p-6 p-3 hover:bg-gray-700 bg-gray-800 rounded-lg border-solid border-indigo-600 border-b-4 shadow-xl hover:border-indigo-800">
                <div className="lg:flex lg:justify-between">
                  <div>
                    <h4 className="text-white font-display text-2xl">{e.title}</h4>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between" >
                {
                    e.level && <div>
                      <p className="bg-indigo-600 p-1 text-white rounded shadow-md z-30 inline-block my-2 lg:mt-0">{e.level}</p>
                    </div>
                  }
                </div>


                <div>
                  <p className="text-gray-200">
                    {e.description}
                  </p>
                </div>
              </div>
              </a>
            </div>
          )
      }
        
      </div>
      </div>
    </div>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['slug', 'title', 'level', 'description', 'date']);
  return {
    props: {
      posts
    }
  }
};