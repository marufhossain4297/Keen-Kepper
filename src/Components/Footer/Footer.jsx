import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="bg-[#244D3F] text-white">
            <div className="text-center pb-10 pt-20">
                <h2 className='md:text-7xl text-5xl font-bold'>KeenKeeper</h2>
                <p className="mt-4 mb-6 text-[#8FA39C]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className="">
                    <p className="text-xl mb-4 font-medium">Social Links</p>
                    <div className="flex justify-center items-center gap-3 text-black">
                        <Link to="https://www.facebook.com" className=" p-2.5 bg-white rounded-3xl"><FaSquareFacebook /></Link>

                        <Link to="https://www.instagram.com" className=" p-2.5 bg-white rounded-3xl"><AiFillInstagram /></Link>

                        <Link to="https://www.twitter.com" className=" p-2.5 bg-white rounded-3xl"><RiTwitterXLine /></Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#225946]"></div>

            <div className="md:flex justify-between pl-10 md:px-31.25 py-8">
                <div>
                    <p className="text-[#8FA39C] font-light">© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className="grid pt-5 lg:pt-0 grid-cols-1 md:grid-cols-3 gap-9 text-[#8FA39C] font-light">
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms of Service</Link>
                    <Link to="/">Cookies</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;