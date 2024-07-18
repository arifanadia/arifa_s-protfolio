

const About = () => {
    return (
        <section id="about" className="lg:flex justify-between items-center container mx-auto text-white p-8">
            <div>
                <h4 className="text-xl">About Me</h4>

            </div>
            <div className="border-r-4 border-white h-16 lg:h-52"></div>
            <div className="lg:w-10/12">
                <h1 className="text-2xl md:text-4xl">Behind the Code: Arifa Nadia</h1>
                <div className=" lg:flex justify-between gap-8 mt-8">
                    <p>
                        Hello! Let introduce again.. I&apos;m Arifa Nadia, a passionate web developer with a keen eye for design and functionality. My journey in web development began with a fascination for how the internet works and has since evolved into a career dedicated to building seamless, user-friendly web applications. With expertise in the MERN stack—MongoDB, Express.js, React.js, and Node.js—I create robust and scalable solutions that deliver exceptional user experiences.
                    </p>
                    <p>
                        I thrive on challenges and continuously seek opportunities to expand my skills and knowledge. My recent projects include developing a comprehensive Art & Craft Store website, where I implemented user authentication, CRUD operations, and responsive design. Collaboration and innovation are at the heart of my work, and &apos;m always eager to connect with fellow developers and contribute to exciting projects.
                    </p>
                </div>
                <p className="mt-8">Beyond coding, I enjoy exploring the latest tech trends, experimenting with new tools, and sharing my insights with the community. Let&apos;s build something amazing together!</p>
            </div>
        </section>
    );
};

export default About;