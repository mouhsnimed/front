import React from "react";
import about from "../assets/images/about.jpg";
import { Link } from "react-router-dom";

function About() {
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
              <a href="index.html">Accueil</a>
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              Nous
            </li>
          </ul>
        </div>
      </section>

      <section className="w3l-index3" id="about">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">
              <div className="col-lg-5 pr-lg-0">
                <div className="w3l-left-img2"></div>
              </div>
              <div className="col-lg-7 pl-lg-0">
                <div className="w3l-right-info">
                  <h3 className="title-big">Nous vous proposons une expérience inovante </h3>
                  <h5 className="mt-4">
                    Mettre à votre disposition la maison de vos.
                    profiter des avancés technologique en termes d'inovation 
                    mis à votre disposition pour vous sastifaire.
                  </h5>
                  <p className="mt-4">
                    Qu'attendez décrouvez des offres , visiter , explorer
                    et surtout trouvez ce que vous chercher, c'est par là.

                  </p>
                  <a
                    href="#small-dialog1"
                    className="popup-with-zoom-anim play-view d-block mt-md-5 mt-4"
                  >
                    <span className="video-play-icon">
                      <span className="fa fa-play"></span>
                    </span>
                    <Link  to="/visite" > 360° visite </Link>
                  </a>
                </div>
              </div>
            </div>

            <div className="grids-area-hny main-cont-wthree-fea row mt-5 pt-lg-5 pt-5">
              <div className="col-lg-4 col-md-6 grids-feature">
                <div className="area-box">
                  <span className="fa fa-users"></span>
                  <h4>
                    <a href="#feature" className="title-head">
                       Devenez Partenaires
                    </a>
                  </h4>
                  <p>
                    Inscrivez vous dès maintenant pour faire partir de la team
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                <div className="area-box">
                  <span className="fa fa-search-plus"></span>
                  <h4>
                    <a href="#feature" className="title-head">
                      360° visite
                    </a>
                  </h4>
                  <p>
                    Des espériences réaliste comme si vous y étiez 
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                <div className="area-box">
                  <span className="fa fa-dollar"></span>
                  <h4>
                    <a href="#feature" className="title-head">
                      Gratuit
                    </a>
                  </h4>
                  <p>
                    Inscrivez vous gratuitement et commencer l'aventure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="w3l-aboutblock2" id="why">
          <div className="midd-w3 py-5">
            <div className="container py-lg-5 py-md-4 py-2">
              <div className="row">
                <div className="col-lg-6 left-wthree-img">
                  <iframe src="https://www.youtube.com/embed/A8CdkN-g6oY?autoplay=1&mute=1&loop=1" 
                  alt="" className="img-fluid radius-image"
                  style={{width:"100%",height:"100%"}} >
                  </iframe>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5 align-self">
                  <h6 className="title-small"> Découvrez </h6>
                  <h3 className="title-big text-danger">
                    MATTERPORT CORTEX POWER
                  </h3>
                  <p className="mt-4">
                  Matterport est la norme pour la capture d’espaces 3D. 
                  C’est une plateforme tout-en-un qui transforme des espaces réels en 
                  modèles de jumeaux digitaux immersifs. Bien plus que des scans panoramiques, 
                  Matterport permet aux utilisateurs de capturer et de connecter des pièces pour 
                  créer des modèles 3D d’espaces réellement interactifs.                  
                  </p>
                  <p className="mt-4">
                    équipez de CORTEX pour vous faciliter encore la vie
                  </p>
                  <ul className="w3l-right-book mt-lg-5 mt-4">
                    <li>
                      <span className="fa fa-check" aria-hidden="true"></span>
                      Capturer 
                    </li>
                    <li>
                      <span className="fa fa-check" aria-hidden="true"></span>
                      Présenter innover
                    </li>
                    <li>
                      <span className="fa fa-check" aria-hidden="true"></span>
                        Plonger dans une réaliter virtuel
                    </li>
                    <li>
                      <span className="fa fa-check" aria-hidden="true"></span>
                        Découvrez vos batiment comme si vous y étiez
                    </li>
                  </ul>
                  <div style={{width:"100%",textAlign:"center"}} className="mt-4">
                    <a href="https://matterport.com/" target="_blank"
                      className="btn btn-danger"
                      style={{padding:"15px"}}>
                      DECOUVRIR MATTERPORT <i className="fa fa-cube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default About;
