import "./assets/style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Home from "./home";
import Visite from "./visite";
import About from "./about";
import Shooter from "./shooter";
import Register from "./register";
import Login from "./login";
import Contact from "./contact";
import Details from "./details";
import Listing from "./listing";
import AddAnnonce from "./AddAnnonce";
import UploadFiles from "./AddAnnonce/Uploadfiles";
import AnnonceSuccess from "./AddAnnonce/Success";
import MyAnnonces from "./MyAnnonces";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <AuthProvider>
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
            <Route path="/visite" exact>
              <Visite />
            </Route>
            <Route path="/about-us" exact>
              <About />
            </Route>
            <Route path="/details/:id" exact>
              <Details />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/login" exact component={Login} />
            <Route path="/add-annonce" exact>
              <AddAnnonce />
            </Route>
            <Route path="/add-annonce" exact>
              <AddAnnonce />
            </Route>
            <Route path="/upload-files/:id" exact>
              <UploadFiles />
            </Route>
            <Route path="/annonce-success" exact>
              <AnnonceSuccess />
            </Route>
            <Route path="/my-annonces" exact>
              <MyAnnonces />
            </Route>
            <Route path="/shooters-details" exact>
              <Shooter />
            </Route>
          </Switch>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}
