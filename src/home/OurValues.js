import React from "react";

const OurValues = () => {
  return (
    <section className="w3l-bottom-grids py-5" id="steps">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="grids-area-hny main-cont-wthree-fea row">
          <div className="col-lg-4 col-md-6 grids-feature">
            <div className="area-box no-box-shadow text-left">
              <span className="fa fa-search-plus"></span>
              <h5>Rechercher et Visiter</h5>
              <h4>
                <a href="#feature" className="title-head">
                  Trouvez l'appartement de vos rêve sans plus tarder
                </a>
              </h4>
              <p>
                Faites une recherches maintenant visiter, contacter et soyez loger.
              </p>
              <a href="#more" className="more">
                je veux chercher<span className="fa fa-long-arrow-right"></span>{" "}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
            <div className="area-box no-box-shadow text-left">
              <span className="fa fa-user-o"></span>
              <h5>Connect to an agent</h5>
              <h4>
                <a href="#feature" className="title-head">
                  Créer vous un compte.
                </a>
              </h4>
              <p>
                Vous désirez publier des annonces,
                réjoignez nous maintenant , en créant un compte.
              </p>
              <a href="#more" className="more">
                créer mon compte <span className="fa fa-long-arrow-right"></span>{" "}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
            <div className="area-box no-box-shadow text-left">
              <span className="fa fa-home"></span>
              <h5> Trouvez le Bon Shooters</h5>
              <h4>
                <a href="#feature" className="title-head">
                  Annonceur, vous voulez faire une Converture 360°
                </a>
              </h4>
              <p>
                Consulter la liste de nos Shooters et trouver le <b className="text-danger"> profile 
                idéal</b>, au <b className="text-danger"> prix idéal </b>.
              </p>
              <a href="#more" className="more">
                Submit info <span className="fa fa-long-arrow-right"></span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
