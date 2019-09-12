import React from "react";
import BAP from "../Images/BAP.jpg";
import { Navbar } from "../Components/Navbar";
import "../App.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <div className="landing-img">
          <img src={BAP} alt="BlackartistParty logo" />
        </div>

      </div>

    </div>
  );
}

export default Home;
