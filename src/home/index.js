import React from "react";
import Companies from "../shared/Companies";
import TipsandAdvices from "../shared/TipsandAdvices";
import OurValues from "./OurValues";
import WhoWeAre from "./WhoWeAre";
import PopularLocation from "./PopularLocation";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";

function Home() {
  return (
    <div>
      <section className="w3l-cover-3">
        <div className="cover top-bottom">
          <div className="container">
            <div className="middle-section text-center">
              <div className="section-width">
                <p>It's great to be home!</p>
                <h2>Find a property today</h2>
                <div className="most-searches">
                  <h4>Most Searches</h4>
                  <ul>
                    <li>
                      <a href="#link">Villa</a>
                    </li>
                    <li>
                      <a href="#link">Apartment</a>
                    </li>
                    <li>
                      <a href="#link">Private house</a>
                    </li>
                  </ul>
                </div>
                <form action="#" className="w3l-cover-3-gd" method="GET">
                  <input
                    type="search"
                    name="text"
                    placeholder="Enter keywords"
                    required
                  />
                  <span className="input-group-btn">
                    <select className="btn btn-default" name="ext" required>
                      <option selected="">Office</option>
                      <option>Villa</option>
                      <option>Apartment</option>
                      <option>Private house</option>
                      <option>Building</option>
                      <option>Shop</option>
                      <option>Social housing</option>
                      <option>Town house</option>
                    </select>
                  </span>
                  <span className="input-group-btn">
                    <select className="btn btn-default" name="ext" required>
                      <option selected="">Select Country</option>
                      <option>Australia</option>
                      <option>London</option>
                      <option>India</option>
                      <option>Bangladesh</option>
                      <option>Saudi Arabia</option>
                      <option>America</option>
                      <option>Srilanka</option>
                    </select>
                  </span>
                  <button type="submit" className="btn-primary">
                    Search
                  </button>
                </form>
              </div>
              <section id="bottom" className="demo">
                <a href="#bottom">
                  <span></span>Scroll
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
              <h3 className="title-big">Top Properties</h3>
            </div>
            <div className="row pt-md-5 pt-4">
              <div className="col-lg-4 col-md-6">
                <a href="property-single.html">
                  <div className="box16">
                    <div className="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img className="img-fluid" src={p1} alt="" />
                    <div className="box-content">
                      <h3 className="title">$25,00,000</h3>
                      <span className="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <a href="property-single.html">
                  <div className="box16">
                    <div className="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img className="img-fluid" src={p2} alt="" />
                    <div className="box-content">
                      <h3 className="title">$37,00,000</h3>
                      <span className="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 pt-lg-0 mt-4 pt-md-2">
                <a href="property-single.html">
                  <div className="box16">
                    <div className="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img className="img-fluid" src={p3} alt="" />
                    <div className="box-content">
                      <h3 className="title">$41,00,000</h3>
                      <span className="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                <a href="property-single.html">
                  <div className="box16">
                    <div className="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img className="img-fluid" src={p4} alt="" />
                    <div className="box-content">
                      <h3 className="title">$19,00,000</h3>
                      <span className="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                <a href="property-single.html">
                  <div className="box16">
                    <div className="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img className="img-fluid" src={p5} alt="" />
                    <div className="box-content">
                      <h3 className="title">$26,00,000</h3>
                      <span className="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                <a href="property-single.html">
                  <div className="box16">
                    <div className="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img className="img-fluid" src={p6} alt="" />
                    <div className="box-content">
                      <h3 className="title">$34,00,000</h3>
                      <span className="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
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
