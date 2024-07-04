import logo from "../../assets/logo/Logo.png"
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const linkedin_link="https://www.linkedin.com/in/arifa-nadiaa/"
const github_link="https://github.com/arifanadia"
const discord_link="https://discord.com/channels/arifanadia"

const Footer = () => {
    return (
        <section className="bg-main_color bg-opacity-50 p-10 ">
            <div className="flex justify-center">
                <img className="size-28" src={logo} alt="arifa nadia" />
            </div>
            <nav className="my-6">
                <ul className="flex justify-center gap-8 text-white">
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <nav className="flex gap-8 items-center text-white justify-center">
               <a href={linkedin_link}> <button className="flex items-center gap-2 border border-secondary_color  btn-outline btn text-xl font-bold rounded-full"><FaLinkedin /></button></a>
               <a href={github_link}> <button className="flex items-center gap-2 border border-secondary_color btn  btn-outline  text-xl font-bold rounded-full"><FaGithub /></button></a>
              <a href={discord_link}>  <button className="flex items-center gap-2 border border-secondary_color btn  btn-outline  text-xl font-bold rounded-full"><FaDiscord /></button></a>

            </nav>
            <p className="text-center my-6">© 2024 All Rights Reserved by Arifa Nadia</p>

        </section>
    );
};

export default Footer;