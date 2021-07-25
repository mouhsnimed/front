import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "../context/authContext";
import API from "../request/api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [isFixed, setIsFixed] = useState(false);
  const handleOnscroll = () => {
    setIsFixed(window.scrollY >= 80);
  };

  useEffect(() => {
    window.onscroll = handleOnscroll;
  }, []);

  const [authState, dispatch] = useAuthState();

  const handleLogOut = () => {
    API({
      method: "post",
      url: "/logout",
    })
      .then((res) => {
        const { code } = res;
        console.log("code ", code);
        // update context
        dispatch({
          type: "LOGOUT",
        });
        toast.success("Logout success");
        // redirect to home page
        history.push("/login");
      })
      .catch((error) => {
        toast.error("Somthing went wrong!");
        history.push("/login");
        dispatch({
          type: "LOGOUT",
        });
      });
  };
  return (
    <header
      id="site-header"
      className={`fixed-top ${isFixed ? "nav-fixed" : ""}`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke px-0">
          <h1>
            <NavLink
              activeClassName="active"
              className="navbar-brand"
              to="/"
              style={{ textTransform: "none" }}
            >
              {
                //<span className="fa fa-bank"></span
              }
              <b
                className="badge badge-primary"
                style={{ color: "white", fontSize: "30px" }}
              >
                A
              </b>
              rt-ppart
            </NavLink>
          </h1>

          {/* <NavLink
          activeClassName='active' className="navbar-brand" to="#index.html">
              <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
          </NavLink> */}
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
              <li className={`nav-item`}>
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  ACCUEIL
                </NavLink>
              </li>
              <li className={`nav-item`}>
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/listing"
                >
                  ANNONCES
                </NavLink>
              </li>
              {/* <li className="nav-item @@listing__active">
                <NavLink
                activeClassName='active' className="nav-link" to="/details">
                  Details
                </NavLink>
              </li> */}
              <li className={`nav-item`}>
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/about-us"
                >
                  NOUS
                </NavLink>
              </li>              
              <li className={`nav-item`}>
                <NavLink className="nav-link" 
                         activeClassName="active"
                         to="/visite"
                         >
                  360° VISITES
                </NavLink>
              </li>
              <li className={`nav-item`}>
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            {authState.isLoggedIn ? (
              <>
                <div className="top-quote mr-3">
                  <NavLink
                    activeClassName="active"
                    to="/my-annonces"
                    className="btn btn-style btn-primary"
                  >
                    <i className="fa fa-bullhorn"></i>
                    Mes annonces
                  </NavLink>
                </div>
                <div className="top-quote">
                  <span
                    onClick={handleLogOut}
                    className="btn btn-style btn-outline-primary"
                  >
                      <i className="fa fa-sign-out"></i>
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="top-quote mr-3">
                  <NavLink
                    activeClassName="active"
                    to="/register"
                    className="btn btn-style btn-primary"
                  >
                    <i className="fa fa-plus"></i> S'inscrire
                  </NavLink>
                </div>
                <div className="top-quote">
                  <NavLink
                    activeClassName="active"
                    to="/login"
                    className="btn btn-style btn-outline-primary"
                  >
                    <i className="fa fa-user-circle"></i>
                    Connexion
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
