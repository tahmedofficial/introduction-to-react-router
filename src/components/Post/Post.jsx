import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body} = post;
    return (
        <div className='m-5 p-5 border rounded-xl'>
            <p className='flex justify-center text-xl font-semibold'>Post id: {id}</p>
            <h2 className='py-3 text-2xl font-semibold'>{title}</h2>
            <p>{body}</p>
            <div className='flex justify-center mt-6'>
                <Link to={`/post/${id}`}>
                    <button className='bg-[#032539] hover:opacity-70 duration-300 text-white py-2 px-5 rounded-full'>
                        Show Details</button>
                </Link>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;