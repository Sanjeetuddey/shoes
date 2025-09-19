import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container pl-20 pt-30 w-full flex justify-around">
        <div className="container grid gap-3">
          <h2 className="text-orange-500 font-bold"> Lucky Footer</h2>
          <p>Wear your Luck</p>
        </div>
        <div className="container grid gap-3 ">
          <h2 className="text-orange-500 font-bold"> Quick links</h2>
          <p>About Us</p>
          <p>Contact</p>
          <p>Shipping Info</p>
          <p>Returns</p>
        </div>
        <div className="container grid gap-3">
          <h2 className="text-orange-500 font-bold"> categories</h2>
          <p>Men's Collection </p>
          <p>Women's Collection </p>
          <p>Kid's Collection </p>
          <p>Sale</p>
        </div>
        <div className="container grid gap-3">
          <h2 className="text-orange-500 font-bold"> Connect With Us</h2>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
