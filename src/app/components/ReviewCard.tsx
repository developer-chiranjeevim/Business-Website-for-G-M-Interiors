import React from "react";


interface reviewsIf {
    star: number,
    avatar: string, 
    context: string,
    owner_name: string,
    owner_type: string,
    location: string,
    subtext: string,
};


const ReviewCard : React.FC<reviewsIf> = ({star, avatar, context, owner_name, owner_type, location, subtext}) => {



    return(
        <div className="bg-white w-full border-[1px] border-gray-200 rounded-lg px-[0.5rem] py-[1rem] duration-150 hover:shadow-lg">
            <div className="bg-gray-300 rounded-full w-fit p-[0.5rem]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
            </div>
            <div className="flex items-center gap-1 my-[1rem]">
                {
                    Array.from({length: star},(_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                    ))
                }
            </div>
            <div className="">
                <p className="text-[0.85rem] text-gray-600 leading-[1.65rem]">"{context}"</p>
            </div>
            <div className="w-full h-[3px] bg-gray-200 my-[1rem]"></div>
            <div className="flex items-center gap-[1rem]">
                <div className="relative w-[3rem] h-[3rem] rounded-full">
                    <img src={avatar} alt="" className="w-full h-full object-fill rounded-full" />
                </div>  
                <div className="">
                    <h1 className="text-[0.875rem]">{owner_name}</h1>
                    <p className="text-gray-600 text-[0.75rem] capitalize">{owner_type} • {location}</p>
                    <p className="text-[0.75rem] font-semibold">{subtext}</p>
                </div>
            </div>
        </div>
    );
};


export default ReviewCard;