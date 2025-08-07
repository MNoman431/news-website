import React, { useContext } from "react";
import herosection from "../../assets/herosection.jpeg";
import { ThemeContext } from "../../context/ThemeContext"; // adjust path if needed

const HeroSection = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`mt-[50px] ml-[40px] mr-[20px] flex flex-col md:flex-row p-3 border 
      ${darkMode ? "border-white bg-gray-900 text-white" : "border-black bg-white text-gray-800"} 
      justify-center items-center rounded-tl-3xl rounded-br-3xl text-center shadow-md`}
    >
      <div className="flex-1 justify-center flex flex-col p-3 w-full md:w-3/5">
        <h1 className="text-[15px] md:text-xl font-semibold leading-snug">
          Want to know more about today's{" "}
          <span className="text-red-500">TOP 10</span> news?
        </h1>
        <p className="text-gray-400 my-2">Checkout these top news articles!</p>

        <button
          className={`px-4 py-2 rounded-md transition text-sm md:text-base my-3
          ${darkMode ? "bg-blue-700 hover:bg-black" : "bg-blue-600 hover:bg-black"} 
          text-white`}
        >
          Explore the latest top headlines and breaking news from trusted sources.
        </button>
      </div>

      <div className="p-4 w-full md:w-2/5">
        <img
          src={herosection}
          alt="News Hero"
          className="w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
