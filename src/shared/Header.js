import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../context/authContext";
import API from "../request/api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [isFixed, setIsFixed] = useState(false);
  const [current, setCurrent] = useState(0);
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
            <Link className="navbar-brand" to="/"  style={{textTransform:"none"}}>
              {
                //<span className="fa fa-bank"></span
              }
              <b className="badge badge-primary" style={{color:"white",fontSize:"30px"}} >A</b>rt-ppart
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
              <li className={`nav-item ${current == 0 && "active" }`}>
                <Link className="nav-link" to="/" onClick={() => (setCurrent(0))}>
                  ACCUEIL 
                </Link>
              </li>
              <li className={`nav-item ${current == 1 && "active" }`}>
                <Link className="nav-link" to="/listing" onClick={() => (setCurrent(1))}>
                  ANNONCES 
                </Link>
              </li>
              {/* <li className="nav-item @@listing__active">
                <Link className="nav-link" to="/details">
                  Details
                </Link>
              </li> */}
              <li className={`nav-item ${current == 2 && "active" }`}>
                <Link className="nav-link" to="/about-us" onClick={() => (setCurrent(2))}>
                 NOUS 
                </Link>
              </li>
              <li className={`nav-item ${current == 3 && "active" }`}>
                <Link className="nav-link" to="/visite" onClick={() => (setCurrent(3))}>
                  360° VISITES
                </Link>
              </li>
              <li className={`nav-item ${current == 4 && "active" }`}>
                <Link className="nav-link" to="/contact" onClick={() => (setCurrent(4))}>
                  CONTACTS
                </Link>
              </li>
            </ul>
            {authState.isLoggedIn ? (
              <>
                {/* <div className="top-quote mr-3">
                  <Link to="/my-annonces" className="btn btn-style btn-primary">
                    <i className="fa fa-bullhorn"></i>
                    Mes annonces
                  </Link>
                </div> */}
                <div className="top-quote mr-3">
                  <Link to="/add-annonce" className="btn btn-style btn-primary">
                    <i className="fa fa-bullhorn"></i>
                    Publier une annonce
                  </Link>
                </div>
                <div className="top-quote">
                  <span
                    onClick={handleLogOut}
                    className="btn btn-style btn-outline-primary"
                  >
                    <i className="fa fa-sign-out"></i>
                    {/* Se déconnecter */}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="top-quote mr-3">
                  <Link to="/register" className="btn btn-style btn-primary">
                    <i className="fa fa-plus"></i> S'inscrire
                  </Link>
                </div>
                <div className="top-quote">
                  <Link
                    to="/login"
                    className="btn btn-style btn-outline-primary"
                  >
                    <i className="fa fa-user-circle"></i>
                    Connexion
                  </Link>
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
