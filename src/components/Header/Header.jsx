import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <span>My website</span>
                <ul className="flex gap-3 justify-center">
                    <NavLink to="/">
                        <button className="hover:bg-[#032539] duration-500 hover:text-white text-black py-1 px-5 rounded-2xl">
                            Home</button></NavLink>
                    <NavLink to="/about">
                        <button className="hover:bg-[#032539] duration-500 hover:text-white text-black py-1 px-5 rounded-2xl">
                            About</button></NavLink>
                    <NavLink to="/contact">
                        <button className="hover:bg-[#032539] duration-500 hover:text-white text-black py-1 px-5 rounded-2xl">
                            Contact</button></NavLink>
                    <NavLink to="/users">
                        <button className="hover:bg-[#032539] duration-500 hover:text-white text-black py-1 px-5 rounded-2xl">
                            Users</button></NavLink>
                    <NavLink to="/posts">
                        <button className="hover:bg-[#032539] duration-500 hover:text-white text-black py-1 px-5 rounded-2xl">
                            Posts</button></NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;