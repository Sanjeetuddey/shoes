import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import Image from "../assets/shoes.webp"; // your local 


const shoesData = [
  {
    id: 1,
    name: "AirMax Pro",
    category: "Running",
    price: 129.99,
    rating: 4.8,
    image: Image, // using your local image
  },
  {
    id: 2,
    name: "Classic Street",
    category: "Casual",
    price: 99.5,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1606813902760-5b3f7c8db0a2",
  },
  {
    id: 3,
    name: "Zoom Racer",
    category: "Sports",
    price: 149.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600180758890-6e7d1b5c33b1",
  },
  {
    id: 4,
    name: "Urban Trek",
    category: "Casual",
    price: 115.0,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1606813902759-8f6a7c2a9f02",
  },
  {
    id: 5,
    name: "Trail Runner X",
    category: "Running",
    price: 159.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1614283830484-8d3c9b18bdbb",
  },
];

const categories = ["All", "Running", "Casual", "Sports"];

function Main() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredShoes =
    selectedCategory === "All"
      ? shoesData
      : shoesData.filter((shoe) => shoe.category === selectedCategory);

  return (
    //start of main div
    <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 py-22 px-9">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800"
        >
          👟 Shoes Collection
        </motion.h1>
        <p className="text-gray-600 mt-2">
          Discover your perfect pair — comfort, performance, and style.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Shoe Cards Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {filteredShoes.map((shoe) => (
          <motion.div
            key={shoe.id}
            whileHover={{ scale: 1.04 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {shoe.name}
                </h2>
                <div className="flex items-center text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="ml-1 text-sm">{shoe.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">{shoe.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">
                  ${shoe.price}
                </span>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Main;
