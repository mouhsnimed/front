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
      <section class="w3l-cover-3">
        <div class="cover top-bottom">
          <div class="container">
            <div class="middle-section text-center">
              <div class="section-width">
                <p>It's great to be home!</p>
                <h2>Find a property today</h2>
                <div class="most-searches">
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
                <form action="#" class="w3l-cover-3-gd" method="GET">
                  <input
                    type="search"
                    name="text"
                    placeholder="Enter keywords"
                    required
                  />
                  <span class="input-group-btn">
                    <select class="btn btn-default" name="ext" required>
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
                  <span class="input-group-btn">
                    <select class="btn btn-default" name="ext" required>
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
                  <button type="submit" class="btn-primary">
                    Search
                  </button>
                </form>
              </div>
              <section id="bottom" class="demo">
                <a href="#bottom">
                  <span></span>Scroll
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section class="locations-1" id="locations">
        <div class="locations py-5">
          <div class="container py-lg-5 py-md-4 py-2">
            <div class="heading text-center mx-auto">
              <h3 class="title-big">Top Properties</h3>
            </div>
            <div class="row pt-md-5 pt-4">
              <div class="col-lg-4 col-md-6">
                <a href="property-single.html">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p1} alt="" />
                    <div class="box-content">
                      <h3 class="title">$25,00,000</h3>
                      <span class="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                <a href="property-single.html">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p2} alt="" />
                    <div class="box-content">
                      <h3 class="title">$37,00,000</h3>
                      <span class="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-md-6 mt-lg-0 pt-lg-0 mt-4 pt-md-2">
                <a href="property-single.html">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p3} alt="" />
                    <div class="box-content">
                      <h3 class="title">$41,00,000</h3>
                      <span class="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-md-6 mt-4 pt-md-2">
                <a href="property-single.html">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p4} alt="" />
                    <div class="box-content">
                      <h3 class="title">$19,00,000</h3>
                      <span class="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-md-6 mt-4 pt-md-2">
                <a href="property-single.html">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p5} alt="" />
                    <div class="box-content">
                      <h3 class="title">$26,00,000</h3>
                      <span class="post">
                        51 Merrick Way, Coral Gables, USA
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-md-6 mt-4 pt-md-2">
                <a href="property-single.html">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p6} alt="" />
                    <div class="box-content">
                      <h3 class="title">$34,00,000</h3>
                      <span class="post">
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
      <section class="w3l-index3" id="about">
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