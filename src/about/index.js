import React from "react";
import about from "../assets/images/about.jpg";

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
              <a href="index.html">Home</a>
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              Pages
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              About Us
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
                  <h6 className="title-small">About us</h6>
                  <h3 className="title-big">Our long-standing experience</h3>
                  <h5 className="mt-4">
                    We have over 15 year experience, Over 20,000 people work for
                    us in more than 70 countries all over the world. Lorem ipsum
                    viverra feugiat dolor sit amet.
                  </h5>
                  <p className="mt-4">
                    Viverra feugiat. Pellen tesque libero ut justo, ultrices in
                    ligula. Semper at tempufddfel lorem ipsum. Lorem ipsum
                    viverra feugiat dolor sit amet primis in faucibus orci.
                  </p>
                  <a
                    href="#small-dialog1"
                    className="popup-with-zoom-anim play-view d-block mt-md-5 mt-4"
                  >
                    <span className="video-play-icon">
                      <span className="fa fa-play"></span>
                    </span>
                    See Our Story
                  </a>

                  <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                    <iframe
                      src="https://www.youtube.com/embed/jqP3m3ElcxA"
                      frameborder="0"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="grids-area-hny main-cont-wthree-fea row mt-5 pt-lg-5 pt-5">
              <div className="col-lg-4 col-md-6 grids-feature">
                <div className="area-box">
                  <span className="fa fa-home"></span>
                  <h4>
                    <a href="#feature" className="title-head">
                      Guidance you need
                    </a>
                  </h4>
                  <p>
                    Vivamus a ligula quam tesque et libero ut justo, ultrices
                    in. Ut eu leo non. Duis sed et dolor amet.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                <div className="area-box">
                  <span className="fa fa-search-plus"></span>
                  <h4>
                    <a href="#feature" className="title-head">
                      Search that feels familiar
                    </a>
                  </h4>
                  <p>
                    Vivamus a ligula quam tesque et libero ut justo, ultrices
                    in. Ut eu leo non. Duis sed dolor et amet.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                <div className="area-box">
                  <span className="fa fa-dollar"></span>
                  <h4>
                    <a href="#feature" className="title-head">
                      Premium values
                    </a>
                  </h4>
                  <p>
                    Vivamus a ligula quam tesque et libero ut justo, ultrices
                    in. Ut eu leo non. Duis sed dolor et amet.
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
                  <img src={about} alt="" className="img-fluid radius-image" />
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5 align-self">
                  <h6 className="title-small">Why us</h6>
                  <h3 className="title-big">
                    To help members become more profitable and successful
                  </h3>
                  <p className="mt-4">
                    We have over 15 year experience in business consulting
                    arena. Learn more about our work! Lorem ipsum viverra
                    feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                    Semper at tempufddfel
                  </p>
                  <ul className="w3l-right-book mt-lg-5 mt-4">
                    <li>
                      <span className="fa fa-check" aria-hidden="true"></span>
                      Help sellers get the most for their properties
                    </li>
                    <li>
                      <span className="fa fa-check" aria-hidden="true"></span>
                      Help sellers price their properties fairly
                    </li>
                    <li>
                      <span className="fa fa-check" aria-hidden="true"></span>
                      Help buyers find the property that fits their needs
                    </li>
                    <li>
                      <span className="fa fa-check" aria-hidden="true"></span>
                      Avoid over paying by strategically negotiating purchase
                    </li>
                  </ul>
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
