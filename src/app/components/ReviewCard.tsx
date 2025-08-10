import React from "react";



const ReviewCard : React.FC = () => {



    return(
        <div className="w-full border-[1px] border-gray-200 rounded-lg px-[0.5rem] py-[1rem] duration-150 hover:shadow-lg">
            <div className="bg-gray-300 rounded-full w-fit p-[0.5rem]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
            </div>
            <div className="flex items-center gap-1 my-[1rem]">
                {
                    Array.from({length: 5},(_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                    ))
                }
            </div>
            <div className="">
                <p className="text-[0.85rem] text-gray-600">"The team transformed our outdated apartment into a modern sanctuary. Their attention to detail and ability to understand our vision was remarkable. We couldn't be happier with the result!"</p>
            </div>
            <div className="w-full h-[3px] bg-gray-200 my-[1rem]"></div>
            <div className="flex items-center gap-[1rem]">
                <div className="relative w-[3rem] h-[3rem] rounded-full">
                    <img src="/profile.avif" alt="" className="w-full h-full object-fill rounded-full" />
                </div>  
                <div className="">
                    <h1 className="text-[0.875rem]">Michael Chen</h1>
                    <p className="text-gray-600 text-[0.75rem]">Business Owner • Financial District</p>
                    <p className="text-[0.75rem] font-semibold">Corporate Office Design</p>
                </div>
            </div>
        </div>
    );
};


export default ReviewCard;