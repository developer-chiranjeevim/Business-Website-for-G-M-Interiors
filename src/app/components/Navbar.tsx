"use client"

import React, { useState } from "react";



const Navbar : React.FC = () => {

    const [isTopBarActive, setIsTopBarActive] = useState<boolean>(false);

    const scrollToSection = (id: string) => {
        console.log("clicked")
        setIsTopBarActive(false);

        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return(
        <>
            <div className="fixed top-0 w-full z-30 flex justify-center bg-white px-[1rem] py-[1.5rem] border-b-[1px] border-gray-300">
                <div className="w-full max-w-[1440px] ">
                    <div className="grid grid-cols-6 lg:col-span-1">
                        {/* navbar logo */}
                        <div className="col-span-3 lg:col-span-1 flex items-center gap-2 select-none cursor-pointer">
                            <div className="bg-black w-fit text-white p-[0.5rem] rounded-lg">
                                <h1 className="uppercase text-[0.75rem]">gm</h1>
                            </div>
                            <div className="">
                                <p className="uppercase text-[1rem] font-semibold">g&m Interiors</p>
                            </div>
                        </div>

                        {/* navbar menu */}
                        <div className="hidden lg:flex justify-center col-span-4">
                            <ul className="inline-flex items-center gap-[1rem]">
                                <li onClick={() => scrollToSection("banner") } className="relative group capitalize cursor-pointer">
                                    home
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li onClick={() => scrollToSection("about") } className="relative group capitalize cursor-pointer">
                                    about
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li onClick={() => scrollToSection("portfolio") } className="relative group capitalize cursor-pointer">
                                    portfolio
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li onClick={() => scrollToSection("services") } className="relative group capitalize cursor-pointer">
                                    services
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                 <li onClick={() => scrollToSection("timeline") } className="relative group capitalize cursor-pointer">
                                    timeline
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li onClick={() => scrollToSection("testimonials") } className="relative group capitalize cursor-pointer">
                                    testimonials
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li onClick={() => scrollToSection("contact") } className="relative group capitalize cursor-pointer">
                                    contact
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                
                            </ul>
                        </div>

                        {/* call to action button */}
                        <div className="col-span-3 lg:col-span-1 flex justify-end items-center">
                            <button className="hidden lg:block capitalize cursor-pointer bg-black px-[0.75rem] py-[0.5rem] text-[0.75rem] text-white rounded-lg">get quote</button>
                            
                            <svg onClick={() => {setIsTopBarActive(!isTopBarActive)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block lg:hidden h-[85px]"></div>
            <div className={`fixed z-20 w-full min-h-[45vh] bg-white ${isTopBarActive?"top-[82px]" : "-top-[100vh]"} duration-400 border-b-[2px] border-gray-300 lg:hidden`}>
                {/* topbar menu items container */}
                <div className="px-[1rem] py-[2rem]">
                    <ul className="flex flex-col gap-[1rem]">
                        <li onClick={() => scrollToSection("banner") } className="inline-flex items-center justify-between w-full border-[1px] border-gray-300 px-[1rem] py-[0.5rem] rounded-lg">
                            <span className="capitalize text-[1rem]">
                                home
                            </span>                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </li>

                        <li onClick={() => scrollToSection("about") }className="inline-flex items-center justify-between w-full border-[1px] border-gray-300 px-[1rem] py-[0.5rem] rounded-lg">
                            <span className="capitalize text-[1rem]">
                                about
                            </span>                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>

                        </li>

                        <li onClick={() => scrollToSection("portfolio") } className="inline-flex items-center justify-between w-full border-[1px] border-gray-300 px-[1rem] py-[0.5rem] rounded-lg">
                            <span className="capitalize text-[1rem]">
                                portfoilo
                            </span>                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                        </li>

                        <li onClick={() => scrollToSection("services") } className="inline-flex items-center justify-between w-full border-[1px] border-gray-300 px-[1rem] py-[0.5rem] rounded-lg">
                            <span className="capitalize text-[1rem]">
                                services
                            </span>                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                        </li>

                        <li onClick={() => scrollToSection("timeline") } className="inline-flex items-center justify-between w-full border-[1px] border-gray-300 px-[1rem] py-[0.5rem] rounded-lg">
                            <span className="capitalize text-[1rem]">
                                timeline
                            </span>                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                            </svg>

                        </li>

                        <li onClick={() => scrollToSection("testimonials") } className="inline-flex items-center justify-between w-full border-[1px] border-gray-300 px-[1rem] py-[0.5rem] rounded-lg">
                            <span className="capitalize text-[1rem]">
                                testimonials
                            </span>                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                            </svg>

                        </li>

                        <li onClick={() => scrollToSection("contact") } className="inline-flex items-center justify-between w-full border-[1px] border-gray-300 px-[1rem] py-[0.5rem] rounded-lg">
                            <span className="capitalize text-[1rem]">
                                contact
                            </span>                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </li>
                    </ul>
                    <button className="w-full my-[1rem] capitalize cursor-pointer bg-black px-[0.75rem] py-[0.5rem] text-[1rem] text-white rounded-lg">get quote</button>
                </div>
            </div>
        </>
    );
};


export default Navbar;