import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import bg from "../../assets/Projects/details bg.jpg"
import { LuArrowUpRight } from "react-icons/lu";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export const loadProjects = async () => {
    const response = await fetch('/projects.json');
    const projects = await response.json();
    return projects;
};

const ProjectsDetails = () => {
    const { id } = useParams();
    const projects = useLoaderData();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projects.find(project => project.id === parseInt(id));
        setProject(foundProject);
    }, [id, projects]);

    return (
        <section id="projects" className=" text-white ">
            <div className="bg-no-repeat bg-cover bg-center h-[200px]" style={{ backgroundImage: `linear-gradient(#00000099,#2e165a5C),url(${bg})` }}>
                <h1 className="text-3xl text-white font-bold text-center p-12">Project Details</h1>
            </div>
            {project ? (
                <div>
                    <div className="lg:flex  gap-12 max-w-7xl mx-auto p-12">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold">{project.name}</h1>
                            <p>{project.description}</p>
                            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="btn rounded-2xl text-white font-bold bg-gradient-to-r from-[#7545d8] via-secondary_color to-main_color flex items-center gap-3">
                                Live Preview <LuArrowUpRight />
                            </a>
                            <a href={project.github_client_link} target="_blank" rel="noopener noreferrer" className="btn rounded-2xl text-white font-bold bg-gradient-to-r from-[#7545d8] via-secondary_color to-main_color flex items-center gap-3">
                                Client-side Code <LuArrowUpRight />
                            </a>
                            <a href={project.github_server_link} target="_blank" rel="noopener noreferrer" className="btn rounded-2xl text-white font-bold bg-gradient-to-r from-[#7545d8] via-secondary_color to-main_color flex items-center gap-3">
                               Serve-side Code <LuArrowUpRight />
                            </a>
                        </div>
                        <div className="lg:w-1/2 flex justify-between items-center">
                            <div className="">
                                <div>
                                    <h5 className="text-xl text-gray-50">Category</h5>
                                    <h4 className="text-2xl font bold my-3">Web Development</h4>
                                </div>
                                <div>
                                    <h5 className="text-xl">Start Date</h5>
                                    <h4 className="text-2xl font bold my-3">{project.start_date}</h4>
                                </div>


                            </div>
                            <div className="">
                                <div>
                                    <h5 className="text-xl">Client</h5>
                                    <h4 className="text-2xl font bold my-3">Web Development</h4>
                                </div>

                                <div>
                                    <h5 className="text-xl">Designer</h5>
                                    <h4 className="text-2xl font bold my-3">{project.designer_name}</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="bg-main_color bg-opacity-50 p-12">
                        <Swiper
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 10 },
                                640: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 3, spaceBetween: 30 },
                                1024: { slidesPerView: 4, spaceBetween: 30 },
                            }}
                            slidesPerView={4}
                            grabCursor={true}
                            pagination={{ clickable: true }}
                            modules={[Pagination, Navigation]}
                        >
                            {project.details_images.map(image => (
                                <SwiperSlide key={image.id}>
                                
                                 <img src={image} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="max-w-7xl mx-auto my-8">
                        <h1 className="text-3xl font-bold">Project Features</h1>
                        <div className="grid lg:grid-cols-3 gap-4">
                            {
                                project.features.map((feature,index) => 
                                    <div key={index} className="bg-main_color rounded-md hover:border-2 hover:border-secondary_color hover:bg-secondary_color hover:bg-opacity-50 p-8 my-6 "> 
                                 
                                        <p className="text-xl">{feature}</p>
                                

                                    </div>
                                )
                            }
                        </div>

                    </div>
                    <div className="max-w-7xl mx-auto my-8">
                        <h1 className="text-3xl font-bold">Used Technology&apos;s</h1>
                        <div className="grid lg:grid-cols-5 gap-4">
                            {
                                project.technologies.map((technologies,index) => 
                                    <div key={index} className=" p-8 my-6 "> 
                                 
                                        <img className="size-32" src={technologies} alt="" />
                                

                                    </div>
                                )
                            }
                        </div>

                    </div>

                </div>
            ) : (
                <p>Loading project details...</p>
            )}
        </section>
    );
};

export default ProjectsDetails;
