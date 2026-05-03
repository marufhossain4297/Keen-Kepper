import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="bg-[#244D3F] text-white">
            <div className="text-center pb-10 pt-20">
                <h2 className='text-4xl'>KeenKeeper</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className="">
                    <p>Social Links</p>
                    <div className="flex justify-center items-center gap-3 text-black">
                        <Link to="https://www.facebook.com" className=" p-2.5 bg-white rounded-3xl"><FaSquareFacebook /></Link>
                        <Link to="https://www.instagram.com" className=" p-2.5 bg-white rounded-3xl"><AiFillInstagram /></Link>
                        <Link to="https://www.twitter.com" className=" p-2.5 bg-white rounded-3xl"><RiTwitterXLine /></Link>
                    </div>
                </div>
            </div>
            <div className="border-t"></div>
            <div className="flex justify-between px-31.25 py-8">
                <div>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className="flex gap-9">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;