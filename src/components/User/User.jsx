import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({ user }) => {

    const { id, name, phone, email } = user;

    return (
        <div className='m-5 p-5 border rounded-lg text-center'>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <p className='my-4'>{email}</p>
            <p className='mb-4'>{phone}</p>
            <Link to={`/user/${id}`}>
                <button className='bg-gray-200 py-2 px-3 rounded-xl hover:bg-[#032539] hover:text-white duration-500'>
                    Show Details</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;