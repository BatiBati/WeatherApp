import { useState } from "react";

function App() {
  return (
    <>
      <div className="flex h-full relative">


        <div className="flex justify-center border-solid outline-white absolute bottom 50% left 50% bg-orange-30 gap-4 flex justify-center">
          <img src="vector.png" alt="" />
          <img src="vector.png" alt="" className="rotate-180"/>
        </div>
        
        

        <div className="bg-slate-200 w-6/12 h-screen">Left</div>

        <div className="bg-stone-900 text-white w-6/12 h-screen">Right</div>
      </div>
    </>
  );
}

export default App;
