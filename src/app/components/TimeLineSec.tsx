import React from "react";
import TimeLineCard from "./TimelineCard";

const TimelineSec : React.FC = () => {

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
                        <TimeLineCard />
                        <TimeLineCard />
                        <TimeLineCard />
                        <TimeLineCard />
                    </ol>
                </div>
            </div>
        </div>
    );
};


export default TimelineSec;