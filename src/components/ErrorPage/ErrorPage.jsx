import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center text-2xl mt-10">
            <h2>Oops!!!</h2>
            <p>{error.statusText||error.message}</p>
            <Link to={`/`}><button className="p-2 bg-slate-600 rounded-xl text-white mt-8">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;