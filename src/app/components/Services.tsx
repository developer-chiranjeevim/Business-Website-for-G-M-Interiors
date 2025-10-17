"use client";

import React,{ useState, useEffect} from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";

interface cardDatasIf {
    title: string,
    content: string,
    icon: string,
    perks: string[],
}

const Services : React.FC  = () => {
    const [datas, setDatas] = useState<cardDatasIf[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const request = await axios.get(`/data/services.json`);
                const data = await request.data;
                setDatas(data.datas);
                console.log(data);

            }catch(error: unknown){
                if(error instanceof Error){
                    console.log(error.message);
                }else{
                    console.log("An unexpected error occurred:", error);
                };
            };
        };

        fetchData();
        
    },[]);

    return(
        <>
        <div id="services" className="flex justify-center bg-gray-100">
            <div className="w-full max-w-[1440px] py-[2rem] px-[1rem]">
                {/* tagline and title container */}
                <div className="flex flex-col items-center">
                    <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                        <h1 className="capitalize text-[0.75rem] text-gray-800">Our Services</h1>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl leading-[4rem] font-semibold capitalize">what we offer</h1>
                        <p className="text-center text-gray-600 leading-[1.75rem] mt-[0.75rem] capitalize">From initial concept to final installation, we provide comprehensive interior design services <br></br>tailored to transform your space into something extraordinary.</p>
                    </div>
                </div>
                {/* service cards container */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1rem] mb-[1rem] mt-[1.5rem]">
                    {
                        datas?.map((data, id) => (
                            <div key={id} className="col-span-2 md:col-span-1 lg:col-span-1">
                                <ServiceCard title={data.title} content={data.content} icon={data.icon} perks={data.perks} />
                            </div>
                        ))
                    }
                </div>
                {/* <div className="">
                    <div className="bg-white text-center py-[2rem] px-[1rem] border-[1px] border-gray-300 rounded-lg">  
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
                </div> */}
            </div>
        </div>
        </>
    );
};


export default Services;