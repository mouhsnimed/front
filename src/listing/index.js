import React from "react";

import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import p7 from "../assets/images/p7.jpg";
import p8 from "../assets/images/p8.jpg";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import team4 from "../assets/images/team4.jpg";
import team5 from "../assets/images/team5.jpg";
import team6 from "../assets/images/team6.jpg";

const Listing = () => {
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
              Listing
            </li>
          </ul>
        </div>
      </section>
      <section class="locations-1" id="locations">
        <div class="locations py-5">
          <div class="container py-lg-5 py-md-4 py-2">
            <div class="row">
              <div class="col-lg-4 col-md-6 listing-img">
                <a href="#url">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p1} alt="" />
                    <div class="box-content">
                      <h3 class="title">$25,00,000</h3>
                    </div>
                  </div>
                </a>
                <div class="listing-details blog-details align-self">
                  <h4 class="user_title agent">
                    <a href="#url">Cottage villa</a>
                  </h4>
                  <p class="user_position">Unnamed Road, Vegas, NV 89103.</p>
                  <ul class="mt-3 estate-info">
                    <li>
                      <span class="fa fa-bed"></span> 1 Bed
                    </li>
                    <li>
                      <span class="fa fa-shower"></span> 2 Baths
                    </li>
                    <li>
                      <span class="fa fa-share-square-o"></span> 1760 Sqft
                    </li>
                  </ul>
                  <div class="author align-items-center mt-4">
                    <a href="#img" class="comment-img">
                      <img src={team1} alt="" class="img-fluid" />
                    </a>
                    <ul class="blog-meta">
                      <li>
                        <a href="#url">Laura Antiochus </a>
                      </li>
                      <li class="meta-item blog-lesson">
                        <span class="meta-value"> Selling agent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 listing-img mt-md-0 mt-5">
                <a href="#url">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p2} alt="" />
                    <div class="box-content">
                      <h3 class="title">$32,00,000</h3>
                    </div>
                  </div>
                </a>
                <div class="listing-details blog-details align-self">
                  <h4 class="user_title agent">
                    <a href="#url">Sand house</a>
                  </h4>
                  <p class="user_position">Unnamed Road, Vegas, NV 89103.</p>
                  <ul class="mt-3 estate-info">
                    <li>
                      <span class="fa fa-bed"></span> 1 Bed
                    </li>
                    <li>
                      <span class="fa fa-shower"></span> 2 Baths
                    </li>
                    <li>
                      <span class="fa fa-share-square-o"></span> 1760 Sqft
                    </li>
                  </ul>
                  <div class="author align-items-center mt-4">
                    <a href="#img" class="comment-img">
                      <img src={team2} alt="" class="img-fluid" />
                    </a>
                    <ul class="blog-meta">
                      <li>
                        <a href="#url">Laura Antiochus </a>
                      </li>
                      <li class="meta-item blog-lesson">
                        <span class="meta-value"> Selling agent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 listing-img mt-lg-0 pt-lg-0 mt-5 pt-md-2">
                <a href="#url">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p3} alt="" />
                    <div class="box-content">
                      <h3 class="title">$47,00,000</h3>
                    </div>
                  </div>
                </a>
                <div class="listing-details blog-details align-self">
                  <h4 class="user_title agent">
                    <a href="#url">Extension villa</a>
                  </h4>
                  <p class="user_position">Unnamed Road, Vegas, NV 89103.</p>
                  <ul class="mt-3 estate-info">
                    <li>
                      <span class="fa fa-bed"></span> 1 Bed
                    </li>
                    <li>
                      <span class="fa fa-shower"></span> 2 Baths
                    </li>
                    <li>
                      <span class="fa fa-share-square-o"></span> 1760 Sqft
                    </li>
                  </ul>
                  <div class="author align-items-center mt-4">
                    <a href="#img" class="comment-img">
                      <img src={team3} alt="" class="img-fluid" />
                    </a>
                    <ul class="blog-meta">
                      <li>
                        <a href="#url">Laura Antiochus </a>
                      </li>
                      <li class="meta-item blog-lesson">
                        <span class="meta-value"> Selling agent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 listing-img mt-5 pt-md-2">
                <a href="#url">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p4} alt="" />
                    <div class="box-content">
                      <h3 class="title">$19,00,000</h3>
                    </div>
                  </div>
                </a>
                <div class="listing-details blog-details align-self">
                  <h4 class="user_title agent">
                    <a href="#url">Corner house</a>
                  </h4>
                  <p class="user_position">Unnamed Road, Vegas, NV 89103.</p>
                  <ul class="mt-3 estate-info">
                    <li>
                      <span class="fa fa-bed"></span> 1 Bed
                    </li>
                    <li>
                      <span class="fa fa-shower"></span> 2 Baths
                    </li>
                    <li>
                      <span class="fa fa-share-square-o"></span> 1760 Sqft
                    </li>
                  </ul>
                  <div class="author align-items-center mt-4">
                    <a href="#img" class="comment-img">
                      <img src={team4} alt="" class="img-fluid" />
                    </a>
                    <ul class="blog-meta">
                      <li>
                        <a href="#url">Laura Antiochus </a>
                      </li>
                      <li class="meta-item blog-lesson">
                        <span class="meta-value"> Selling agent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 listing-img mt-5 pt-md-2">
                <a href="#url">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p5} alt="" />
                    <div class="box-content">
                      <h3 class="title">$34,00,000</h3>
                    </div>
                  </div>
                </a>
                <div class="listing-details blog-details align-self">
                  <h4 class="user_title agent">
                    <a href="#url">Beach House</a>
                  </h4>
                  <p class="user_position">Unnamed Road, Vegas, NV 89103.</p>
                  <ul class="mt-3 estate-info">
                    <li>
                      <span class="fa fa-bed"></span> 1 Bed
                    </li>
                    <li>
                      <span class="fa fa-shower"></span> 2 Baths
                    </li>
                    <li>
                      <span class="fa fa-share-square-o"></span> 1760 Sqft
                    </li>
                  </ul>
                  <div class="author align-items-center mt-4">
                    <a href="#img" class="comment-img">
                      <img src={team5} alt="" class="img-fluid" />
                    </a>
                    <ul class="blog-meta">
                      <li>
                        <a href="#url">Laura Antiochus </a>
                      </li>
                      <li class="meta-item blog-lesson">
                        <span class="meta-value"> Selling agent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 listing-img mt-5 pt-md-2">
                <a href="#url">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p6} alt="" />
                    <div class="box-content">
                      <h3 class="title">$29,00,000</h3>
                    </div>
                  </div>
                </a>
                <div class="listing-details blog-details align-self">
                  <h4 class="user_title agent">
                    <a href="#url">Cottage villa</a>
                  </h4>
                  <p class="user_position">Unnamed Road, Vegas, NV 89103.</p>
                  <ul class="mt-3 estate-info">
                    <li>
                      <span class="fa fa-bed"></span> 1 Bed
                    </li>
                    <li>
                      <span class="fa fa-shower"></span> 2 Baths
                    </li>
                    <li>
                      <span class="fa fa-share-square-o"></span> 1760 Sqft
                    </li>
                  </ul>
                  <div class="author align-items-center mt-4">
                    <a href="#img" class="comment-img">
                      <img src={team6} alt="" class="img-fluid" />
                    </a>
                    <ul class="blog-meta">
                      <li>
                        <a href="#url">Laura Antiochus </a>
                      </li>
                      <li class="meta-item blog-lesson">
                        <span class="meta-value"> Selling agent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 listing-img mt-5 pt-md-2">
                <a href="#url">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p7} alt="" />
                    <div class="box-content">
                      <h3 class="title">$38,00,000</h3>
                    </div>
                  </div>
                </a>
                <div class="listing-details blog-details align-self">
                  <h4 class="user_title agent">
                    <a href="#url">Beach House</a>
                  </h4>
                  <p class="user_position">Unnamed Road, Vegas, NV 89103.</p>
                  <ul class="mt-3 estate-info">
                    <li>
                      <span class="fa fa-bed"></span> 1 Bed
                    </li>
                    <li>
                      <span class="fa fa-shower"></span> 2 Baths
                    </li>
                    <li>
                      <span class="fa fa-share-square-o"></span> 1760 Sqft
                    </li>
                  </ul>
                  <div class="author align-items-center mt-4">
                    <a href="#img" class="comment-img">
                      <img src={team1} alt="" class="img-fluid" />
                    </a>
                    <ul class="blog-meta">
                      <li>
                        <a href="#url">Laura Antiochus </a>
                      </li>
                      <li class="meta-item blog-lesson">
                        <span class="meta-value"> Selling agent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 listing-img mt-5 pt-md-2">
                <a href="#url">
                  <div class="box16">
                    <div class="rentext-listing-category">
                      <span>Buy</span>
                      <span>Rent</span>
                    </div>
                    <img class="img-fluid" src={p8} alt="" />
                    <div class="box-content">
                      <h3 class="title">$51,00,000</h3>
                    </div>
                  </div>
                </a>
                <div class="listing-details blog-details align-self">
                  <h4 class="user_title agent">
                    <a href="#url">Cottage villa</a>
                  </h4>
                  <p class="user_position">Unnamed Road, Vegas, NV 89103.</p>
                  <ul class="mt-3 estate-info">
                    <li>
                      <span class="fa fa-bed"></span> 1 Bed
                    </li>
                    <li>
                      <span class="fa fa-shower"></span> 2 Baths
                    </li>
                    <li>
                      <span class="fa fa-share-square-o"></span> 1760 Sqft
                    </li>
                  </ul>
                  <div class="author align-items-center mt-4">
                    <a href="#img" class="comment-img">
                      <img src={team2} alt="" class="img-fluid" />
                    </a>
                    <ul class="blog-meta">
                      <li>
                        <a href="#url">Laura Antiochus </a>
                      </li>
                      <li class="meta-item blog-lesson">
                        <span class="meta-value"> Selling agent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="pagination-wrapper mt-5 pt-lg-3 text-center">
              <ul class="page-pagination">
                <li>
                  <span aria-current="page" class="page-numbers current">
                    1
                  </span>
                </li>
                <li>
                  <a class="page-numbers" href="#url">
                    2
                  </a>
                </li>
                <li>
                  <a class="page-numbers" href="#url">
                    3
                  </a>
                </li>
                <li>
                  <a class="page-numbers" href="#url">
                    ...
                  </a>
                </li>
                <li>
                  <a class="page-numbers" href="#url">
                    15
                  </a>
                </li>
                <li>
                  <a class="next" href="#url">
                    Next <span class="fa fa-angle-right"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;
