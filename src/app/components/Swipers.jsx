'use client'
import React from 'react'
import ReviewCard from "./ReviewCard";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function Swipers() {

    let Box = document.getElementById("box");

    const btnLeft = () =>{
        let width = Box.clientHeight;
        Box.scrollLeft = box.scrollLeft - width; 
        
    }
    const btnRight = () =>{
        let width = Box.clientWidth;
        Box.scrollLeft = box.scrollLeft + width;

    }
    return (
        <div className="flex relative  z-10 ">

            <button onClick={btnLeft} className="flex justify-center items-center h-full absolute">
                <p className="flex items-center justify-center bg-white md:w-16 md:h-16 w-8 h-8 shadow-6b rounded-full ">
                    <FaAngleLeft className="text-[#707070] text-lg font-bold" />

                </p>
            </button>
            <button onClick={btnRight} className="flex justify-center items-center h-full absolute right-0">
                <p className="flex items-center justify-center bg-white md:w-16 md:h-16 w-8 h-8 shadow-6b rounded-full ">
                    <FaAngleRight className="text-[#707070] text-lg font-bold" />

                </p>
            </button>

            <div id="box" className="flex flex-row gap-14 overflow-x-hidden  scroll-smooth w-full md:w-[90%] md:mx-20 ">
                <ReviewCard id='1' name="Jhon Deo" title="CEO" />
                <ReviewCard id='2' name="Amanda green" title="Operations Manager" />
                <ReviewCard id='3' name="Sam Cooper" title="Customer Manager" />
                <ReviewCard id='4' name="Jhon Deo" title="CEO" />
                <ReviewCard id='4' name="Amanda green" title="Operations Manager" />
                <ReviewCard id='4' name="Amanda green" title="Operations Manager" />
                <ReviewCard id='4' name="Amanda green" title="Operations Manager" />
                <ReviewCard id='4' name="Amanda green" title="Operations Manager" />
            </div>
        </div>
    );
}