import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const postDetails = useLoaderData();
    const { title, body } = postDetails;
    const navigate = useNavigate();
    const { postId } = useParams();
    console.log(postId);

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <p className="text-2xl font-bold">Post Details</p>
            <div className="border m-5 p-5 text-center rounded-xl">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <h2 className="text-2xl font-semibold my-6">{body}</h2>
                <button onClick={handleGoBack} className="py-2 px-4 hover:opacity-60 duration-300 bg-amber-600 text-white rounded-xl">Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;