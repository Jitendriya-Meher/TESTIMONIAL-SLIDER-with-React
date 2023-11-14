import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";

function Testimonials(props){
    let reviews = props.reviews;

    let [index,setIndex] = useState(0);

    function moveLeft(){
        if( index-1 < 0){
            setIndex(reviews.length -1);
        }else{
            setIndex(index-1);
        }
    }

    function moveRight(){
        if( index + 1 >= reviews.length){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    function moveRandom(){
        let ind = Math.floor(Math.random() * reviews.length);
        setIndex(ind);
    }

    return(
        <div className="w-[45vw] md:[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-2xl ">
            <Card review={reviews[index]}></Card>

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 justify-center font-bold">
                <button className="curser-pointer hover:text-violet-500"
                onClick={moveLeft}>
                    <FiChevronLeft></FiChevronLeft>
                </button>
                <button className="curser-pointer hover:text-violet-500"
                onClick={moveRight}>
                    <FiChevronRight></FiChevronRight>
                </button>
            </div>    
            
            <div className="mt-5">
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 
                curser-pointer px-10 py-2 font-bold text-white text-lg rounded-md"
                onClick={moveRandom}>
                    Surprise Me
                </button>
            </div>

        </div>
    );
}

export default Testimonials;