




const About : React.FC = () => {


    return(
        <>
        <div id="about" className="flex justify-center bg-gray-100">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[1440px] py-[2rem] px-[1rem]">
                {/* about context container */}
                <div className="col-span-2 md:col-span-1">
                    {/* tagline */}
                    <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                        <h1 className="capitalize text-[0.75rem] text-gray-800">about us</h1>
                    </div>
                    {/* header and text container */}
                    <div className="py-[1rem]">
                        <h1 className="text-5xl leading-[4rem] font-semibold">Creating Beautiful Spaces</h1>
                        <p className="mt-[1rem] leading-[1.75rem] text-justify text-gray-600">
                            We are passionate interior designers dedicated to transforming ordinary spaces into extraordinary environments. Our approach combines creativity, functionality, and attention to detail to deliver spaces that truly reflect our clients' vision.
                        </p>
                        <p className="mt-[1rem] leading-[1.75rem] text-justify text-gray-600">
                            With over 15 years of experience in residential and commercial interior design, we have developed a reputation for excellence and innovation. Our team works closely with clients to understand their needs, preferences, and lifestyle to create personalized design solutions.
                        </p>
                    </div>
                    {/* features master container */}
                    <div className="">
                        <div className="grid grid-cols-2">
                            {/* <div className="col-span-1">
                                <div className="bg-gray-200 w-fit p-[0.75rem] rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                                    </svg>
                                </div>
                                <h1 className="capitalize text-[1rem] font-semibold mt-[0.5rem]">Award Winning</h1>
                                <p className="text-[0.75rem] text-gray-600">Recognized by top design publications</p>
                            </div> */}
                            <div className="col-span-1">
                                <div className="bg-gray-200 w-fit p-[0.75rem] rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                    </svg>
                                </div>
                                <h1 className="capitalize text-[1rem] font-semibold mt-[0.5rem]">Expert Team</h1>
                                <p className="text-[0.75rem] text-gray-600">Skilled designers and architects</p>
                            </div>
                            <div className="col-span-1">
                                <div className="bg-gray-200 w-fit p-[0.75rem] rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <h1 className="capitalize text-[1rem] font-semibold mt-[0.5rem]">Timely Delivery</h1>
                                <p className="text-[0.75rem] text-gray-600">Projects completed on schedule</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mt-[1rem]">
                            <div className="col-span-1">
                                <div className="bg-gray-200 w-fit p-[0.75rem] rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>
                                </div>
                                <h1 className="capitalize text-[1rem] font-semibold mt-[0.5rem]">Client Focused</h1>
                                <p className="text-[0.75rem] text-gray-600">Tailored solutions for every client</p>
                            </div>
                        </div>
                    </div>
                    {/* CTA Button */}
                    {/* <button className="my-[2rem] font-semibold w-full lg:w-fit cursor-pointer bg-black px-[0.75rem] py-[0.5rem] text-[0.75rem] text-white rounded-lg capitalize flex items-center justify-center gap-[0.25rem]">
                        learn more about us
                    </button> */}
                </div>
                {/* about images container */}
                <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-end">
                    <div className="w-[90%]">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <div className="relative w-full h-[16rem]">
                                    <img src="/about-1.avif" alt="about first image" className="w-full h-full object-cover rounded-lg" />
                                </div>
                            </div>
                            <div className="col-span-1 mt-[2rem]">
                                <div className="relative w-full h-[16rem]">
                                    <img src="/about-2.avif" alt="about first image" className="w-full h-full object-cover rounded-lg" />
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <div className="relative w-full h-[15rem]">
                                    <img src="/about-3.avif" alt="about first image" className="w-full h-full object-cover rounded-lg" />
                                </div>
                            </div>
                            <div className="col-span-1 mt-[2rem]">
                                <div className="relative w-full h-[16rem]">
                                    <img src="/about-4.avif" alt="about first image" className="w-full h-full object-cover rounded-lg" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
};


export default About;