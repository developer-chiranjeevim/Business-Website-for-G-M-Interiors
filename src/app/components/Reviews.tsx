import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews : React.FC = () => {


    return(
        <>
            <div id="testimonials" className="flex justify-center">
                <div className="w-full max-w-[1440px] py-[2rem] px-[1rem]">
                    {/* tagline and title container */}
                    <div className="flex flex-col items-center">
                        <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                            <h1 className="capitalize text-[0.75rem] text-gray-800">Testimonials</h1>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl leading-[4rem] font-semibold capitalize">What Our Clients Say</h1>
                            <p className="text-center text-gray-600 leading-[1.75rem] mt-[0.75rem] capitalize">Don't just take our word for it. Here's what our satisfied clients have to say about<br></br> their experience working with us.</p>
                        </div>
                    </div>
                    {/* review cards container */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1rem] mb-[1rem] mt-[1.5rem]">
                        <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ReviewCard />
                        </div>
                        <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ReviewCard />
                        </div>
                        <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ReviewCard />
                        </div>
                        <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ReviewCard />
                        </div>
                        <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ReviewCard />
                        </div>
                        <div className="col-span-2 md:col-span-1 lg:col-span-1">
                            <ReviewCard />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};


export default Reviews;