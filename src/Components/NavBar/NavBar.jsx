import { ChartLine, Clock } from "lucide-react";
import { RiHome2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router";

const NavBar = () => {
    const links = <>
        <li><NavLink to="/" className={({ isActive }) => `py-2 rounded-lg ${isActive ? 'font-semibold text-white bg-[#244D3F]' : ''}`}><RiHome2Line className="w-6 h-6" />Home</NavLink></li>

        <li><NavLink to="/timeline" className={({ isActive }) => `py-2 rounded-lg ${isActive ? 'font-bold text-white bg-[#244D3F]' : ''}`}><Clock strokeWidth={2.25} />Timeline</NavLink></li>

        <li><NavLink to="/status" className={({ isActive }) => `py-2 rounded-lg ${isActive ? 'font-bold text-white bg-[#244D3F]' : ''}`}><ChartLine strokeWidth={2.25} />Stats</NavLink></li>
    </>
    return (
    <div className="navbar md:px-10 bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
            </div>
            <Link to="/" className="text-2xl font-bold">Keen<span className="text-[#244D3F] font-semiblod">Keeper</span></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2.5 font-medium text-[#64748B]">
                {links}
            </ul>
        </div>
    </div>
);
};

export default NavBar;