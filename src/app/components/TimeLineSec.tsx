"use client";

import React,{ useState, useEffect } from "react";
import TimeLineCard from "./TimelineCard";
import axios from "axios";

interface timelineIf {
    image: string,
    date: string,
    title: string,
    context: string,
};


const TimelineSec : React.FC = () => {

    const [ timelineDatas, setTimelineDatas ] = useState<timelineIf[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const request = await axios.get(`/data/timeline.json`);
                const data = await request.data;
                console.log(data.datas);
                setTimelineDatas(data.datas);
                

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
        <div id="timeline" className="flex justify-center">
            <div className="w-full max-w-[1440px] py-[2rem] px-[1rem] flex flex-col items-center">
                {/* tagline and title container */}
                <div className="flex flex-col items-center">
                    <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                        <h1 className="capitalize text-[0.75rem] text-gray-800">timeline</h1>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl leading-[4rem] font-semibold capitalize">our projects in chronological order</h1>
                        <p className="text-center text-gray-600 leading-[1.75rem] mt-[0.75rem]">Explore our stunning interior design projects that showcase our <br></br>expertise across residential, commercial, and hospitality spaces.</p>
                    </div>
                </div>
                {/* timeline component */}
                <div className="my-[2rem] px-[1rem]">
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                        {
                            timelineDatas.map((timeline, key) => (
                                <TimeLineCard key={key} image={timeline.image} date={timeline.date} title={timeline.title} context={timeline.context} />                                
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
};


export default TimelineSec;