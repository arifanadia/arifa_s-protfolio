import { useEffect, useState } from "react";
import {  LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const MyRecentProjects = () => {

    const [projects, setProjects] = useState([]);
    const [hoveredProject, setHoveredProject] = useState(null);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
  
    return (
        <section id="projects" className="container mx-auto text-white p-8 my-12">
            <div className="lg:flex justify-between items-center ">
                <div>
                    <h4 className="text-2xl">Projects</h4>
                </div>
                <div className="border-r-4 border-white h-16 "></div>
                <div className="w-10/12">
                    <h1 className="text-2xl font-bold ">
                        Explore the diverse range of projects that I have worked on, showcasing my technical skills, creativity, and dedication to delivering exceptional web experiences. Each project reflects my commitment to excellence and continuous learning in the field of web development.
                    </h1>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {projects.map(project => (
                    <div
                        key={project.id}
                        className="relative overflow-hidden rounded-lg bg-cover bg-center h-80 md:h-96"
                        style={{ backgroundImage: `url(${project.image_link})` }}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          
                        </div>
                        {hoveredProject === project.id && (
                            <div className="absolute w-full bottom-1 flex items-center justify-center ">
                                <div className="bg-gradient-to-r from-main_color via-secondary_color to-[#7545d8] p-4 rounded-md shadow- mx-auto flex justify-between gap-12">
                                    <p className="text-lg font-medium">{project.name}</p>
                                    {/* <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline mt-2 block"
                                    >
                                       
                                    </a> */}
                                    <Link to={`/project-details/${project.id}`}><button className="text-xl text-white"><LuArrowUpRight /></button></Link>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyRecentProjects;