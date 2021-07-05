import React from "react";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import l5 from "../assets/images/l5.jpg";
import l1 from "../assets/images/l1.jpg";
import l2 from "../assets/images/l2.jpg";
import l3 from "../assets/images/l3.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Details = () => {
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
              Property
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              property single
            </li>
          </ul>
        </div>
      </section>

      <section className="w3l-blog post-content py-5">
        <div className="container py-lg-4 py-md-3 py-2">
          <div className="inner mb-4">
            <ul className="blog-single-author-date align-items-center">
              <li>
                <div className="listing-category">
                  <span>Buy</span>
                  <span>Rent</span>
                </div>
              </li>
              <li>
                <span className="fa fa-clock-o"></span> 5 months ago
              </li>
              <li>
                <span className="fa fa-eye"></span> 250 views
              </li>
            </ul>
          </div>
          <div className="post-content">
            <h2 className="title-single">
              {" "}
              A digital prescription for the pharma industry
            </h2>
          </div>
          <div className="blo-singl mb-4">
            <ul className="blog-single-author-date align-items-center">
              <li>
                <p>Unnamed road, San Francisco, CA 94102</p>
              </li>
              <li>
                <span className="fa fa-bed"></span> 3 Beds
              </li>
              <li>
                <span className="fa fa-bath"></span> 4 Baths
              </li>
              <li>
                <span className="fa fa-share-square-o"></span> 1258 sqrft
              </li>
            </ul>
            <ul className="share-post">
              <a href="#url" className="cost-estate m-o">
                $25,0045
              </a>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-8 w3l-news">
              <Carousel>
                <div className="item">
                  <div className="card">
                    <img
                      src={p1}
                      className="img-fluid radius-image"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="card">
                    <img
                      src={p2}
                      className="img-fluid radius-image"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="card">
                    <img
                      src={p3}
                      className="img-fluid radius-image"
                      alt="image"
                    />
                  </div>
                </div>
              </Carousel>

              <div className="blog-single-post">
                <div className="single-post-content">
                  <h3 className="post-content-title mb-3">Description</h3>
                  <p className="mb-4">
                    Lorem model text, and a search for 'lorem ipsum' will
                    uncover many web sites still in their infancy. Various
                    versions have evolved over the years, sometimes by accident,
                    sometimes on purpose injected humour and the like.{" "}
                  </p>
                  <p className="mb-4">
                    When you decide to put your business online it is a little
                    bet tricky step for novice computer users because they want
                    to keep data safe & secure. This problem developed from
                    companies which did not take security seriously. Lorem ipsum
                    dolor sit amet elit.{" "}
                  </p>
                  <div className="single-bg-white">
                    <h3 className="post-content-title mb-4">Property detail</h3>
                    <ul className="details-list">
                      <li>
                        <strong>Property id :</strong> PRPT12345{" "}
                      </li>
                      <li>
                        <strong>Property size :</strong> 1200sqft{" "}
                      </li>
                      <li>
                        <strong>Rooms :</strong> 2{" "}
                      </li>
                      <li>
                        <strong>Bedrooms :</strong> 5{" "}
                      </li>
                      <li>
                        <strong>Bathrooms :</strong> 2{" "}
                      </li>
                      <li>
                        <strong>Exterior material :</strong> Brick{" "}
                      </li>
                      <li>
                        <strong>Structure type :</strong> Wood{" "}
                      </li>
                      <li>
                        <strong>Garage size :</strong> 15 cars{" "}
                      </li>
                      <li>
                        <strong>Garages :</strong> 15{" "}
                      </li>
                      <li>
                        <strong>Property Price :</strong> $ 750{" "}
                      </li>
                      <li>
                        <strong>Built Year :</strong> 2018{" "}
                      </li>
                      <li>
                        <strong>Avaiable from :</strong> Aug 2019{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="single-bg-white">
                    <h3 className="post-content-title mb-4">Amenities</h3>
                    <ul className="details-list">
                      <li>
                        <strong>Air Conditioning </strong>
                      </li>
                      <li>
                        <strong>Buil-In Wardrobes </strong>{" "}
                      </li>
                      <li>
                        <strong>Dishwasher</strong>{" "}
                      </li>
                      <li>
                        <strong>Floor Coverings </strong>{" "}
                      </li>
                      <li>
                        <strong>Medical / Clinic </strong>{" "}
                      </li>
                      <li>
                        <strong>Fencing</strong>{" "}
                      </li>
                      <li>
                        <strong>Internet and wifi </strong>{" "}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="single-bg-white">
                  <h3 className="post-content-title mb-4">Location</h3>
                  <div className="agent-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                      frameborder="0"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>

                <div className="single-bg-white mb-0">
                  <h3 className="post-content-title mb-4">Video</h3>
                  <div className="post-content">
                    <iframe
                      src="https://www.youtube.com/embed/jqP3m3ElcxA"
                      frameborder="0"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12 mt-lg-0 mt-5">
              <aside className="sidebar">
                <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title">
                    <h4>Contact an Agent</h4>
                  </div>

                  <article className="post">
                    <figure className="post-thumb">
                      <img src={l5} className="radius-image" alt="" />
                    </figure>
                    <div className="text mb-0">
                      <a href="#blog-single">Company realty</a>
                      <div className="post-info">+(12) 324 567 89</div>
                      <div className="post-info">companyrealty@mail.com</div>
                    </div>
                  </article>
                  <button
                    type="submit"
                    className="btn btn-primary btn-style w-100"
                  >
                    Request details
                  </button>
                </div>

                <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title">
                    <h4>Popular Post</h4>
                  </div>

                  <article className="post">
                    <figure className="post-thumb">
                      <img src={l1} className="radius-image" alt="" />
                    </figure>
                    <div className="text">
                      <a href="#blog-single">
                        Why we are the best in the business
                      </a>
                      <div className="post-info">Sep 09, 2020 - 2 comments</div>
                    </div>
                  </article>

                  <article className="post">
                    <figure className="post-thumb">
                      <img src={l2} className="radius-image" alt="" />
                    </figure>
                    <div className="text">
                      <a href="#blog-single">Build your next landing page.</a>
                      <div className="post-info">Sep 09, 2020 - 2 comments</div>
                    </div>
                  </article>

                  <article className="post">
                    <figure className="post-thumb">
                      <img src={l3} className="radius-image" alt="" />
                    </figure>
                    <div className="text">
                      <a href="#blog-single">
                        Simply the best. Better than the rest.
                      </a>
                      <div className="post-info">Sep 10, 2020 - 2 comments</div>
                    </div>
                  </article>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
