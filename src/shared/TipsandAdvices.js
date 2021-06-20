import React from "react";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";

const TipsandAdvices = () => {
  return (
    <div class="w3l-news" id="news">
      <section id="grids5-block" class="py-5">
        <div class="container py-lg-5 py-md-4 py-2">
          <h3 class="title-big text-center">Tips and Advices</h3>
          <div class="row mt-lg-5 mt-4 pt-3">
            <div class="col-lg-4 col-md-6 mt-md-0 mt-sm-4">
              <div class="grids5-info">
                <span class="posted-date">
                  <a href="#blog-single">
                    <span class="small">2020</span>
                    <span class="big">16</span>
                    <span class="small">October</span>
                  </a>
                </span>
                <a href="#blog-single" class="d-block zoom">
                  <img src={p1} alt="" class="img-fluid news-image" />
                </a>
                <div class="blog-info">
                  <a href="#category" class="category">
                    Uncategorized
                  </a>
                  <h4>
                    <a href="#blog-single">
                      Retail banks wake up to digital lending this year
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas
                    earum!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
              <div class="grids5-info">
                <span class="posted-date">
                  <a href="#blog-single">
                    <span class="small">2020</span>
                    <span class="big">19</span>
                    <span class="small">October</span>
                  </a>
                </span>
                <a href="#blog-single" class="d-block zoom">
                  <img src={p2} alt="" class="img-fluid news-image" />
                </a>
                <div class="blog-info">
                  <a href="#category" class="category">
                    Uncategorized
                  </a>
                  <h4>
                    <a href="#blog-single">
                      A digital prescription for the pharma industry
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas
                    earum!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-lg-0 mt-5">
              <div class="grids5-info">
                <span class="posted-date">
                  <a href="#blog-single">
                    <span class="small">2020</span>
                    <span class="big">20</span>
                    <span class="small">October</span>
                  </a>
                </span>
                <a href="#blog-single" class="d-block zoom">
                  <img src={p3} alt="" class="img-fluid news-image" />
                </a>
                <div class="blog-info">
                  <a href="#category" class="category">
                    Uncategorized
                  </a>
                  <h4>
                    <a href="#blog-single">
                      Harvest great ideas from your company’s best assets
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas
                    earum!
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