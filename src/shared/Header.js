import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleOnscroll = () => {
    setIsFixed(window.scrollY >= 80);
  };

  useEffect(() => {
    window.onscroll = handleOnscroll;
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed-top ${isFixed ? "nav-fixed" : ""}`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke px-0">
          <h1>
            <Link className="navbar-brand" to="/">
              <span className="fa fa-home"></span> Estate sale
            </Link>
          </h1>

          {/* <Link className="navbar-brand" to="#index.html">
      <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
  </Link> */}
          <button
            className="navbar-toggler  collapsed bg-gradient"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-lg-5 mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item @@listing__active">
                <Link className="nav-link" to="/listing">
                  Listing
                </Link>
              </li>
              <li className="nav-item @@listing__active">
                <Link className="nav-link" to="/details">
                  Details
                </Link>
              </li>
              <li className="nav-item @@listing__active">
                <Link className="nav-link" to="/about-us">
                  About
                </Link>
              </li>
              <li className="nav-item @@listing__active">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item dropdown @@property__active">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Property <span className="fa fa-angle-down"></span>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className="dropdown-item @@ps__active"
                    to="property-single.html"
                  >
                    Single property
                  </Link>
                </div>
              </li> */}
              {/* <li className="nav-item dropdown @@pages__active">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages <span className="fa fa-angle-down"></span>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className="dropdown-item @@about__active"
                    to="about.html"
                  >
                    About us
                  </Link>
                  <Link
                    className="dropdown-item @@contact__active"
                    to="contact.html"
                  >
                    Contact us
                  </Link>
                </div>
              </li> */}
            </ul>
            <div className="top-quote mt-lg-0">
              <Link to="/register" className="btn btn-style btn-primary">
                {/* <span className="fa fa-home"></span> Add listiing */}
                Register
              </Link>
            </div>

            <div className="search mx-3">
              <input className="search_box" type="checkbox" id="search_box" />
              <label className="fa fa-search" for="search_box"></label>
              <div className="search_form">
                <form action="error.html" method="GET">
                  <input type="text" placeholder="Search" />
                  <input type="submit" value="search" />
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
