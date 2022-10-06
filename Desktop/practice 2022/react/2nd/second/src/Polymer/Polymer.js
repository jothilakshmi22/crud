import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "./Footer";
import "./polymer.css";
import { Link } from "react-router-dom";

const Polymer = () => {
  return (
    <div>
      <div className="bg">
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-5 col-12 mt-5 pt-5">
              <h1 className="display-2 text-primary fw-bold text-gradient">
                BI without <br /> the BS
              </h1>
              <p className="text-white fw-bold fs-5">
                Polymer is Business Intelligence (BI) without the complicated
                setup and steep learning curves. Create visualizations, build
                dashboards, and present your data like a pro — in minutes.
              </p>
              <span className="text-muted me-4">
                <i class="fa fa-check"></i> 14-day free trial
              </span>
              <span className="text-muted">
                <i class="fa fa-check"></i> No credit card required
              </span>{" "}
              <br />
              <Link to="/login">
                <button className=" p-3 mt-4 text-dark fw-bold fs-5 yellow btn-hover rounded ">
                  Start for free
                </button>
              </Link>
            </div>
            <div className="col-lg-7 col-12 mx-auto mt-5 pt-5">
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/6332fbdee2690353e154df2e_hero-img-hp2-p-800.png"
                alt="graph"
                className="img-fluid"
              />
            </div>

            <div className="icons d-flex justify-content-around">
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f50d364caedd3b80965_logo-fb.svg"
                loading="lazy"
                id="w-node-_4add404c-7e23-806a-82f5-b2bae6b6a1b7-4bfb30fd"
                alt="logo"
                class=""
              ></img>
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f510908911ff0814390_ready%20set%20rocket.svg"
                loading="lazy"
                id="w-node-e4fea111-697f-2f69-2bc2-513bb2385d99-4bfb30fd"
                alt="logo"
                class="logo-hero-hp2"
              ></img>
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f50d7b61c47e8b59ce3_terminus.svg"
                loading="lazy"
                id="w-node-_5b5300f5-81df-45e1-6a17-1dac10182b6b-4bfb30fd"
                alt=""
                class="logo-hero-hp2"
              ></img>
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f5018c8cfec2aad7f32_spotify.svg"
                loading="lazy"
                id="w-node-fad99d35-d4f1-31f8-1dcb-be61b8dfe312-4bfb30fd"
                alt="logo"
                class="logo-hero-hp2"
              ></img>
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f50491cef63af736482_hp.svg"
                loading="lazy"
                id="w-node-dd822973-67d5-601f-a4d1-822259bf809b-4bfb30fd"
                alt="logo"
                class="logo-hero-hp2"
              ></img>
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f50129a6f66d97f1575_marrio.png"
                loading="lazy"
                width="65.5"
                id="w-node-_3bcdd3dc-233e-5187-3a87-47ff11593342-4bfb30fd"
                alt="logo"
                class="logo-hero-hp2"
              ></img>
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f5051f6e9a5c5e29821_ezoic.png"
                loading="lazy"
                width="85.5"
                id="w-node-_1baf5395-e283-9a88-1a71-4b9908211ef4-4bfb30fd"
                alt="logo"
                class="logo-hero-hp2"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* // white page */}
      <div className="white-page">
        <div className="container">
          <div className="row d-flex ">
            <div className="col-md-7 mt-5 pt-5">
              <button className="yellow border-0 p-1 rounded mb-3">
                01.connect
              </button>
              <h1 className="fw-bold">
                Give everyone the power <br />
                to <span className="text-gradient"> work with data </span>
              </h1>
            </div>
            <div className="col-md-5 mt-md-5 pt-5 padding">
              <p className="text-muted fs-5 fw-bold ">
                Choose a data connector or upload a dataset to start exploring
                and understanding your data. No technical setup needed!
              </p>
            </div>
            <div className="col-12 position">
              <img src="polymer.png" alt="mindmap" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* two  */}
        <div className="two">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-6 mt-5 pt-5 twoo">
                <button className="yellow border-0 p-1 rounded mb-3">
                  02.Build
                </button>
                <h1 className="fw-bold">
                  <span className="text-gradient"> Build </span>beautiful <br />{" "}
                  reports in a breeze
                </h1>
                <p className="text-muted fw-bold ">
                  Easily add charts, graphs, or other visualizations and build
                  interactive dashboards in minutes.
                </p>
                <p className="text-muted fw-bold ">
                  Work on your own or invite collaborators.
                </p>

                <br />
                <Link to="/login">
                  <button class="btn btn-dark py-3 px-4">Start for free</button>
                </Link>
              </div>
              <div className="col-md-6 charts ">
                <img
                  src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c2ed24fe9219b0dd06f4a_Illustration%201-p-1080.png"
                  alt="charts"
                  className="img-fluid"
                />
              </div>
              {/* third */}
              <div className="row">
                <div className="col-md-7 mt-5 mt-md-5 pt-md-5 mt-lg-0">
                  <img
                    src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c462cb5931a60e2eb9a56_dashboard.png"
                    alt=""
                    width="550px"
                    className="img-fluid"
                  />
                </div>

                <div className="col-md-5 mt-lg-5 pt-lg-5 third">
                  <button className="yellow border-0 p-1 rounded mb-3">
                    03.Share
                  </button>
                  <h1 className="fw-bold">
                    <span className="text-gradient"> Share </span>and present
                    <br /> your data like a pro
                  </h1>
                  <p className="text-muted fw-bold ">
                    Quickly share a link to your data or easily embed your
                    dashboard anywhere.
                  </p>
                  <p className="text-muted fw-bold ">
                    Work on your own or invite collaborators.
                  </p>
                  <br />
                  <Link to="/login">
                    <button class="btn btn-dark py-3 px-4">
                      Start for free
                    </button>
                  </Link>
                </div>

                {/* four */}
                <div className="container">
                  <div className="row d-flex">
                    <div className="col-lg-4 mt-5 pt-5 four">
                      <h1 className="fw-bold">
                        Master your <br />
                        marketing data
                      </h1>
                      <p className="text-muted fw-bold mt-2">
                        Bring in data from Google, FB, or other advertising
                        platforms to identify the best performing creatives,
                        optimize ad budgets, and wow your stakeholders.
                      </p>

                      <br />
                      <Link to="/login">
                        <button class="btn btn-dark py-3 px-4">
                          Start for free
                        </button>
                      </Link>
                    </div>

                    <div className="col-lg-8">
                      <img
                        src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/6332f773b88096e6cb9489cd_img-marketing-p-800.jpg"
                        alt=""
                        // width="500px"
                        className="img-fluid"
                      />
                    </div>

                    <Cards />
                    <Banner />
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Polymer;
