import React from "react";
import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home/Home";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const AppRouter = () => (
  <Router> 
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/home" component={Home} />
    </Switch>
  </Router>
);

export default AppRouter;