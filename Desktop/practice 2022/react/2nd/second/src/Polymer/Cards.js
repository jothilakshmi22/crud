import React from "react";
import "./polymer.css";
const Cards = () => {
  return (
    <div>
      <div className="card-footer ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-lg-0 my-5 ms-1  ">
              <div className="cards">
                <div className="msg">
                  <p className="fw-bold">
                    You can literally ask any question about a dataset and get
                    an answer. I think the world's been waiting for this for a
                    long time.
                  </p>
                </div>
                <div className="d-flex mt-4">
                  <img
                    src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/614de1cbc2f5380db322746b_Erik%20Fogg.jpg"
                    alt=""
                    width="60px"
                    style={{ borderRadius: "50%", marginRight: "10px" }}
                  />

                  <span>
                    Erik Fogg <br /> Co-founder @ ProdPerfect
                  </span>
                  <span className="twitter ms-4 pt-3 fs-3">
                    <i class="fa-brands fa-twitter"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 m-lg-0 my-5 ms-1">
              <div className="cards">
                <div className="msg">
                  <p className="fw-bold">
                    Using Polymer's insight automation, we were able to quickly
                    identify our top-performing demographics and increase our ad
                    conversions by 19% within days.
                  </p>
                </div>
                <div className="d-flex mt-4">
                  <img
                    src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/614de1cb7bf7b33339be9635_Craig%20Belcher.jpg"
                    alt=""
                    width="60px"
                    style={{ borderRadius: "50%", marginRight: "10px" }}
                  />

                  <span>
                    Craig Belcher <br />
                    Founder @ YourPPCpro
                  </span>
                  <span className="twitter ms-4 pt-3 fs-3">
                    <i class="fa-brands fa-twitter"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 m-lg-0 my-5 ms-1">
              <div className="cards">
                <div className="msg">
                  <p className="fw-bold">
                    Polymer made it super easy to create a searchable archive of
                    the Data Elixir newsletter. Polymer changes the game on the
                    whole.
                  </p>
                </div>
                <div className="d-flex mt-4">
                  <img
                    src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/614de1cbdb6b85247cd415f7_Lon%20Riesberg.jpg"
                    alt=""
                    width="60px"
                    style={{ borderRadius: "50%", marginRight: "10px" }}
                  />

                  <span>
                    Lon Riesberg <br />
                    Founder @ Data Elixir
                  </span>
                  <span className="twitter ms-4 pt-3 fs-3">
                    <i class="fa-brands fa-twitter"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
