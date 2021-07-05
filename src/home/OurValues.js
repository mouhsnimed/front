import React from "react";

const OurValues = () => {
  return (
    <section className="w3l-bottom-grids py-5" id="steps">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="grids-area-hny main-cont-wthree-fea row">
          <div className="col-lg-4 col-md-6 grids-feature">
            <div className="area-box no-box-shadow text-left">
              <span className="fa fa-search-plus"></span>
              <h5>All in one place</h5>
              <h4>
                <a href="#feature" className="title-head">
                  Your One-Stop Shop for Finding Your Dream Home
                </a>
              </h4>
              <p>
                Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor in
                orci.
              </p>
              <a href="#more" className="more">
                Search for home<span className="fa fa-long-arrow-right"></span>{" "}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
            <div className="area-box no-box-shadow text-left">
              <span className="fa fa-user-o"></span>
              <h5>Connect to an agent</h5>
              <h4>
                <a href="#feature" className="title-head">
                  Schedule a Free, No-Obligation Appointment
                </a>
              </h4>
              <p>
                Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor in
                orci.
              </p>
              <a href="#more" className="more">
                Find an agent <span className="fa fa-long-arrow-right"></span>{" "}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
            <div className="area-box no-box-shadow text-left">
              <span className="fa fa-home"></span>
              <h5>Get a home valuation</h5>
              <h4>
                <a href="#feature" className="title-head">
                  Understand the Value of Your Property{" "}
                </a>
              </h4>
              <p>
                Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor in
                orci.
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
