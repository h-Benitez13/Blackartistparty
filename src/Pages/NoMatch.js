import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <header>
        <h1>404</h1>
      </header>
      <section>
        <h3>Looks like you messed up</h3>
        <h3>
          If you click <Link to="/home">here</Link> you'll find what you are
          looking for!
        </h3>
      </section>
    </div>
  );
}
export default NoMatch;
