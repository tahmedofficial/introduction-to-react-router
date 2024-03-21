import PropTypes from 'prop-types';
const User = ({ user }) => {

    const { id, name, phone, email } = user;

    return (
        <div className='m-5 p-5 border rounded-lg text-center'>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <p className='my-4'>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;