import bg from "../../assets/Home/bg2.gif"
import banner from "../../assets/Home/banerimg.png"

const Hero = () => {
    return (


        <section className="bg-no-repeat bg-cover bg-center lg:h-[500px]" style={{ backgroundImage: `linear-gradient(#000000F2,#2e165aCF),url(${bg})` }}>
            <div className="p-12 flex flex-col-reverse lg:flex-row justify-between max-w-7xl mx-auto items-center">
                <div className="space-y-3 lg:w-1/2 text-white ">
                    <h1 className="text-4xl font-bold ">Hi,I&apos;m <span className="text-transparent bg-gradient-to-r from-secondary_color via-[#7545d8] to-white bg-clip-text">Arifa Nadia</span></h1>
                    <h1 className="text-4xl font-bold  ">Web Developer</h1>
                    <p>welcome to my playground! I&apos;m a web developer who is passionate about MERN stack development. I specialize in creating visually appealing and user-friendly web applications using MongoDB, Express.js, React.js, and Node.js. My goal is to build efficient, scalable, and maintainable applications that provide an excellent user experience.</p>
                </div>
               
                <div>
                    <img src={banner} alt="development career" />
                </div>
               
            </div>

        </section>




    );
};

export default Hero;