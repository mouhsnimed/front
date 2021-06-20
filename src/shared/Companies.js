import React from "react";

import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";

const Companies = () => {
  return (
    <section class="w3l-companies-hny-6 py-5">
      <div class="container py-md-3">
        <div class="row">
          <div class="col-lg-2 col-md-4 col-6 column">
            <div class="company-gd">
              <a href="#client">
                <img class="img-responsive" src={client1} alt="client" />{" "}
              </a>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-6 column">
            <div class="company-gd">
              <a href="#client">
                <img class="img-responsive" src={client2} alt="client" />{" "}
              </a>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-6 column mt-md-0 mt-4">
            <div class="company-gd">
              <a href="#client">
                <img class="img-responsive" src={client3} alt="client" />{" "}
              </a>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-6 column mt-lg-0 mt-4">
            <div class="company-gd">
              <a href="#client">
                <img class="img-responsive" src={client4} alt="client" />{" "}
              </a>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-6 column mt-lg-0 mt-4">
            <div class="company-gd">
              <a href="#client">
                <img class="img-responsive" src={client5} alt="client" />{" "}
              </a>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-6 column mt-lg-0 mt-4">
            <div class="company-gd">
              <a href="#client">
                <img class="img-responsive" src={client6} alt="client" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
