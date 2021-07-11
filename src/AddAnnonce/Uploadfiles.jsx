import React from "react";
import FilePicker from "./FilePicker";

function Uploadfiles() {
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
            <li>
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              <span>Publier une annonce</span>
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              Upload vos images
            </li>
          </ul>
        </div>
      </section>
      <section className="w3l-contact-7 mt-3 mb-5" id="contact">
        <div className="contacts-9 pt-lg-5 pt-md-4">
          <div className="container">
            <div className="top-map">
              <div className="row map-content-9">
                <div className="col-lg-8">
                  <div className="contact-form">
                    <h5 className="mb-2">
                      Téléchargez vos meilleures images pour rendre l'annonce
                      plus attirant
                    </h5>
                    {/* 
                    
                    
                    Image picker here!
                    */}

                    <FilePicker />
                  </div>
                </div>
                <div className="col-lg-4 cont-details">
                  <address>
                    <h5 className="">
                      C'est encore plus facile d'ajouter et de gérer vos
                      annonces!
                    </h5>
                    <p>
                      Ajoutez des photos, modifiez la description et le prix de
                      vos annonces existantes. Publiez de nouvelles annonces,
                      c'est encore plus facile et rapide!
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Uploadfiles;
