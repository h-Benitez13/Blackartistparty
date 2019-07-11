import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import "../App.css";
import logo from "../logo.svg";

function Shop() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>
          <Link to="/">Back to home</Link>
        </h1>
      </header>
    </div>
  );
}

export default Shop;
