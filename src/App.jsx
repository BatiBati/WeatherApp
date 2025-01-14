import { useState } from "react";
import { countriesData } from "./data";
import LeftLogo from "./icons/Pinecone-Logo-Left";
import RightLogo from "./icons/Pinecone-Logo-Right";

function App() {
  return (
    <>
      <div className="relative flex justify-center items-center h-full ">
        <div className="bg-white w-6/12 h-screen relative"></div>
        <div className="bg-stone-900 text-white w-6/12 h-screen relative"></div>
        <div className="absolute flex justify-center items-center">
          <div className="absolute flex justify-center items-center gap-[20px] bg-white p-3 border rounded-full">
            <LeftLogo />
            <RightLogo />
          </div>
          <div className="absolute flex flex-col gap-28 justify-center items-center border-solid border rounded-full w-[300px] h-[300px]">
            
            <div className=" rounded-bl-full bg-[red] w-[60px] h-[60px]"></div>
            <div className=" rounded-tl-full bg-[red] w-[60px] h-[60px]"></div>

          </div>
          <div className="absolute flex justify-center items-center border-solid border rounded-full w-[600px] h-[600px]"></div>
          <div className="absolute flex justify-center items-center border-solid border rounded-full w-[900px] h-[900px]"></div>
          <div className="absolute flex justify-center items-center border-solid border rounded-full w-[1200px] h-[1200px]"></div>
          <div className="absolute flex justify-center items-center border-solid border rounded-full w-[1500px] h-[1500px] overflow-y-hidden"></div>
          <div className="absolute flex justify-center items-center border-solid border rounded-full w-[1800px] h-[1800px]"></div>
          <div className="absolute flex justify-center items-center border-solid border rounded-full w-[2100px] h-[2100px]"></div>
        </div>
      </div>
    </>
  );
}

export default App;
