import React from "react";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import p7 from "../assets/images/p7.jpg";
import p8 from "../assets/images/p8.jpg";

const PopularLocation = () => {
  return (
    <section className="locations-1 popular" id="locations">
      <div className="locations py-5">
        <div className="container py-lg-5 py-md-4">
          <div className="heading text-center mx-auto">
            <h6 className="title-small">Explore cities</h6>
            <h3 className="title-big">Popular Locations</h3>
          </div>
          <div className="row pt-5">
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#url">
                <div className="box16">
                  <img className="img-fluid" src={p1} alt="" />
                  <div className="box-content">
                    <h3 className="title mb-1">Newyork</h3>
                    <span className="post">4 listings</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#url">
                <div className="box16">
                  <img className="img-fluid" src={p2} alt="" />
                  <div className="box-content">
                    <h3 className="title mb-1">California</h3>
                    <span className="post">4 listings</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-md-0 pt-md-0 mt-sm-4 mt-3 pt-md-2">
              <a href="#url">
                <div className="box16">
                  <img className="img-fluid" src={p3} alt="" />
                  <div className="box-content">
                    <h3 className="title mb-1">Las vegas</h3>
                    <span className="post">4 listings</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-lg-0 pt-lg-0 mt-sm-4 mt-3 pt-md-2">
              <a href="#url">
                <div className="box16">
                  <img className="img-fluid" src={p4} alt="" />
                  <div className="box-content">
                    <h3 className="title mb-1">Malaysia</h3>
                    <span className="post">4 listings</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-sm-4 mt-3 pt-md-2">
              <a href="#url">
                <div className="box16">
                  <img className="img-fluid" src={p5} alt="" />
                  <div className="box-content">
                    <h3 className="title mb-1">Paris</h3>
                    <span className="post">4 listings</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-sm-4 mt-3 pt-md-2">
              <a href="#url">
                <div className="box16">
                  <img className="img-fluid" src={p6} alt="" />
                  <div className="box-content">
                    <h3 className="title mb-1">New Jersy</h3>
                    <span className="post">4 listings</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-sm-4 mt-3 pt-md-2">
              <a href="#url">
                <div className="box16">
                  <img className="img-fluid" src={p7} alt="" />
                  <div className="box-content">
                    <h3 className="title mb-1">France</h3>
                    <span className="post">4 listings</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mt-sm-4 mt-3 pt-md-2">
              <a href="#url">
                <div className="box16">
                  <img className="img-fluid" src={p8} alt="" />
                  <div className="box-content">
                    <h3 className="title mb-1">Newyork</h3>
                    <span className="post">4 listings</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularLocation;
