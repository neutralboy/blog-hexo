import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
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
            <div className="m-16">
                <div className="mx-auto p-10">
                    <h1 className="text-6xl text-white font-display ">{post.title}</h1>
                </div>
            </div>
            <div className="flex">
                <div className="h-3 bg-indigo-600 w-1/2" />
                <div className="h-3 bg-white w-7" />
            </div>
            
            <div className="p-16 px-56">
                <div className="prose prose-blue prose max-w-none text-white" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
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