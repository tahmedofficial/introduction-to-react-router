import { useLoaderData } from "react-router-dom";

const PostDetails = () => {

    const postDetails = useLoaderData();
    const { title, body } = postDetails;

    return (
        <div>
            <p className="text-2xl font-bold">Post Details</p>
            <div className="border m-5 p-5 text-center rounded-xl">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <h2 className="text-2xl font-semibold mt-6">{body}</h2>
            </div>
        </div>
    );
};

export default PostDetails;