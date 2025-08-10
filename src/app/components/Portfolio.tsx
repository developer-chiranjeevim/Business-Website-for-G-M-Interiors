import React from "react";
import ProjectCard from "./ProjectCard";


const Portfolio : React.FC = () => {


    return(
        <>
            <div className="flex justify-center">
                <div className="w-full max-w-[1440px] py-[2rem] px-[1rem]">
                    {/* tagline and title container */}
                    <div className="flex flex-col items-center">
                        <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                            <h1 className="capitalize text-[0.75rem] text-gray-800">Portfolio</h1>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl leading-[4rem] font-semibold capitalize">Our Latest Projects</h1>
                            <p className="text-center text-gray-600 leading-[1.75rem] mt-[0.75rem]">Explore our portfolio of stunning interior design projects that showcase our <br></br>expertise across residential, commercial, and hospitality spaces.</p>
                        </div>
                        <div className="my-[2rem]">
                            <ul className="inline-flex items-center justify-center gap-[1rem] flex-wrap">
                                <li className="capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer">all</li>
                                <li className="capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]">residential</li>
                                <li className="capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]">commercial</li>
                                <li className="capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]">hospitality</li>
                            </ul>
                        </div>
                    </div>
                    {/* projects master container */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1rem] mb-[1rem]">
                        <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ProjectCard />
                        </div>
                        <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ProjectCard />
                        </div>
                        <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ProjectCard />
                        </div>
                         <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ProjectCard />
                        </div>
                         <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ProjectCard />
                        </div>
                         <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ProjectCard />
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="w-full font-semibold lg:w-fit cursor-pointer bg-white border-[1px] border-gray-600 px-[0.75rem] py-[0.5rem] text-[0.75rem] text-gray-800 rounded-lg capitalize flex items-center justify-center gap-[0.25rem]">
                            view all projects
                        </button>
                    </div>
                   
                    
                </div>
            </div>
        </>
    );
};


export default Portfolio;