import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();

    return (
        <div className=" md:w-5/6 mx-auto">
            <h2>Our users: {users.length}</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;