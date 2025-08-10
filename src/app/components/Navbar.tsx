import React from "react";



const Navbar : React.FC = () => {


    return(
        <>
            <div className="flex justify-center bg-white px-[1rem] py-[1.5rem] border-b-[1px] border-gray-300">
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
                                <li className="relative group">
                                    <a href="#" className="text-black capitalize hover:text-black">home</a>
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li className="relative group">
                                    <a href="#" className="text-black capitalize hover:text-black">about</a>
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li className="relative group">
                                    <a href="#" className="text-black capitalize hover:text-black">portfolio</a>
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li className="relative group">
                                    <a href="#" className="text-black capitalize hover:text-black">services</a>
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li className="relative group">
                                    <a href="#" className="text-black capitalize hover:text-black">testimonials</a>
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                <li className="relative group">
                                    <a href="#" className="text-black capitalize hover:text-black">contact</a>
                                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black group-hover:w-full transition-all duration-300"></span>
                                </li>
                                
                            </ul>
                        </div>

                        {/* call to action button */}
                        <div className="col-span-3 lg:col-span-1 flex justify-end items-center">
                            <button className="hidden lg:block capitalize cursor-pointer bg-black px-[0.75rem] py-[0.5rem] text-[0.75rem] text-white rounded-lg">get quote</button>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Navbar;