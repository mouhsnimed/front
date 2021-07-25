import React, { useState, useLayoutEffect } from "react";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import { useParams } from "react-router-dom";
import CustomLoader from "../shared/Loader";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import API, { BACKEND_URL } from "../request/api";
import toast from "react-hot-toast";

const Details = () => {
  const [loader, setLoader] = useState(false);
  const [details, setDetails] = useState({});
  const [user, setUser] = useState({});
  const [medias, setMedias] = useState([]);
  const { id } = useParams();
  const getDetails = () => {
    setLoader(true);
    API({
      method: "get",
      url: `/Annonce/${id}`,
    })
      .then(({ data }) => {
        setLoader(false);
        setDetails(data.details);
        setMedias(data.medias ?? []);
        setUser(data.user);
      })
      .catch(() => {
        setLoader(false);
        toast.error("Aucun annonce n'a été trouvé", { duration: 5000 });
      });
  };
  useLayoutEffect(() => {
    if (id) {
      getDetails();
    }
  }, [id]);
  console.log(medias);
  return (
    <div>
      {loader && <CustomLoader />}
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
              ></span>
              Annonces
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>
              Details d'annonce
            </li>
          </ul>
        </div>
      </section>

      <section className="w3l-blog post-content py-5">
        <div className="container py-lg-4 py-md-3 py-2">
          <div className="inner mb-4">
            <ul className="blog-single-author-date align-items-center">
              <li>
                <div className="listing-category">
                  <span>{details.type_annonce}</span>
                </div>
              </li>
              <li>
                <span className="fa fa-clock-o"></span>{" "}
                {Date(details.created_at).toLocaleString()}
              </li>
            </ul>
          </div>
          <div className="post-content">
            <h2 className="title-single"> {details.titre}</h2>
          </div>
          <div className="blo-singl mb-4">
            <ul className="blog-single-author-date align-items-center">
              <li>
                <p>
                  {details.adresse}, {details.ville}, {details.pays}
                </p>
              </li>
              <li>
                <span className="fa fa-bed"></span> {details.nombre_chambre}{" "}
                Chambres
              </li>
              <li>
                <span className="fa fa-bath"></span> {details.nombre_bain} salle
                de bains
              </li>
              <li>
                <span className="fa fa-share-square-o"></span>{" "}
                {details.etat_bien}
              </li>
            </ul>
            <ul className="share-post">
              <span className="cost-estate m-o">
                {details.prix?.toFixed(2)} MAD
              </span>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-8 w3l-news">
              <Carousel>
                {medias.map((media) => {
                  return (
                    <div key={media.id} className="item">
                      <div className="card">
                        <img
                          alt={media.titre}
                          src={`${BACKEND_URL}/${media.chemin}`}
                          className="img-fluid radius-image"
                          alt="image"
                        />
                      </div>
                    </div>
                  );
                })}
              </Carousel>

              <div className="blog-single-post">
                <div className="single-post-content">
                  <h3 className="post-content-title mb-3">Description</h3>
                  <p className="mb-4">{details.description}</p>
                  <div className="single-bg-white">
                    <h3 className="post-content-title mb-4">
                      Détail de la propriété
                    </h3>
                    <ul className="details-list">
                      <li>
                        <strong>Référence :</strong> {details.id}
                      </li>
                      <li>
                        <strong>Superficie :</strong> {details.superficie} m2
                      </li>
                      <li>
                        <strong>Chambres :</strong> {details.nombre_chambre}
                      </li>
                      <li>
                        <strong>Salon :</strong> {details.nombre_salon}
                      </li>
                      <li>
                        <strong>Salle de bains :</strong> {details.nombre_bain}{" "}
                      </li>
                      <li>
                        <strong>Meublé :</strong>{" "}
                        {details.meuble === 1 ? "Oui" : "Non"}
                      </li>
                      {/* <li>
                        <strong>Structure type :</strong> Wood{" "}
                      </li>
                      <li>
                        <strong>Garage size :</strong> 15 cars{" "}
                      </li>
                      <li>
                        <strong>Garages :</strong> 15{" "} 
                      </li>*/}
                      <li>
                        <strong>Prix :</strong> {details.prix?.toFixed(2)} MAD
                      </li>
                      <li>
                        <strong>Etat de bien :</strong> {details.etat_bien}
                      </li>
                    </ul>
                  </div>
                  {/* <div className="single-bg-white">
                    <h3 className="post-content-title mb-4">Amenities</h3>
                    <ul className="details-list">
                      <li>
                        <strong>Air Conditioning </strong>
                      </li>
                      <li>
                        <strong>Buil-In Wardrobes </strong>{" "}
                      </li>
                      <li>
                        <strong>Dishwasher</strong>{" "}
                      </li>
                      <li>
                        <strong>Floor Coverings </strong>{" "}
                      </li>
                      <li>
                        <strong>Medical / Clinic </strong>{" "}
                      </li>
                      <li>
                        <strong>Fencing</strong>{" "}
                      </li>
                      <li>
                        <strong>Internet and wifi </strong>{" "}
                      </li>
                    </ul>
                  </div> */}
                </div>
                {details.localisation_geo?.startsWith(
                  "https://www.google.com/maps"
                ) && (
                  <div className="single-bg-white">
                    <h3 className="post-content-title mb-4">Localisation</h3>
                    <div className="agent-map">
                      <iframe
                        //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                        src={details.localisation_geo}
                        frameborder="0"
                        allowfullscreen=""
                      ></iframe>
                    </div>
                  </div>
                )}

                {/* <div className="single-bg-white mb-0">
                  <h3 className="post-content-title mb-4">Video</h3>
                  <div className="post-content">
                    <iframe
                      src="https://www.youtube.com/embed/jqP3m3ElcxA"
                      frameborder="0"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-5">
              <aside className="sidebar">
                <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title">
                    <h4>Contacter le propretiere de l'annonce</h4>
                  </div>

                  <article className="post">
                    <div className="text mb-0">
                      <span>
                        {user.nom} {user.prenom}
                      </span>
                      <div className="post-info">+212 {user.numero}</div>
                      <a
                        target="_blank"
                        href={`mailto::${user.email}`}
                        className="post-info"
                      >
                        {user.email}
                      </a>
                    </div>
                  </article>
                </div>
                {/* <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title">
                    <h4>Popular Post</h4>
                  </div>

                  <article className="post">
                    <figure className="post-thumb">
                      <img src={l1} className="radius-image" alt="" />
                    </figure>
                    <div className="text">
                      <a href="#blog-single">
                        Why we are the best in the business
                      </a>
                      <div className="post-info">Sep 09, 2020 - 2 comments</div>
                    </div>
                  </article>

                  <article className="post">
                    <figure className="post-thumb">
                      <img src={l2} className="radius-image" alt="" />
                    </figure>
                    <div className="text">
                      <a href="#blog-single">Build your next landing page.</a>
                      <div className="post-info">Sep 09, 2020 - 2 comments</div>
                    </div>
                  </article>

                  <article className="post">
                    <figure className="post-thumb">
                      <img src={l3} className="radius-image" alt="" />
                    </figure>
                    <div className="text">
                      <a href="#blog-single">
                        Simply the best. Better than the rest.
                      </a>
                      <div className="post-info">Sep 10, 2020 - 2 comments</div>
                    </div>
                  </article>
                </div> */}
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
