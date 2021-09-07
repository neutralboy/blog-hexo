import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from 'next'
import { postType, getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/mardownToHtml";
import SEO from "../../components/SEO";

interface IPost{
    post: postType
}

const Post = ({ post }: IPost) => {
    return(
        <>
            <SEO {...post} article url={`post/${post.slug}`} keywords={post.tags} />
            <div className="lg:m-16 m-6">
                <div className="mx-auto lg:p-10 p-4">
                    <h1 className="lg:text-6xl text-4xl text-white font-display ">{post.title}</h1>
                </div>
            </div>
            <div className="flex">
                <div className="h-3 bg-indigo-600 w-1/2" />
                <div className="h-3 bg-white w-7" />
            </div>

            <div className="lg:p-16 lg:px-56 p-8">
                <div className="prose prose-blue prose max-w-none text-white" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <Link href="/">
                <a className="inline-flex overflow-hidden text-white bg-gray-900 z-50 sticky bottom-0">
                    <span className="pl-4 pr-5 py-2.5 text-black bg-white hover:bg-gray-300">Go Back</span>
                    <span className="px-3.5 py-2 text-white bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="fill-current text-white"
                        >
                        <path
                            d="M15.535 3.515L7.05 12l8.485 8.485 1.415-1.414L9.878 12l7.072-7.071-1.415-1.414z"
                        ></path>
                        </svg>
                    </span>
                </a>
            </Link>
        </>
    )
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

    if(params && params.slug){

        const post = getPostBySlug(params.slug.toString(), [
            "title",
            "date",
            "slug",
            "image",
            "tags",
            "content",
            "description",
            "level"
        ]);
        const content = await markdownToHtml(post.content || '');
        return {
            props: {
                post: {
                    ...post,
                    content
                }
            }
        }


    }else{
        return {
            props: {
                post: {}
            }
        }
    }

}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts(['slug']);
    return{
        paths: posts.map(post=>{
            return{
                params: { slug: post.slug }
            }
        }), fallback: false
    }
}

export default Post;