import React from "react";



const Banner : React.FC = () => {


    return(
        <>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 w-full max-w-[1440px] py-[2rem]">
                    {/* banner context container  */}
                    <div className="col-span-2 lg:col-span-1 px-[1rem] xl:px-0 flex items-center">
                        <div className="w-full">
                            {/* context tagline container container */}
                            <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                                <h1 className="capitalize text-[0.75rem] text-gray-800">✨ Award-Winning Interior Design</h1>
                            </div>

                            {/* context title container */}
                            <div className="w-full my-[2rem]">
                                <div className="w-full xl:w-3/5">
                                    <h1 className="capitalize text-5xl leading-[4rem] lg:text-6xl lg:leading-[5rem] font-semibold">Transform Your Living Space</h1>
                                    <p className="mt-[1rem] leading-[1.75rem] text-justify text-gray-600">Create stunning interiors that reflect your personality and lifestyle. From concept to completion, we bring your vision to life.</p>
                                </div>
                            </div>

                            {/* context button container */}
                            <div className="flex flex-col lg:flex-row items-center gap-[1rem]">
                                <button className="w-full lg:w-fit cursor-pointer bg-black px-[0.75rem] py-[0.5rem] text-[0.75rem] text-white rounded-lg capitalize flex items-center justify-center gap-[0.25rem]">
                                    start your project
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </button>

                                <button className="w-full lg:w-fit cursor-pointer bg-white border-[1px] border-gray-600 px-[0.75rem] py-[0.5rem] text-[0.75rem] text-gray-800 rounded-lg capitalize flex items-center justify-center gap-[0.25rem]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                    watch portfolio

                                </button>
                            </div>

                            {/* metrics master container */}
                            <div className="my-[2rem] flex items-center justify-center lg:justify-start gap-[1.5rem]">
                                {/* metric container */}
                                <div className="text-center md:text-start">
                                    <h1 className="text-2xl font-semibold">250 +</h1>
                                    <p className="capitalize text-gray-600 text-[0.75rem]">projects completed</p>
                                </div>

                                <div className="text-center md:text-start">
                                    <h1 className="text-2xl font-semibold">98 %</h1>
                                    <p className="capitalize text-gray-600 text-[0.75rem]">client satisfaction</p>
                                </div>

                                <div className="text-center md:text-start">
                                    <h1 className="text-2xl font-semibold">15 +</h1>
                                    <p className="capitalize text-gray-600 text-[0.75rem]">years experience</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* banner image container */}
                    <div className="col-span-2 flex justify-end items-center lg:col-span-1 px-[1rem] xl:px-0">
                        <div className="relative">
                            <img src="/banner.avif" alt="banner image" className="w-auto rounded-lg lg:h-[35rem]" />
                            <div className="absolute top-8 left-4 md:left-4 rounded-lg bg-white px-[0.5rem] py-[0.75rem] bg-white">
                                <p className="capitalize text-[0.75rem]">fetaured in</p>
                                <h1 className="capitalize text-black text-[1rem] font-semibold">architectural digest</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};


export default Banner;