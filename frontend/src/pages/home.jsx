import React from "react";
import Image from "../assets/shoes.webp";

//ome pae
const Home = () => {
  return (
    <>
   //main pae 
         //home page content
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center px-10 py-20">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Step Into <span className="text-amber-500">Comfort & Style</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            Discover our latest collection of stylish and comfortable shoes.
            Perfect for every occasion!
          </p>
          <button className="mt-6 bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition duration-300 shadow-md">
            Shop Now
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={Image}
            alt="Stylish Shoe"
            className="w-full h-auto max-h-[80vh] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
