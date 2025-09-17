import React from "react";

interface CardProps {
    image: string,
    title: string,
    description: string,
    location: string,
    type: string
}

const ProjectCard : React.FC<CardProps> = ({image, title, description, location, type}) => {


    return(
        <div className="w-full shadow-lg bg-white rounded-b-lg">
            <div className="relative">
                <img src={image} alt="" className="rounded-t-lg w-full h-full object-fill" />
                <div className="opacity-0 duration-200 hover:opacity-100 absolute top-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-t-lg flex justify-center items-center">
                    <div className="flex items-center gap-[1rem]">
                        <div className="cursor-pointer w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full flex items-center gap-[0.5rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <h1 className="capitalize text-[0.75rem] font-semibold text-gray-800">view</h1>
                        </div>
                        <div className="cursor-pointer w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full flex items-center gap-[0.5rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full px-[1rem] py-[0.5rem]">
                <div className="flex items-center justify-between my-[1rem]">
                    <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                        <h1 className="capitalize text-[0.75rem] text-gray-800">{type}</h1>
                    </div>
                    <div className="">
                        <p className="capitalize">{location}</p>
                    </div>
                </div>

                <div className="mb-[1rem]">
                    <h1 className="capitalize text-[1rem] font-semibold">{title}</h1>
                    <p className="capitalize text-justify text-gray-600 text-[0.85rem] mt-[0.75rem]">{description}</p>
                </div>
            </div> */}
        </div>
    );
};


export default ProjectCard;