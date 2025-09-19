import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 w-full z-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Shoe<span className="text-amber-500">Hub</span>
          </h1>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
            <NavLink to={"/"}>
              <span className="text-amber-700 text-2xl font-bold my-1 mx-3">
                Home
              </span>
            </NavLink>
            <NavLink to={"/about"}>
              <span className="text-amber-700 text-2xl font-bold my-1 mx-3">
                About
              </span>
            </NavLink>
            <NavLink to={"/shop"}>
              <span className="text-amber-700 text-2xl font-bold my-1 mx-3">
                Shop
              </span>
            </NavLink>
            <NavLink to={"/contact"}>
              <span className="text-amber-700 text-2xl font-bold my-1 mx-3">
                Contact
              </span>
            </NavLink>
          </ul>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 outline-none bg-gray-800 text-white placeholder-gray-400"
            />
            <button className="bg-blue-50 px-4 py-2 text-gray-900 font-semibold hover:bg-blue-50">
              Search
            </button>
          </div>

          <button className="bg-amber-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-amber-600 transition">
            <NavLink to={"/login"}>
              <span className="text-amber-700 text-2xl font-bold my-1 mx-3">
                Login
              </span>
            </NavLink>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Header;
