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
}

const Portfolio : React.FC = () => {

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
                            <h1 className="text-5xl leading-[4rem] font-semibold capitalize">Our Portfolio</h1>
                            <p className="text-center text-gray-600 leading-[1.75rem] mt-[0.75rem]">Explore our collection of interior design projects across residential, commercial, and <br></br>restaurant spaces.</p>
                        </div>
                        <div className="my-[1rem]">
                            <ul className="inline-flex items-center justify-center gap-[1rem] flex-wrap">
                                {/* <li className="capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer">all</li> */}
                                {/* <li className="capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]">residential</li> */}
                                <li onClick={(event) => toggleOption("commercial")} className={(optionActive == "commercial"?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>commercial</li>
                                <li onClick={(event) => toggleOption("restaurant")} className={(optionActive == "restaurant"?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>restaurant</li>
                                <li onClick={(event) => toggleOption("residential")} className={(optionActive == "residential"?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>residential</li>
                            </ul>
                        </div>
                        <div className="my-[1rem]">
                            {/* portfolio select submenu container */}
                            <ul className="inline-flex items-center justify-center gap-[1rem] flex-wrap">
                                {/* <li className="capitalize border-[1px] border-gray-400 px-[1rem] py-[0.5rem] rounded-full">all</li> */}
                                {
                                    items.map((item, key) => (
                                        <li onClick={(event) => handleItemChange(item)} key={key} className={(currentItem == item?"capitalize bg-black text-white px-[1rem] py-[0.5rem] rounded-full cursor-pointer":"capitalize border-[1px] border-gray-400 rounded-full cursor-pointer px-[1rem] py-[0.5rem]")}>{item}</li>
                                    ))
                                }                               
                            </ul>
                        </div>
                    </div>
                    {/* projects master container */}
                    <div className="my-[1rem] grid grid-cols-2 lg:grid-cols-3 gap-[1rem] mb-[1rem]">
                       
                        {
                            currentCards.map((card, key) => (
                               <div key={key} className="col-span-2 md:col-span-1 lg:col-span-1">
                                    <ProjectCard image={card.image} title={card.title} description={card.description} location={card.location} type={optionActive} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="w-full font-semibold lg:w-fit cursor-pointer bg-white border-[1px] border-gray-600 px-[0.75rem] py-[0.5rem] text-[0.75rem] text-gray-800 rounded-lg capitalize flex items-center justify-center gap-[0.25rem]">
                            view all projects
                        </button>
                    </div>
                   
                    
                </div>
            </div>
        </>
    );
};


export default Portfolio;