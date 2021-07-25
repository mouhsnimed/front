import React from "react";

const WhoWeAre = () => {
  return (
    <div>
      <div className="midd-w3 pb-5">
        <div className="container pb-lg-5 pb-md-4 pb-2">
          <div className="row">
            <div className="col-lg-5 pr-lg-0">
              <div className="w3l-left-img"></div>
            </div>
            <div className="col-lg-7 pl-lg-0">
              <div className="w3l-right-info">
                <h3 className="title-big">
                  Découvrez la puissance de la technologie MatterPort
                </h3>
                <p className="mt-4">
                  MatterPort est un moteur de rendu 
                  virtuel, vous permettant de faire 
                  des visites par immersion <b>3D</b>. 
                </p>
                <p className="mt-3">
                  Grâce à cette technologie futuriste , Utiliser par 
                  nos shooters, vous profiterez des avantages d'une 
                  visites virtuelles, nettement plus bénéfique qu'une 
                  visite classique.
                </p>
                <ul className="w3l-right-book w3l-right-book-grid mt-md-5 mt-4">
                  <li>
                    <span className="fa fa-check text-secondary" aria-hidden="true"></span>
                     Economisez votre énergie 
                  </li>
                  <li>
                    <span className="fa fa-check text-secondary" aria-hidden="true"></span>
                    Gagnez en Temps
                  </li>
                  <li>
                    <span className="fa fa-check text-secondary" aria-hidden="true"></span>
                    En Flexibilité
                  </li>
                  <li>
                    <span className="fa fa-check text-secondary" aria-hidden="true"></span>
                      Epargnez
                  </li>
                  <li>
                    <span className="fa fa-check text-secondary" aria-hidden="true"></span>
                    Faites du Profit
                  </li>
                  <li>
                    <span className="fa fa-check text-secondary" aria-hidden="true"></span>
                    Rapprocher votre Clientelle
                  </li>
                </ul>
                <a href="#services" className="btn btn-style btn-danger mt-4">
                  Décrouvrer Matterport
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w3l-bottom-grids py-5" id="steps">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="grids-area-hny main-cont-wthree-fea row">
            <div className="col-lg-4 col-md-6 grids-feature">
              <div className="area-box no-box-shadow">
                <span className="fa fa-home"></span>
                <h4>
                  <a href="#feature" className="title-head">
                    Offres d'Achat
                  </a>
                </h4>
                <p>
                  Voulez vous devenir propriétaire, consulter 
                  nos offres dans tous le <b className="text-danger"> Maroc </b>, visiter,
                  votre futurs propriété.
                </p>
                <a href="#more" className="more">
                  voir <span className="fa fa-long-arrow-right"></span>{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
              <div className="area-box no-box-shadow">
                <span className="fa fa-building-o"></span>
                <h4>
                  <a href="#feature" className="title-head">
                    Vous préférez Louez
                  </a>
                </h4>
                <p>
                  Trouvez un appartement dans les  <b className="text-danger">  millions d'offres </b> 
                  que nous avons et faites votre choix.
                </p>
                <a href="#more" className="more">
                  voir <span className="fa fa-long-arrow-right"></span>{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
              <div className="area-box no-box-shadow">
                <span className="fa fa-users"></span>
                <h4>
                  <a href="#feature" className="title-head">
                    Devenir Partenaire
                  </a>
                </h4>
                <p>
                 êtes vous prêt pour l'aventure, découvrer, comment 
                 nous réjoindre, <b className="text-danger">  Shooters </b> ou <b className="text-danger">  Annonceur </b>.                 
                </p>
                <a href="#more" className="more">
                  Voir <span className="fa fa-long-arrow-right"></span>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
