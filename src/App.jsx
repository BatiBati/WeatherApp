import { useState } from "react";
import { countriesData } from "./data";
import LeftLogo from "./icons/Pinecone-Logo-Left";
import RightLogo from "./icons/Pinecone-Logo-Right";
import Subtract from "./icons/Subtract";
import Search from "./icons/Search";

function App() {
  return (
    <>
      <div className="relative flex justify-center items-center h-full ">
         


           {/* Search */}
        <div className="absolute top-[20px] flex z-10 flex justify-center w-[100px] h-[50px] bg-green-500 rounded-lg">
          <div className="absolute object-cover">
          <Search/>
          </div>
          
          <input className=""/>
        </div>





























          {/* Left side */}
        <div className="bg-[ #F3F4F6] w-6/12 h-screen relative"></div>



          {/* Right side */}
        <div className="bg-[#0F141E] text-white w-6/12 h-screen relative">
          {/* <Subtract /> */}

          <div
            className="bg-[white] w-[128px] h-[128px] z-10 absolute bottom-[50px] right-[100px] flex justify-center items-center 
                          rounded-full"
          ></div>
        </div>



          {/* Rounds */}
        <div className="absolute flex justify-center items-center">
          <div className="absolute flex justify-center items-center gap-[20px] bg-white p-3 border rounded-full">
            <LeftLogo />
            <RightLogo />
          </div>
          <div className="absolute flex flex-col gap-28 justify-center items-center border-solid border rounded-full w-[300px] h-[300px]">
            {/* <div className=" rounded-bl-full bg-[red] w-[60px] h-[60px]"></div>
            <div className=" rounded-tl-full bg-[red] w-[60px] h-[60px]"></div> */}
          </div>
          <div className="absolute flex justify-center items-center border-solid border rounded-full w-[600px] h-[600px]"></div>
          <div className="absolute flex justify-center items-center border-solid border rounded-full w-[900px] h-[900px]"></div>
          <div className="absolute flex justify-center items-center border-solid border rounded-full w-[1200px] h-[1200px]"></div>
          <div className="absolute flex justify-center items-center border-solid border rounded-full w-[1500px] h-[1500px]"></div>
        </div>
      </div>
    </>
  );
}
console.log(countriesData);

export default App;
