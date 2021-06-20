import React from "react";
import about from "../assets/images/about.jpg";

function About() {
  return (
    <div>
      <section class="w3l-about-breadcrumb">
        <div class="breadcrumb-bg breadcrumb-bg-about pt-5">
          <div class="container pt-lg-5 py-3"></div>
        </div>
      </section>
      <section class="w3l-breadcrumb">
        <div class="container">
          <ul class="breadcrumbs-custom-path">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="active">
              <span class="fa fa-angle-right mx-2" aria-hidden="true"></span>{" "}
              Pages
            </li>
            <li class="active">
              <span class="fa fa-angle-right mx-2" aria-hidden="true"></span>{" "}
              About Us
            </li>
          </ul>
        </div>
      </section>

      <section class="w3l-index3" id="about">
        <div class="midd-w3 py-5">
          <div class="container py-lg-5 py-md-4 py-2">
            <div class="row">
              <div class="col-lg-5 pr-lg-0">
                <div class="w3l-left-img2"></div>
              </div>
              <div class="col-lg-7 pl-lg-0">
                <div class="w3l-right-info">
                  <h6 class="title-small">About us</h6>
                  <h3 class="title-big">Our long-standing experience</h3>
                  <h5 class="mt-4">
                    We have over 15 year experience, Over 20,000 people work for
                    us in more than 70 countries all over the world. Lorem ipsum
                    viverra feugiat dolor sit amet.
                  </h5>
                  <p class="mt-4">
                    Viverra feugiat. Pellen tesque libero ut justo, ultrices in
                    ligula. Semper at tempufddfel lorem ipsum. Lorem ipsum
                    viverra feugiat dolor sit amet primis in faucibus orci.
                  </p>
                  <a
                    href="#small-dialog1"
                    class="popup-with-zoom-anim play-view d-block mt-md-5 mt-4"
                  >
                    <span class="video-play-icon">
                      <span class="fa fa-play"></span>
                    </span>
                    See Our Story
                  </a>

                  <div id="small-dialog1" class="zoom-anim-dialog mfp-hide">
                    <iframe
                      src="https://www.youtube.com/embed/jqP3m3ElcxA"
                      frameborder="0"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="grids-area-hny main-cont-wthree-fea row mt-5 pt-lg-5 pt-5">
              <div class="col-lg-4 col-md-6 grids-feature">
                <div class="area-box">
                  <span class="fa fa-home"></span>
                  <h4>
                    <a href="#feature" class="title-head">
                      Guidance you need
                    </a>
                  </h4>
                  <p>
                    Vivamus a ligula quam tesque et libero ut justo, ultrices
                    in. Ut eu leo non. Duis sed et dolor amet.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                <div class="area-box">
                  <span class="fa fa-search-plus"></span>
                  <h4>
                    <a href="#feature" class="title-head">
                      Search that feels familiar
                    </a>
                  </h4>
                  <p>
                    Vivamus a ligula quam tesque et libero ut justo, ultrices
                    in. Ut eu leo non. Duis sed dolor et amet.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                <div class="area-box">
                  <span class="fa fa-dollar"></span>
                  <h4>
                    <a href="#feature" class="title-head">
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
        <section class="w3l-aboutblock2" id="why">
          <div class="midd-w3 py-5">
            <div class="container py-lg-5 py-md-4 py-2">
              <div class="row">
                <div class="col-lg-6 left-wthree-img">
                  <img src={about} alt="" class="img-fluid radius-image" />
                </div>
                <div class="col-lg-6 mt-lg-0 mt-5 align-self">
                  <h6 class="title-small">Why us</h6>
                  <h3 class="title-big">
                    To help members become more profitable and successful
                  </h3>
                  <p class="mt-4">
                    We have over 15 year experience in business consulting
                    arena. Learn more about our work! Lorem ipsum viverra
                    feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                    Semper at tempufddfel
                  </p>
                  <ul class="w3l-right-book mt-lg-5 mt-4">
                    <li>
                      <span class="fa fa-check" aria-hidden="true"></span>Help
                      sellers get the most for their properties
                    </li>
                    <li>
                      <span class="fa fa-check" aria-hidden="true"></span>Help
                      sellers price their properties fairly
                    </li>
                    <li>
                      <span class="fa fa-check" aria-hidden="true"></span>Help
                      buyers find the property that fits their needs
                    </li>
                    <li>
                      <span class="fa fa-check" aria-hidden="true"></span>Avoid
                      over paying by strategically negotiating purchase
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