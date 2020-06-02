import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Dad from "./pages/DadSonnn/Dad";

export default class Hello extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">One</Link>
              </li>
              <li>
                <Link to="/two">Two</Link>
              </li>
              <li>
                <Link to="/Three">Three</Link>
              </li>
              <li>
                <Link to="/dad">DAD</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/two">
              <Two />
            </Route>
            <Route path="/Three">
              <Three />
            </Route>
            <Route path="/dad">
              <Dad />
            </Route>
            <Route path="/">
              <One />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
