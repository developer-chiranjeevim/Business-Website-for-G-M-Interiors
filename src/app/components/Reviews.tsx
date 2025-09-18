"use client"

import React,{ useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import axios from "axios";


interface reviewsIf {
    star: number,
    avatar: string, 
    context: string,
    owner_name: string,
    owner_type: string,
    location: string,
    subtext: string,
};


const Reviews : React.FC = () => {

    const [ reviews, setReviews ] = useState<reviewsIf[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const request = await axios.get(`/data/reviews.json`);
                const data = await request.data;
                console.log(data.datas)
                setReviews(data.datas);
                

            }catch(error: unknown){
                if(error instanceof Error){
                    console.log(error.message);
                }else{
                    console.log("An unexpected error occurred:", error);
                };
            };
        };

        fetchData();
    },[]);


    return(
        <>
            <div id="testimonials" className="flex justify-center bg-gray-100">
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
                        {
                            reviews.map((review, key) => (
                                <div key={key} className="col-span-2 md:col-span-1 lg:col-span-1">
                                    <ReviewCard star={review.star} avatar={review.avatar} context={review.context} owner_name={review.owner_name} owner_type={review.owner_type} location={review.location} subtext={review.subtext} />
                                </div>
                            ))

                        }


                        {/* <div className="col-span-2 md:col-span-1 lg:col-span-1">
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
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    );
};


export default Reviews;