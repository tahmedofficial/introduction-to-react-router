import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {

    const posts = useLoaderData();
    console.log(posts);

    return (
        <div className=" md:w-5/6 mx-auto">
            <h2 className="text-2xl font-semibold">Posts: {posts.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;