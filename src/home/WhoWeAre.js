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
                <h6 className="title-small">Who we are</h6>
                <h3 className="title-big">
                  The experts in local and international property
                </h3>
                <p className="mt-4">
                  We have over 15 year experience, Over 20,000 people work for
                  us in more than 70 countries all over the world. Learn more
                  about our work! Lorem ipsum vive dolor sit amet.
                </p>
                <p className="mt-3">
                  Viverra feugiat. Pellen tesque libero ut justo, ultrices in
                  ligula. Semper at tempufddfel lorem ipsum.
                </p>
                <ul className="w3l-right-book w3l-right-book-grid mt-md-5 mt-4">
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Outstanding property
                  </li>
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Social responsibility
                  </li>
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>Get
                    expert advice
                  </li>
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Group structure
                  </li>
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Specialist services
                  </li>
                  <li>
                    <span className="fa fa-check" aria-hidden="true"></span>
                    Vision & strategy
                  </li>
                </ul>
                <a href="#services" className="btn btn-style btn-primary mt-4">
                  Discover our services
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
                    Buy a home
                  </a>
                </h4>
                <p>
                  Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor
                  amet ipsum primis in faucibus orci.
                </p>
                <a href="#more" className="more">
                  Read More <span className="fa fa-long-arrow-right"></span>{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
              <div className="area-box no-box-shadow">
                <span className="fa fa-home"></span>
                <h4>
                  <a href="#feature" className="title-head">
                    Rent a home{" "}
                  </a>
                </h4>
                <p>
                  Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor
                  amet ipsum primis in faucibus orci.
                </p>
                <a href="#more" className="more">
                  Read More <span className="fa fa-long-arrow-right"></span>{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
              <div className="area-box no-box-shadow">
                <span className="fa fa-building-o"></span>
                <h4>
                  <a href="#feature" className="title-head">
                    See neighbourhoods
                  </a>
                </h4>
                <p>
                  Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor
                  amet ipsum primis in faucibus orci.
                </p>
                <a href="#more" className="more">
                  Read More <span className="fa fa-long-arrow-right"></span>{" "}
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
