import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="dt tc mw7 center ma4 pa-3">
      <Link className="f5-l black bg-animate black-80 dib pa3 ph4-l no-underline" to="/home">
        <h1 className="f3 fw3">HOME</h1>
      </Link>
      <Link className="f5-l black bg-animate black-80 dib pa3 ph4-l no-underline" to="/shop">
        <h1 className="f3 fw3">SHOP</h1>
      </Link>
      <div className="f5-l black bg-animate black-80 dib pa3 ph4-l no-underline">
        <h1 className="f3 fw3"> PRESS</h1>
      </div>
      <div className="f5-l black bg-animate black-80 dib pa3 ph4-l no-underline">
        <h1 className="f3 fw3">GALLERY</h1>
      </div>
      <div className="f5-l black bg-animate black-80 dib pa3 ph4-l no-underline">
        <h1 className="f3 fw3">WORK</h1>
      </div>
    </nav>
  );
};
