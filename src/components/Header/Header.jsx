import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <span>My website</span>
                <ul className="flex gap-8 justify-center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;