import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="dt w-100 pa3">
      <Link className="dtc black hover-blue no-underline grow" to="/home">
        Home
      </Link>
      <Link className="dtc black hover-blue no-underline grow" to="/shop">
        Shop
      </Link>
      <div className="dtc hover-blue no-underline grow">Press</div>
      <div className="dtc hover-blue no-underline grow">Gallery</div>
      <div className="dtc hover-blue no-underline grow">Work</div>
    </div>
  );
};
