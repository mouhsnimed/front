import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w3l-footers-20 bg-dark">
      <div className="footers20">
        <div className="container">
          <div className="footers20-content">
            <div className="d-grid grid-col-4 grids-content">
              <div className="column">
                <a href="#url" className="title-small">
                  Laisser un Message
                </a>
                <h4 className="text-white">
                  {" "}
                  Contacter nous, au besoin de conseils immobilier, nous sommes
                  à votre écoute
                </h4>
                <Link to="/contact" className="btn btn-style btn-primary">
                  {" "}
                  Nous contacter
                  <span className="fa fa-long-arrow-right ml-2"></span>{" "}
                </Link>
              </div>
              <div className="column">
                <a href="#url" className="title-small">
                  Nous Appeler
                </a>
                <h4 className="text-white">
                  Avez vous des questions, à nous formuler ?
                </h4>
                <a href="tel:+1-2345-678-11">
                  <p className="contact-phone" style={{ fontSize: "25px" }}>
                    (+ <span className="fa fa-phone"></span>) 212-2345-678-11
                  </p>
                </a>
              </div>
              <div className="column mt-lg-0 mt-md-5">
                <h4 className="mb-1 text-primary">s'inscrire au newsletter</h4>
                <p className="text-white">
                  {" "}
                  pour rester informé, de nos activités{" "}
                </p>
                <form action="#" className="subscribe-form mt-4" method="post">
                  <div className="form-group ">
                    <input
                      type="email"
                      name="subscribe"
                      className="text-white"
                      placeholder="Adresse email"
                      required=""
                    />
                    <button className="btn btn-style btn-primary">
                      s'inscrire
                    </button>
                  </div>
                </form>
                <ul className="footers-17_social">
                  <h4 className="d-inline mr-4 text-white">nous suivre</h4>
                  <li>
                    <a href="#url" className="twitter">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#url" className="facebook">
                      <span className="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#url" className="linkedin">
                      <span className="fa fa-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#url" className="instagram">
                      <span className="fa fa-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-grid grid-col-3 grids-content1 bottom-border">
              <div className="columns copyright-grid align-self">
                <p className="copy-footer-29 text-white">
                  Copyright © ArtPart 2021 . Tous droit réservé
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  When the user scrolls down 20px from the top of the document, show the button
     window.onscroll = function () {
        scrollFunction()
      }; 
  
      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("movetop").style.display = "block";
        } else {
          document.getElementById("movetop").style.display = "none";
        }
      }
  
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }*/}
    </section>
  );
};

export default Footer;
