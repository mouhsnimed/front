import React from "react";

function Contact() {
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
              <a href="index.html">Home</a>
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              Pages
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              Contactez nous
            </li>
          </ul>
        </div>
      </section>
      <section className="w3l-contact-7 pt-5" id="contact">
        <div className="contacts-9 pt-lg-5 pt-md-4">
          <div className="container">
            <div className="top-map">
              <div className="row map-content-9">
                <div className="col-lg-8">
                  <div className="contact-form">
                    <h5 className="mb-2">Get in touch</h5>
                    <p className="mb-4">
                      Votre adresse email ne sera pas publiée. Les champs requis
                      sont indiqués *
                    </p>
                    <form
                      action="http://localhost:3000/contact"
                      method="post"
                      className=""
                    >
                      <div className="form-grid">
                        <div className="input-field">
                          <input
                            type="text"
                            name="w3lName"
                            id="w3lName"
                            placeholder="Votre nom"
                            required=""
                          />
                        </div>
                        <div className="input-field">
                          <input
                            type="email"
                            name="w3lSender"
                            id="w3lSender"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="input-field mt-4">
                        <textarea
                          name="w3lMessage"
                          id="w3lMessage"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      {/* <input type="checkbox" />{" "}
                      <label>
                        Save my name, email, and website in this browser for the
                        next time I comment
                      </label> */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-style mt-3"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 cont-details">
                  <address>
                    <h5 className="">Nos Address</h5>
                    <p>
                      <span className="fa fa-map-marker"></span>
                      Casablanca, Maroc
                    </p>

                    <h5 className="mt-4 pt-lg-3">Numéro de téléphone</h5>
                    <p>
                      <span className="fa fa-mobile"></span>{" "}
                      <strong>Phone :</strong>
                      <a href="tel:+212606196434"> (+212) 606196434</a>
                    </p>
                    <p>
                      {" "}
                      <span className="fa fa-envelope"></span>{" "}
                      <strong>Email :</strong>
                      <a href="mailto:m.mouhsni@gmail.com">
                        m.mouhsni@gmail.com
                      </a>
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="map mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
