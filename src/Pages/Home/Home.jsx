import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import MyEducation from "./MyEducation";
import MyRecentProjects from "./MyRecentProjects";
import Skill from "./Skill";
import Stats from "./Stats";


const Home = () => {
    return (
        <div id="/" className=" ">
            <Hero />
            <Stats />
            <About />
            <Skill />
            <MyRecentProjects />
            <MyEducation/>
            <Contact />

        </div>
    );
};

export default Home;