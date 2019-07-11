import React from "react";
import BAP from "../Images/BAP.jpg";
import { Navbar } from "../Components/Navbar";
import "../App.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <iframe
          title="youtube test"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CVO8gjn3dFg?&autoplay=1&controls=0&amp;start=133"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="overlay">
          <img className="bap" src={BAP} alt="true logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
