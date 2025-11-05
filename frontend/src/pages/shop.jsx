import React, { useState } from "react";
import sho1 from "../assets/shoe1.jpg";
import sho2 from "../assets/shoe2.jpg";
import sho3 from "../assets/shoe3.jpg";
import sho4 from "../assets/shoe4.jpg";
import sho5 from "../assets/shoe5.jpg";

function Shop() {
  const [shoes] = useState([
    {
      id: 1,
      title: "Nike Air Max",
      price: 120,
      image: sho1, 
    },
    {
      id: 2,
      title: "Adidas Ultraboost",
      price: 150,
      image: sho2,
    },
    {
      id: 3,
      title: "Puma Running Shoes",
      price: 100,
      image: sho3,
    },
    {
      id: 4,
      title: "Reebok Classic",
      price: 90,
      image: sho4,
    },
    {
      id: 5,
      title: "New Balance 574",
      price: 110,
      image: sho5,
    },
  ]);

  return (
    
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        Our Shoe Collection
      </h1>
       //shoe display
      <div className="flex flex-wrap justify-center gap-6">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white p-4 rounded-lg shadow-md w-64 text-center"
          >
            <img
              src={shoe.image} 
              alt={shoe.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{shoe.title}</h2>
            <p className="text-gray-600">${shoe.price}</p>
            <button className="mt-3 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
