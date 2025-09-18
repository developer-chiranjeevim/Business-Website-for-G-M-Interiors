"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";


interface SwiperOverlapIF {
    image: string,
    subTitle: string,
    title: string,
    content: string,
    buttonPrimary: string,
    buttonSecondary: string
}

const SwiperOverLap = (params: SwiperOverlapIF) => {
    return(
        <div className="relative">
            <img src={params.image} alt="swiper image" className="w-full h-full lg:h-[100vh] object-cover" />
            <div className="absolute top-0 z-10 w-full h-full bg-black opacity-75"></div>
                <div className="absolute top-0 z-10 w-full h-full flex items-center justify-center px-[2rem] lg:px-[15rem]">
                    <div className="w-full max-w-[1440px]">
                        <div className="w-full w-full md:w-[40rem]">
                            <h1 className="capitalize text-orange-400 font-semibold mb-[1rem] text-center md:text-start">{params.subTitle}</h1>
                            <h1 className="text-white text-2xl md:text-3xl mb-[1rem] text-center md:text-start lg:text-4xl">
                                {params.title}
                            </h1>
                            <p className="text-white text-md md:text-lg text-center md:text-start">
                                {params.content}
                            </p>
                            <div className="hidden md:block my-[2rem]">
                                {/* button container */}
                                <div className="flex items-center gap-[1rem]">
                                    <button className="capitalize bg-orange-400 text-white rounded-full px-[1.5rem] py-[0.5rem] cursor-pointer">{params.buttonPrimary}</button>
                                    <button className="capitalize border-[1px] border-white text-white rounded-full px-[1.5rem] py-[0.5rem] cursor-pointer">{params.buttonSecondary}</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

const CarouselBanner = () => {

    return(
        <>
            <div id="banner" className="relative">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                     autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    >
                    <SwiperSlide>
                        { 
                            SwiperOverLap({
                                image:"/banner-carousel.avif",
                                subTitle: "Luxury Interior Design & Build",
                                title: "Modern Interiors for Contemporary Living",
                                content: "Transform your home with our expert interior design services tailored to your unique style and needs.",
                                buttonPrimary: "view our portfolio",
                                buttonSecondary: "learn more"
                            }) 
                        }
                    
                    </SwiperSlide>

                    <SwiperSlide>
                        { 
                            SwiperOverLap({
                                image:"/banner-carousel.avif",
                                subTitle: "Luxury Interior Design",
                                title: "Modern Interiors for Contemporary Living",
                                content: "Transform your home with our expert interior design services tailored to your unique style and needs.",
                                buttonPrimary: "start your design journey",
                                buttonSecondary: "learn more"
                            }) 
                        }
                    
                    </SwiperSlide>

                    <SwiperSlide>
                        { 
                            SwiperOverLap({
                                image:"/banner-carousel.avif",
                                subTitle: "Luxury Interior Design",
                                title: "Elevate Your Space with Timeless Design",
                                content: "Transform your home with our expert interior design services tailored to your unique style and needs.",
                                buttonPrimary: "view our portfolio",
                                buttonSecondary: "learn more"
                            }) 
                        }
                    
                    </SwiperSlide>

                    
                </Swiper>
                
            </div>
        </>
    );
};


export default CarouselBanner;