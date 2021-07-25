import { useState, useEffect } from "react";
import React from "react";
import Companies from "../shared/Companies";
import TipsandAdvices from "../shared/TipsandAdvices";
import OurValues from "./OurValues";
import WhoWeAre from "./WhoWeAre";
import PopularLocation from "./PopularLocation";
import p1 from "../assets/images/p1.jpg";
import { Link } from "react-router-dom";

function Home() {
  // get list of catégorie
  const [categories, setCategories] = useState([]);
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    // Récupération des catégorie
    const getCategories = async () => {
      const tasksFromServer = await fetchAysnc(
        "http://localhost:8000/api/categorieAnnonce"
      );
      setCategories(Array.from(tasksFromServer.data));
    };
    getCategories();

    // Récupération du top 10 annonces
    const getAnnonces = async () => {
      const tasksFromServer = await fetchAysnc(
        "http://localhost:8000/api/Annonce"
      );
      setAnnonces(Array.from(tasksFromServer.data));
      console.log(annonces);
    };
    getAnnonces();
  }, []);

  const fetchAysnc = async (api) => {
    const res = await fetch(api, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div>
      <section className="w3l-cover-3">
        <div className="cover top-bottom">
          <div className="container">
            <div className="middle-section text-center">
              <div className="section-width">
                <p> C'est tellement mieux de se sentir chez sois.</p>
                <h2>Trouvez le lieu qui vous correspond</h2>
                <div className="most-searches">
                  <h4>Les plus populaires</h4>
                  <ul>
                    <li>
                      <a href="#link">Villa</a>
                    </li>
                    <li>
                      <a href="#link">Apartment</a>
                    </li>
                  </ul>
                </div>
                <form action="#" className="w3l-cover-3-gd" method="GET">
                  <span className="input-group-btn">
                    <select className="btn btn-default" name="ext" required>
                      <option> Vente</option>
                      <option> Location</option>
                    </select>
                  </span>

                  <span className="input-group-btn">
                    <select className="btn btn-default" name="ext" required>
                      <option>Choisir catégorie</option>
                      {categories.map((categorie) => (
                        <option key={categorie.id}> {categorie.nom}</option>
                      ))}
                    </select>
                  </span>
                  <span className="input-group-btn">
                    <select className="btn btn-default" name="ext" required>
                      <option>Choisir une ville</option>
                      <option>Casablanca</option>
                      <option>Fés</option>
                      <option>Tanger</option>
                      <option>Marrakech</option>
                      <option>Salé</option>
                      <option>Meknès</option>
                      <option>Rabat</option>
                      <option>Oujda</option>
                      {/* <option>Kénitra</option>
                        <option>Agadir</option>
                        <option>Tétouan</option>
                        <option>Témara</option>
                        <option>Mohammédia</option>
                        <option>Khouribga</option>
                        <option>Rabat</option>
                        <option>El Jadida</option>
                        <option>Béni Mellal</option>
                        <option>Taza</option>
                        <option>Khémisset</option> */}
                    </select>
                  </span>
                  <button type="submit" className="btn-primary">
                    <span
                      className="fa fa-search"
                      style={{ color: "white", fontSize: "20px" }}
                    ></span>
                  </button>
                </form>
              </div>
              <section id="bottom" className="demo">
                <a href="#bottom">
                  <span></span> explorer
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="locations-1" id="locations">
        <div className="locations py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="heading text-center mx-auto">
              <h3 className="title-big"> Pouvant vous intéressez</h3>
            </div>

            <div className="row pt-md-5 pt-4">
              {annonces.map(
                (annonce, i) =>
                  i < 6 && (
                    <div key={annonce.id} className="col-lg-4 col-md-6 mb-3">
                      <Link to={`/details/${annonce.id}`}>
                        <div className="box16">
                          <div className="rentext-listing-category">
                            <span>{annonce.type_annonce}</span>
                          </div>
                          <img className="img-fluid" src={p1} alt="" />
                          <div className="box-content">
                            <h3 className="title">
                              {numberWithCommas(annonce.prix)} MAD
                            </h3>
                            <span className="post">{annonce.titre}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-index3" id="about">
        <WhoWeAre />
        <PopularLocation />
        <OurValues />
        <TipsandAdvices />
        <Companies />
      </section>
    </div>
  );
}

export default Home;
