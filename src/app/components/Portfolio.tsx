"use client"

import React,{ useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

interface cardDatasIF{
    image: string,
    location: string,
    title: string,
    description: string,
    item: string,
};


interface PortfolioCard{
    image: string,
    title: string,
    content: string,
    date: string,
};


const Portfolio : React.FC = () => {

    const [portfolioData, setPortfolioData] = useState<PortfolioCard[]>([
        {
            image: "/images/commercial/commercial_1.jpg", 
            title: "lorem ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            date: "20.7.2025"
        },
        {
            image: "/images/commercial/commercial_1.jpg", 
            title: "lorem ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            date: "20.7.2025"
        },
        {
            image: "/images/commercial/commercial_1.jpg", 
            title: "lorem ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            date: "20.7.2025"
        },
        {
            image: "/images/commercial/commercial_1.jpg", 
            title: "lorem ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            date: "20.7.2025"
        },
    ]);

    const [optionActive, setOptionActive] = useState<string>("commercial");
    const [cardDatas, setCardDatas] = useState<cardDatasIF[]>([]);
    const [currentCards, setCurrentCards] = useState<cardDatasIF[]>([]);
    const [items, setItems] = useState<string[]>([]);
    const [currentItem, setCurrentItem] = useState<string>();

    useEffect(()=>{
        //useEffect Hook to fetch data cart and card items data
        const fetchData = async() => {
            try{
                const request = await axios.get(`/data/${optionActive}.json`);
                const data = await request.data;
                setCardDatas(data.datas);
                setCurrentCards(data.datas);
                setItems(data.items);
                setCurrentItem(data.items[0]);
                

            }catch(error: unknown){
                if(error instanceof Error){
                    console.log(error.message);
                }else{
                    console.log("An unexpected error occurred:", error);
                };
            };
        };

        

        fetchData();
    },[optionActive]);

    const handleItemChange = (current: string) => {
        let new_items: cardDatasIF[] = [];
        setCurrentItem(current);
       

        if(current == "all"){
            new_items = cardDatas;
        }else{
            for(var i = 0; i < cardDatas.length; i++){
                if(cardDatas[i].item == currentItem){
                    new_items.push(cardDatas[i]);
                };
            };
        }

        setCurrentCards(new_items);

    };

    

    const toggleOption = (current: string) => {
        if(current == optionActive){
            return;
        }else{
            setOptionActive(current);
        };

        // console.log(optionActive);
    };


    const PortfolioProjectCard = (key: number, params: PortfolioCard) => {

        return(
            <div key={key} className="w-full">
                <div className="flex justify-center">
                    {/* project heading container */}
                    <div className="bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full">
                        <h1 className="text-[1.5rem] font-semibold">{key + 1}</h1>
                    </div>
                </div>
                <div className={`grid grid-cols-2 md:my-[2rem] ${key % 2 != 0? "[direction:rtl]" : ""}`}>
                    <div className={`col-span-2 md:col-span-1 w-full h-[30rem] p-[2rem] ${key % 2 != 0? "md:border-l-[2px]" : "md:border-r-[2px]"}  border-gray-400 border-dotted`}>
                        <img src={params.image} alt="portfolio card image" className="w-full h-full object-cover rounded-md" />
                    </div>
                    <div className="col-span-2 md:col-span-1 w-full h-fit md:h-[30rem] p-[2rem] md:flex justify-center items-center">
                        <div className={`${key % 2 != 0? "text-end" : "text-start" }`}>
                            <h1 className="capitalize text-[1.5rem] font-semibold">{params.title}</h1>
                            <p className="mt-[1rem] text-gray-600 leading-[2rem]">{params.content}</p>
                            <h1 className="mt-[1rem] text-gray-600"><span className="font-semibold text-black">Date:</span> {params.date}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    


    return(
        <>
            <div id="portfolio" className="flex justify-center">
                <div className="w-full max-w-[1440px] py-[2rem] px-[1rem]">
                    {/* tagline and title container */}
                    <div className="flex flex-col items-center">
                        <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                            <h1 className="capitalize text-[0.75rem] text-gray-800">Our Work</h1>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl leading-[4rem] font-semibold capitalize">Our Portfolio in Chronological Order</h1>
                            <p className="text-center text-gray-600 leading-[1.75rem] mt-[0.75rem]">Explore our collection of interior design projects across residential, commercial, and <br></br>restaurant spaces.</p>
                        </div>
                    </div>
                    {/* <div className="flex flex-col items-center my-[1rem]">
                        <div className="my-[1rem]">
                            <ul className="inline-flex items-center justify-center gap-[1rem] flex-wrap">
                                <li className="capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer">all</li>
                                <li className="capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]">residential</li>
                                <li onClick={(event) => toggleOption("commercial")} className={(optionActive == "commercial"?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>commercial</li>
                                <li onClick={(event) => toggleOption("restaurant")} className={(optionActive == "restaurant"?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>restaurant</li>
                                <li onClick={(event) => toggleOption("residential")} className={(optionActive == "residential"?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>residential</li>
                            </ul>
                        </div>
                        <div className="my-[1rem]">
                            portfolio select submenu container
                            <ul className="inline-flex items-center justify-center gap-[1rem] flex-wrap">
                                <li className="capitalize border-[1px] border-gray-400 px-[1rem] py-[0.5rem] rounded-full">all</li>
                                {
                                    items.map((item, key) => (
                                        <li onClick={(event) => handleItemChange(item)} key={key} className={(currentItem == item?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>{item}</li>
                                    ))
                                }                               
                            </ul>
                        </div>
                    </div> */}
                    <div className="my-[2rem]">
                        {/* Chronological order portfolio master container */}
                        <div className="">
                            {
                                portfolioData.map((data, key) => 
                                    PortfolioProjectCard(key, data)
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Portfolio;