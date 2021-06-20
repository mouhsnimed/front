import "./assets/style.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Details from "./details";
import Listing from "./listing";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/listing" exact>
            <Listing />
          </Route>
          <Route path="/about-us" exact>
            <About />
          </Route>
          <Route path="/details" exact>
            <Details />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}