import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import p1 from "../assets/images/p1.jpg";
import {numberWithCommas,fetchAysnc,postAysnc} from "../request/function.js";


const Listing = () => {
  // get list of catégorie
  const [categories, setCategories] = useState([]);
  const [annonces, setAnnonces] = useState([]);
  const [searchMax, setSearchMax] = useState(false);
  const [PaginatePages, setPaginatePages] = useState([]);
  const [formSearch, setFormSearch] = useState();
  const [onSearch, SetOnSearch] = useState(false);

  // Récupération des catégorie
  const getCategories = async () => {
    const DataFromServer = await fetchAysnc(
      "http://localhost:8000/api/categorieAnnonce"
    );
    setCategories(DataFromServer.data);
  };

  // Récupération des Annonces
  const getAnnonces = async (urlApi) => {
    const DataFromServer = await fetchAysnc(urlApi);

    console.log(DataFromServer);
    if (DataFromServer.data === "error") {
      setAnnonces([]);
    } else {
      setAnnonces(DataFromServer.data);
    }

    if (
      DataFromServer.hasOwnProperty("meta") &&
      DataFromServer.meta.hasOwnProperty("links")
    ) {
      setPaginatePages(DataFromServer.meta.links);
    } else {
      setPaginatePages([]);
    }
  };

  // Aller vers le lien de la pagination
  const gotoPage = async function (page) {
    if (onSearch === false) {
      getAnnonces(page.url);
    } else {
      console.log(formSearch);
      // Récupération du résultat et formatage
      const DataFromServer = await postAysnc(page.url, formSearch);

      console.log(DataFromServer);

      if (DataFromServer.data === "error") {
        setAnnonces([]);
      } else {
        setAnnonces(DataFromServer.data);
      }

      if (
        DataFromServer.hasOwnProperty("meta") &&
        DataFromServer.meta.hasOwnProperty("links")
      ) {
        setPaginatePages(DataFromServer.meta.links);
      } else {
        setPaginatePages([]);
      }
    }
  };

  // Faire une Rechercher
  const getSearch = async function (e) {
    e.preventDefault();
    // Création des critère à transmettre via json
    const reqElement = {
      type_annonce: e.target.elements.type_annonce.value,
      categorie_annonce_id: e.target.elements.categorie_annonce.value,
      superficie1: e.target.elements.superficie1.value,
      superficie2: e.target.elements.superficie2.value,
      prix1: e.target.elements.prix1.value,
      prix2: e.target.elements.prix2.value,
      ville: e.target.elements.ville.value,
      searchMAx: false,
    };

    // ajout des criteres de recherche max
    if (searchMax) {
      reqElement.nombre_chambre = e.target.elements.nbChambre.value;
      reqElement.nombre_bain = e.target.elements.nbSalleBain.value;
      reqElement.nombre_salon = e.target.elements.nbSalon.value;
      reqElement.etage = e.target.elements.niveauEtage.value;
      reqElement.meuble = e.target.elements.estMeuble.value;
      reqElement.searchMAx = true;
    }

    SetOnSearch(true);
    setFormSearch(reqElement);

    // Récupération du résultat et formatage
    const DataFromServer = await postAysnc(
      "http://localhost:8000/api/Annonce/search",
      reqElement
    );

    console.log(reqElement);
    console.log(DataFromServer);

    if (DataFromServer.data === "error") {
      setAnnonces([]);
    } else {
      setAnnonces(DataFromServer.data);
    }

    if (
      DataFromServer.hasOwnProperty("meta") &&
      DataFromServer.meta.hasOwnProperty("links")
    ) {
      setPaginatePages(DataFromServer.meta.links);
    } else {
      setPaginatePages([]);
    }
  };

  useEffect(() => {
    getCategories();
    getAnnonces("http://localhost:8000/api/Annonce");
  }, []);

  // render page
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
              <Link to="/">Accueil</Link>
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              Annonces
            </li>
          </ul>
        </div>
      </section>

      {/* Section de Recherche */}
      <section
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          boxShadow: "0px 2px 5px black",
          padding: "0px",
        }}
      >
        <div className="container-fluid" style={{ padding: "0px" }}>
          <form onSubmit={(e) => getSearch(e)}>
            <div
              className="form-row align-items-center"
              style={{
                height: "20px",
                width: "100%",
                backgroundColor: "transparent",
              }}
            >
              <button
                type="button"
                className="btn btn-primary text-center"
                onClick={(e) => setSearchMax(!searchMax)}
              >
                {searchMax ? (
                  <>
                    {" "}
                    minimal <span className="fa fa-arrow-up"></span>{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    maximal <span className="fa fa-arrow-down"></span>{" "}
                  </>
                )}
              </button>
            </div>

            {/* Recherche Minimal */}
            <div className="form-row align-items-center">
              <div className="col-sm-2 my-1 ml-2">
                <label className="text-white" htmlFor="">
                  {" "}
                  Type de bail{" "}
                </label>
                <select className="form-control" name="type_annonce" required>
                  <option>Location</option>
                  <option>Vente</option>
                </select>
              </div>

              <div>
                <hr
                  style={{
                    height: "80px",
                    width: "2px",
                    backgroundColor: "white",
                  }}
                />
              </div>

              <div className="col-sm-2 my-1 ml-2">
                <label className="text-white" htmlFor="">
                  {" "}
                  Catégorie{" "}
                </label>
                <select
                  className="form-control"
                  name="categorie_annonce"
                  required
                >
                  {categories.map((categorie) => (
                    <option key={categorie.id} value={categorie.id}>
                      {" "}
                      {categorie.nom}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <hr
                  style={{
                    height: "80px",
                    width: "2px",
                    backgroundColor: "white",
                  }}
                />
              </div>

              <div className="col-sm-2 my-1 ml-2">
                <label className="text-white" htmlFor="">
                  {" "}
                  superficie (m²){" "}
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    name="superficie1"
                    className="form-control mr-2"
                    placeholder="de"
                  />
                  <input
                    type="number"
                    name="superficie2"
                    className="form-control"
                    placeholder="à"
                  />
                </div>
              </div>

              <div>
                <hr
                  style={{
                    height: "80px",
                    width: "2px",
                    backgroundColor: "white",
                  }}
                />
              </div>

              <div className="col-sm-2 my-1 ml-2">
                <label className="text-white" htmlFor="searchPrix1">
                  {" "}
                  prix (MAD){" "}
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    name="prix1"
                    id="searchPrix1"
                    className="form-control mr-2"
                    placeholder="de"
                  />
                  <input
                    type="number"
                    name="prix2"
                    id="searchPrix2"
                    className="form-control"
                    placeholder="à"
                  />
                </div>
              </div>

              <div>
                <hr
                  style={{
                    height: "80px",
                    width: "2px",
                    backgroundColor: "white",
                  }}
                />
              </div>

              <div className="col-sm-2 my-1 ml-2">
                <label className="text-white" htmlFor="searchVille">
                  {" "}
                  Localisation{" "}
                </label>
                <select
                  className="form-control"
                  name="ville"
                  id="searchVille"
                  required
                >
                  <option value="agadir">Agadir</option>
                  <option>Casablanca</option>
                  <option>Fés</option>
                  <option>Tanger</option>
                  <option>Marrakech</option>
                  <option>Salé</option>
                  <option>Meknès</option>
                  <option>Rabat</option>
                  <option>Oujda</option>
                </select>
              </div>

              <div className="col-auto my-1">
                <button
                  type="submit"
                  className="btn btn-primary text-center"
                  style={{ height: "70px", width: "70px", paddingLeft: "20px" }}
                >
                  <span className="fa fa-search"></span>
                </button>
              </div>
            </div>

            {/* Recherche Détaillé */}
            {searchMax && (
              <>
                <hr
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "white",
                    marginBottom: "0px",
                    boxShadow: "5px 5px 10px black inset",
                  }}
                />
                <div
                  className="form-row align-items-center text-center"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    padding: "10px",
                    marginTop: "0px",
                    boxShadow: "1px 1px 5px black inset",
                  }}
                >
                  <div className="offset-sm-1 col-sm-2 my-1">
                    <div className="form-inline-group">
                      <label className="text-white" htmlFor="">
                        Nbr. Chambres
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text bg-primary">
                            <span className="fa fa-bed text-white"></span>
                          </div>
                        </div>
                        <input
                          type="number"
                          name="nbChambre"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-2 my-1 ml-2">
                    <label className="text-white" htmlFor="">
                      {" "}
                      Nbr. Salle de Bain
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text bg-primary">
                          <span className="fa fa-shower text-white"></span>
                        </div>
                      </div>
                      <input
                        type="number"
                        name="nbSalleBain"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-sm-2 my-1 ml-2">
                    <label className="text-white" htmlFor="">
                      Nbr. Salons{" "}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text bg-primary">
                          <span className="fa fa-home text-white"></span>
                        </div>
                      </div>
                      <input
                        type="number"
                        name="nbSalon"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-sm-2 my-1 ml-2">
                    <label className="text-white" htmlFor="">
                      {" "}
                      A quel Etage{" "}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text bg-primary">
                          <span className="fa fa-level-up text-white"></span>
                        </div>
                      </div>
                      <input
                        type="number"
                        name="niveauEtage"
                        className="form-control"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <div className="col-sm-2 my-1 ml-2">
                    <label className="text-white" htmlFor="">
                      {" "}
                      Meublé{" "}
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text bg-primary">
                          <span className="fa fa-television text-white"></span>
                        </div>
                      </div>
                      <select
                        className="form-control"
                        name="estMeuble"
                        required
                      >
                        <option value="1"> Oui </option>
                        <option value="0"> Non </option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Zone d'affichage des éléments */}
      <section className="locations-1" id="locations">
        <div className="locations py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">
              {annonces.length === 0 ? (
                <div className="text-center col-lg-12">
                  {" "}
                  <h5> Aucun élément trouvé </h5>{" "}
                </div>
              ) : (
                annonces.map(
                  (annonce, i) =>
                    i < 9 && (
                      <div
                        key={annonce.id}
                        className="col-lg-4 col-md-6 listing-img mt-lg-0 pt-lg-0 mt-5 pt-md-2 mb-3"
                      >
                        <a href="#url">
                          <div className="box16">
                            <div className="rentext-listing-category">
                              <span> {annonce.type_annonce} </span>
                            </div>
                            <img className="img-fluid" 
                                 src={ annonce.chemin != null ? `http://localhost:8000/${annonce.chemin}` : p1} alt="" />
                            <div className="box-content">
                              <h3 className="title">
                                {" "}
                                {numberWithCommas(annonce.prix)} MAD{" "}
                              </h3>
                            </div>
                          </div>
                        </a>
                        <div className="listing-details blog-details align-self">
                          <h4 className="user_title agent">
                            <a href="#url"> {annonce.titre} </a>
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
                          {/* partie annonceur */}
                          {/* <div className="author align-items-center mt-4">
                        <a href="#img" className="comment-img">
                          <img src={team3} alt="" className="img-fluid" />
                        </a>
                        <ul className="blog-meta">
                          <li>
                            <a href="#url">Laura Antiochus </a>
                          </li>
                          <li className="meta-item blog-lesson">
                            <span className="meta-value"> Selling agent</span>
                          </li>
                        </ul>
                      </div> */}
                        </div>
                      </div>
                    )
                )
              )}
            </div>

            <div className="pagination-wrapper mt-5 pt-lg-3 text-center">
              <ul className="page-pagination">
                {annonces.length !== 0 &&
                  PaginatePages.map((page) => (
                    <li key={page.label}>
                      {page.active ? (
                        <span
                          aria-current="page"
                          className="page-numbers current ml-1"
                          style={{ boxShadow: "1px 0px 5px black inset" }}
                        >
                          {page.label}
                        </span>
                      ) : (
                        page.url && (
                          <button
                            type="button"
                            onClick={(e) => gotoPage(page)}
                            className="page-numbers ml-1"
                            style={{ boxShadow: "1px 0px 5px black inset" }}
                          >
                            {page.label === "&laquo; Previous" ||
                            page.label === "Next &raquo;"
                              ? page.label === "&laquo; Previous"
                                ? "précédent"
                                : "Suivant"
                              : page.label}
                          </button>
                        )
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;
