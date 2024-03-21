import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const { name } = user;

    return (
        <div className="md:w-5/6 mx-auto">
            <div className="border m-5 p-5 text-center rounded-xl">
                <h2 className="text-2xl font-semibold">Details about user: {name}</h2>
            </div>
        </div>
    );
};

export default UserDetails;