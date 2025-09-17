"use client"

import React,{ useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

interface cardDatasIF{
    image: string,
    location: string,
    title: string,
    description: string,
}

const Portfolio : React.FC = () => {

    const [optionActive, setOptionActive] = useState<string>("commercial");
    const [cardDatas, setCardDatas] = useState<cardDatasIF[]>([]);

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const request = await axios.get(`/data/${optionActive}.json`);
                const data = await request.data;
                setCardDatas(data.datas);

            }catch(error: unknown){
                if(error instanceof Error){
                    console.log(error.message);
                }else{
                    console.log("An unexpected error occurred:", error);
                };
            };
        };

        

        fetchData();
    },[optionActive]);

    

    const toggleOption = (current: string) => {
        if(current == optionActive){
            return;
        }else{
            setOptionActive(current);
        };

        // console.log(optionActive);
    };


    return(
        <>
            <div id="portfolio" className="flex justify-center">
                <div className="w-full max-w-[1440px] py-[2rem] px-[1rem]">
                    {/* tagline and title container */}
                    <div className="flex flex-col items-center">
                        <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                            <h1 className="capitalize text-[0.75rem] text-gray-800">Our Work</h1>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl leading-[4rem] font-semibold capitalize">Our Portfolio</h1>
                            <p className="text-center text-gray-600 leading-[1.75rem] mt-[0.75rem]">Explore our collection of interior design projects across residential, commercial, and <br></br>restaurant spaces.</p>
                        </div>
                        <div className="my-[2rem]">
                            <ul className="inline-flex items-center justify-center gap-[1rem] flex-wrap">
                                {/* <li className="capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer">all</li> */}
                                {/* <li className="capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]">residential</li> */}
                                <li onClick={(event) => toggleOption("commercial")} className={(optionActive == "commercial"?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>commercial</li>
                                <li onClick={(event) => toggleOption("restaurant")} className={(optionActive == "restaurant"?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>restaurant</li>
                                <li onClick={(event) => toggleOption("residential")} className={(optionActive == "residential"?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>residential</li>
                            </ul>
                        </div>
                    </div>
                    {/* projects master container */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1rem] mb-[1rem]">
                       
                        {
                            cardDatas.map((card, key) => (
                               <div key={key} className="col-span-2 md:col-span-1 lg:col-span-1">
                                    <ProjectCard image={card.image} title={card.title} description={card.description} location={card.location} type={optionActive} />
                                </div>
                            ))
                        }
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