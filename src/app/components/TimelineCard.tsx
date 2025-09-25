import React from "react";


interface timelineIf {
    image: string,
    date: string,
    title: string,
    context: string,
};


const TimeLineCard : React.FC<timelineIf> = ({ image, date, title, context }) => {


    return(
        <li className="mb-10 ms-4">
            <div className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mt-1.5 -start-4 border border-white dark:border-gray-900 dark:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-600 dark:text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 
                                2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 
                                0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 
                                21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 
                                5.25 9h13.5A2.25 2.25 0 0 1 
                                21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 
                                15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 
                                15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 
                                15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 
                                2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 
                                2.25h.008v.008H16.5V15Z" />
                </svg>
            </div>
            <div className="ml-[1rem] bg-gray-100 p-[0.5rem] rounded-lg">
                {/* <div className="relative w-full">
                    <img src={image} alt="timeline card image" className="w-full h-full object-cover rounded-lg" />
                </div> */}
                <div className="mt-[1rem]">
                    <time className=" capitalize mb-1 text-sm font-normal leading-none text-gray-500">
                       {date}
                    </time>
                    <h3 className="text-[1rem] capitalize text-lg font-semibold text-gray-900">
                        {title}
                    </h3>
                    <p className="text-[0.85rem] capitalize mb-4 text-base font-normal text-gray-500 ">
                        {context}
                    </p>
                </div>
            </div>
        </li>
    );
};



export default TimeLineCard;