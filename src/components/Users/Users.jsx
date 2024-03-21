import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h2>Our users: {users.length}</h2>
        </div>
    );
};

export default Users;