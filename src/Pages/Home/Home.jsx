import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import MyRecentProjects from "./MyRecentProjects";
import Skill from "./Skill";
import Stats from "./Stats";


const Home = () => {
    return (
        <div className=" ">
            <Hero />
            <Stats />
            <About />
            <Skill />
            <MyRecentProjects />
            <Contact />

        </div>
    );
};

export default Home;