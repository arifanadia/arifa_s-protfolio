import bg from "../../assets/Home/bg2.gif"
import banner from "../../assets/Home/banerimg.png"
import { FaDiscord, FaDownload } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import downloadResume from "../../assets/Resume/Arifa Atiq Nadia.pdf"
const linkedin_link = "https://www.linkedin.com/in/arifa-nadiaa/"
const github_link = "https://github.com/arifanadia"
const discord_link = "https://discord.com/channels/arifanadia"

const Hero = () => {
    return (


        <section className="bg-no-repeat bg-cover bg-center lg:h-[500px]" style={{ backgroundImage: `linear-gradient(#000000F2,#2e165aCF),url(${bg})` }}>
            <div className="p-12 flex flex-col-reverse lg:flex-row justify-between max-w-7xl mx-auto items-center">
                <div className="space-y-3 lg:w-1/2 text-white ">
                    <h1 className="text-4xl font-bold ">Hi,I&apos;m <span className="text-transparent bg-gradient-to-r from-secondary_color via-[#7545d8] to-white bg-clip-text">Arifa Nadia</span></h1>
                    <h1 className="text-4xl font-bold  ">Web Developer</h1>
                    <p >welcome to my playground! I&apos;m a web developer who is passionate about MERN stack development. I specialize in creating visually appealing and user-friendly web applications using MongoDB, Express.js, React.js, and Node.js. My goal is to build efficient, scalable, and maintainable applications that provide an excellent user experience.</p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-center">
                        <button className=" mt-12 text-transparent bg-gradient-to-r from-[#7545d8] to-white bg-clip-text border border-secondary_color btn text-xl font-bold rounded-full"><a className="flex items-center gap-2 " href={downloadResume}>Download Resume <FaDownload className="text-white" /></a> </button>
                        <div className="flex gap-3">
                            <a href={linkedin_link}><button className="flex mt-12 items-center gap-2 border border-secondary_color  btn-outline btn text-xl font-bold rounded-full"><FaLinkedin className="text-[#7545d8]" /></button></a>
                            <a href={github_link}><button className="flex mt-12 items-center gap-2 border border-secondary_color btn  btn-outline  text-xl font-bold rounded-full"><FaGithub className="text-[#7545d8]" /></button></a>
                            <a href={discord_link}><button className="flex mt-12 items-center gap-2 border border-secondary_color btn  btn-outline  text-xl font-bold rounded-full"><FaDiscord className="text-[#7545d8]" /></button></a>

                        </div>
                    </div>
                </div>

                <div>
                    <img src={banner} alt="development career" />
                </div>

            </div>

        </section>




    );
};

export default Hero;