import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo.png"
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="bg-main_color bg-opacity-50 p-10 ">
            <div className="flex justify-center">
                <img className="size-28" src={logo} alt="arifa nadia" />
            </div>
            <nav className="my-6">
                <ul className="flex justify-center gap-8 text-white">
                    <Link to={'/blog'}><li>Blog</li></Link>
                    <Link to={'/projects'}><li>Projects</li></Link>
                    <Link to={'/projects'}><li>Contact</li></Link>
                </ul>
            </nav>
            <nav className="flex gap-8 items-center text-white justify-center">
                <button className="flex items-center gap-2 border border-secondary_color  btn-outline btn text-xl font-bold rounded-full"><FaLinkedin  /></button>
                <button className="flex items-center gap-2 border border-secondary_color btn  btn-outline  text-xl font-bold rounded-full"><FaGithub  /></button>
                <button className="flex items-center gap-2 border border-secondary_color btn  btn-outline  text-xl font-bold rounded-full"><FaDiscord  /></button>

            </nav>
            <p className="text-center my-6">© 2024 All Rights Reserved by Arifa Nadia</p>

        </section>
    );
};

export default Footer;