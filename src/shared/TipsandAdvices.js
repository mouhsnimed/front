import React from "react";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";


import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team4 from "../assets/images/team4.jpg";

const TipsandAdvices = () => {
  return (
    <div className="w3l-news" id="news">
      <section id="grids5-block" className="py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <h3 className="title-big text-center">Nos <b className="text-danger">  meilleurs profiles </b> pour vos convertures</h3>
          <div className="row mt-lg-5 mt-4 pt-3">
            <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4">
              <div className="grids5-info">
                <span className="posted-date">
                  <a href="#blog-single">
                    <span className="small">Prestation</span>
                    <span className="big text-primary">200</span>
                    <span className="small">MAD</span>
                  </a>
                </span>
                <a href="#blog-single" className="d-block zoom">
                  <img src={team4} alt="" className="img-fluid news-image" />
                </a>
                <div className="blog-info">
                  <a href="#category" className="category">
                    consulter le profile
                  </a>
                  <h4>
                    <a href="#blog-single">
                      Other Name
                    </a>
                  </h4>
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
              <div className="grids5-info">
                <span className="posted-date">
                  <a href="#blog-single">
                    <span className="small">Prestation</span>
                    <span className="big text-primary">150</span>
                    <span className="small">MAD</span>
                  </a>
                </span>
                <a href="#blog-single" className="d-block zoom">
                  <img src={team1} alt="" className="img-fluid news-image" />
                </a>
                <div className="blog-info">
                  <a href="#category" className="category">
                    consulter le profile
                  </a>
                  <h4>
                    <a href="#blog-single">
                      Someone else Name
                    </a>
                  </h4>
                  <p>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
              <div className="grids5-info">
                <span className="posted-date">
                  <a href="#blog-single">
                    <span className="small">Prestation</span>
                    <span className="big text-primary">120</span>
                    <span className="small">MAD</span>
                  </a>
                </span>
                <a href="#blog-single" className="d-block zoom">
                  <img src={team2} alt="" className="img-fluid news-image" />
                </a>
                <div className="blog-info">
                  <a href="#category" className="category">
                    consulter le profile
                  </a>
                  <h4>
                    <a href="#blog-single">
                      Someone Name
                    </a>
                  </h4>
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TipsandAdvices;
