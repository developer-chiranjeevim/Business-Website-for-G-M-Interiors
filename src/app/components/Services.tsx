import React from "react";
import ServiceCard from "./ServiceCard";

const Services : React.FC  = () => {


    return(
        <>
        <div className="flex justify-center bg-gray-100">
            <div className="w-full max-w-[1440px] py-[2rem] px-[1rem]">
                {/* tagline and title container */}
                <div className="flex flex-col items-center">
                    <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                        <h1 className="capitalize text-[0.75rem] text-gray-800">services</h1>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl leading-[4rem] font-semibold capitalize">what we offer</h1>
                        <p className="text-center text-gray-600 leading-[1.75rem] mt-[0.75rem] capitalize">From initial concept to final installation, we provide comprehensive interior design <br></br>services tailored to your needs and budget.</p>
                    </div>
                </div>
                {/* service cards container */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1rem] mb-[1rem] mt-[1.5rem]">
                    <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        <ServiceCard />
                    </div>
                    <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        <ServiceCard />
                    </div>
                    <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        <ServiceCard />
                    </div>
                     <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        <ServiceCard />
                    </div>
                     <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        <ServiceCard />
                    </div>
                     <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        <ServiceCard />
                    </div>
                </div>
                <div className="">
                    <div className="bg-white text-center py-[2rem] border-[1px] border-gray-300 rounded-lg">  
                        <h1 className="capitalize text-2xl font-semibold">ready to transform your space?</h1>
                        <p className="text-gray-600 capitalize mt-[1rem]">Let's discuss your project and create a design solution that exceeds your <br></br>expectations.</p>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-[1rem] mt-[1rem]">
                            <button className="w-full font-semibold lg:w-fit cursor-pointer bg-black px-[0.75rem] py-[0.5rem] text-[0.75rem] text-white rounded-lg capitalize flex items-center justify-center gap-[0.25rem]">
                                schedule consulting 
                            </button>
                            <button className="w-full font-semibold lg:w-fit cursor-pointer bg-white border-[1px] border-gray-600 px-[0.75rem] py-[0.5rem] text-[0.75rem] text-gray-800 rounded-lg capitalize flex items-center justify-center gap-[0.25rem]"> 
                                get quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};


export default Services;