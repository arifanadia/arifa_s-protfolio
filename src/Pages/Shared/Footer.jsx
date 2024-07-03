import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo.png"

const Footer = () => {
    return (
        <section className="bg-main_color bg-opacity-50 p-10 ">
            <div className="flex justify-center">
                <img className="size-28" src={logo} alt="arifa nadia" />
            </div>
            <nav className="my-6">
                <ul className="flex justify-center gap-8 text-white">
                    <Link to={'/about-me'}><li>About Me</li></Link>
                    <Link to={'/projects'}><li>Projects</li></Link>
                    <Link to={'/blog'}><li>Blog</li></Link>
                    <Link to={'/projects'}><li>Contact</li></Link>
                </ul>
            </nav>
            <nav className="my-6">
                <ul className="flex justify-center gap-8 text-white">
                    <Link to={'/about-me'}><li>About Me</li></Link>
                    <Link to={'/projects'}><li>Projects</li></Link>
                    <Link to={'/blog'}><li>Blog</li></Link>
                    <Link to={'/projects'}><li>Contact</li></Link>
                </ul>
            </nav>
            <p className="text-center">© 2024 All Rights Reserved by Arifa Nadia</p>

        </section>
    );
};

export default Footer;