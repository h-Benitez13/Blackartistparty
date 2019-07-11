import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Landing";
import Shop from "./Pages/Shop";
import NoMatch from "./Pages/NoMatch";

function App() {
  return (
    <Router basename="/#">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
