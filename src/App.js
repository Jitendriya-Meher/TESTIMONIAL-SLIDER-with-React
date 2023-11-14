import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (<div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center  bg-gray-200">

    <div className="absolute top-2 right-2 text-violet-400">
      Created By Jitendriya
    </div>
    <div className="text-center">

      <h1 className="text-4xl font-bold">Our Testimonials</h1>

      <div className="bg-violet-400 h-[4px] w-[20%] mt-3 mx-auto"></div>

      <Testimonials reviews={reviews}
      className=""></Testimonials>

    </div>
  </div>);
};

export default App;
