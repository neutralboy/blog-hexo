import { GetStaticProps } from 'next';
import { getAllPosts, postType } from "../lib/api";

import SEO from "../components/SEO";

interface IHome{
  posts: postType[]
}

export default function Home({ posts }: IHome) {
  return (
    <>
    <SEO article={false} title={"Home"} description={"A blog on Cloud, DevOps, Analytics and Healthcare"} />
    <div className="p-20 jumbo-bg ">
      <div>
        <div>

          <div className="p-10">
            <div className="text-center">
              <h1 className="text-5xl p-8 block  mx-auto text-white">
                <span>Random assortment of everything </span> 
                <span className="bg-indigo-600 p-2 text-white m-2 border-solid border-white border-b-8 inline-block font-display text-7xl">Cloud</span>,
                <span className="bg-indigo-600 p-2 text-white m-2 border-solid border-white border-b-8 inline-block font-display text-7xl">DevOps</span>,
                <span className="bg-indigo-600 p-2 text-white m-2 border-solid border-white border-b-8 inline-block font-display text-7xl">Analytics</span>
                and
                <span className="bg-indigo-600 p-2 text-white m-2 border-solid border-white border-b-8 inline-block font-display text-7xl">Healthcare</span>
              </h1>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div>
      <div className="p-20">
        <h3 className="text-white text-5xl">Latest Posts</h3>

        <div className="grid grid-flow-rows grid-cols-3 auto-rows-max  mt-10">

      {
        posts.map(e => 
            <div key={Math.random()}>
              <a href={`/post/${e.slug}`}>
              <div  className="mx-6 mt-1 mb-8 p-6 bg-gray-800 rounded-lg border-solid border-indigo-600 border-b-4 shadow-xl">
                <div className="flex justify-between">
                  <div>
                    <h4 className="text-white font-display text-3xl">{e.title}</h4>
                  </div>
                  {
                    e.level && <div>
                      <p className="bg-indigo-600 p-1 text-white rounded shadow-lg z-30">{e.level}</p>
                    </div>
                  }
                </div>
                <div className="mt-4">
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