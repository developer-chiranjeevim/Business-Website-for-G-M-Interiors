import React from "react";



const ServiceCard : React.FC = () => {


    return(
        <div className="w-full bg-white px-[1rem] py-[1rem] rounded-lg duration-150 hover:shadow-lg ">
            <div className="w-fit bg-gray-300 p-[0.75rem] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </div>
            <div className="my-[1rem]">
                <h1 className="capitalize text-[1rem] font-semibold">resedential design</h1>
                <p className="text-gray-600 text-[0.85rem]">Complete home interior design from concept to completion</p>
            </div>
            <div className="">
                <ul className="flex flex-col">
                    <li className="inline-flex items-center gap-1 text-gray-600 mb-[0.5rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="capitalize text-[0.85rem] mb-[0.1rem]">space planning & layout</p>
                    </li>
                    <li className="inline-flex items-center gap-1 text-gray-600 mb-[0.5rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="capitalize text-[0.85rem] mb-[0.1rem]">custom furniture selection</p>
                    </li>
                    <li className="inline-flex items-center gap-1 text-gray-600 mb-[0.5rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="capitalize text-[0.85rem] mb-[0.1rem]">color schema development</p>
                    </li>
                    <li className="inline-flex items-center gap-1 text-gray-600 mb-[0.5rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="capitalize text-[0.85rem] mb-[0.1rem]">lighting design</p>
                    </li>
                </ul>
            </div>
            <div className="w-full bg-gray-300 h-[2px] my-[1rem]"></div>
            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className="capitalize font-semibold">starting at $150/sq ft</h1>
                </div>
                <div className="">
                    <button className="px-[1rem] py-[0.5rem] capitalize text-[0.85rem] rounded-lg cursor-pointer inline-flex items-center gap-1 items-center duration-150 hover:bg-gray-300 duration-150">
                        learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    );

};

export default ServiceCard;