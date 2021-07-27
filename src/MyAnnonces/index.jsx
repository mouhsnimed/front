import React, { useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Empty from "../assets/svgs/empty.svg";
import API, { BACKEND_URL } from "../request/api";
import CustomLoader from "../shared/Loader";
import p1 from "../assets/images/p1.jpg";

const MyAnnonces = () => {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(false);
  useLayoutEffect(() => {
    API({
      method: "get",
      url: "/myAnnonces",
    })
      .then(({ data }) => {
        setLoader(false);
        setList(data);
      })
      .catch(() => {
        setLoader(false);
        toast.error("Une erreur s'est produite. Veuillez réessayer", {
          duration: 5000,
        });
      });
  }, []);

  const deleteAnnonce = (id) => {
    API({
      method: "delete",
      url: `/Annonce/${id}`,
    })
      .then(() => {
        setLoader(false);
        toast.success("Votre annonce a été supprimée avec succès", {
          duration: 5000,
        });
      })
      .catch(() => {
        setLoader(false);
        toast.error("Une erreur s'est produite. Veuillez réessayer", {
          duration: 5000,
        });
      });
  };
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
              <span>Home</span>
            </li>

            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>
              mes annonces
            </li>
          </ul>
        </div>
      </section>
      <section className="w3l-contact-7 mt-3 mb-5" id="contact">
        <div className="contacts-9 pt-lg-5 pt-md-4">
          <div className="container">
            <div className="d-flex flex-fill justify-content-center">
              <Link
                to="/add-annonce"
                className="btn btn-style btn-primary mb-5 mt-2"
              >
                <i className="fa fa-bullhorn"></i>
                Ajouté une nouvelle annonce
              </Link>
            </div>

            {list.length > 0 ? (
              <section className="locations-1" id="locations">
                <div className="locations py-5">
                  <div className="my-annonce">
                    <div className="row">
                      {list.map((annonce) => (
                        <div
                          key={annonce.id}
                          className="col-lg-4 col-md-6 listing-img mt-lg-0 pt-lg-0 mt-5 pt-md-2 mb-3"
                        >
                          {/* <span
                            class="remove-annonce"
                            onClick={() => deleteAnnonce(annonce.id)}
                          >
                            <span className="fa fa-trash"></span>
                          </span> */}
                          <Link to={`/details/${annonce.id}`}>
                            <div className="box16">
                              <div className="rentext-listing-category">
                                <span>{annonce.type_annonce}</span>
                              </div>
                              <img
                                className="img-fluid"
                                src={`${BACKEND_URL}/${annonce.chemin}`}
                                alt=""
                              />
                              <div className="box-content">
                                <h3 className="title">
                                  {annonce.prix.toFixed(2)} MAD
                                </h3>
                              </div>
                            </div>
                          </Link>
                          <div className="listing-details blog-details align-self">
                            <h4 className="user_title agent">
                              <Link to="/details"> {annonce.titre} </Link>
                            </h4>
                            <p className="user_position">{annonce.adresse}</p>
                            <ul className="mt-3 estate-info">
                              <li>
                                <span className="fa fa-bed"></span>{" "}
                                {annonce.nombre_chambre} ch
                              </li>
                              <li>
                                <span className="fa fa-shower"></span>{" "}
                                {annonce.nombre_bain} bain
                              </li>
                              <li>
                                <span className="fa fa-share-square-o"></span>{" "}
                                {annonce.superficie} m²
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <div className="empty-annonce">
                <img src={Empty} alt="Mes annonces" />
                <h3 className="mb-5 text-center">
                  Vous n'avez aucune annonce en cours
                </h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAnnonces;
