import React from "react";
import { Link } from "react-router-dom";
import SuccessIcon from "../assets/svgs/success.svg";
const AnnonceSuccess = () => {
  return (
    <div>
      <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about pt-5">
          <div className="container pt-lg-5 py-3"></div>
        </div>
      </section>
      <section className="w3l-breadcrumb">
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li>
              <span>Home</span>
            </li>

            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>
              Publier une annonce
            </li>
          </ul>
        </div>
      </section>
      <section className="w3l-contact-7 mt-3 mb-5" id="contact">
        <div className="contacts-9 pt-lg-5 pt-md-4">
          <div className="container anonce-success">
            <img src={SuccessIcon} alt="L'annonce a été ajoutée avec succès" />
            <h3 className="mb-5">L'annonce a été ajoutée avec succès</h3>
            <Link to="/my-annonces" className="btn btn-style btn-primary">
              <i className="fa fa-bullhorn"></i>
              Mes annonces
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnonceSuccess;
