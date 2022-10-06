import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";

import "./polymer.css";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center space ">
            <div className="borders">
              <h1 className="display-5 fw-semibold">
                Every dataset has a <br /> million stories to tell
              </h1>
              <p className="fw-semibold fs-5 text-center mt-2">
                We want to give everyone the power to explore, visualize, <br />
                and present their data confidently.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 "
            style={{ marginTop: "10%", marignBottom: "10%" }}
          >
            <h1 className="display-5 fw-bold">Polymer’s mission</h1>
            <p className="fw-semibold" style={{ fontSize: "18px" }}>
              Data continues to grow exponentially and organizations still
              struggle to be data-driven. New data tools are emerging
              constantly, but remain complicated and confusing for non-technical
              teams.
            </p>
            <p className="fw-semibold" style={{ fontSize: "18px" }}>
              Polymer’s mission is to give every business person the power to
              work with their data directly and answer fundamental business
              questions without needing advanced tools or training.
            </p>
          </div>
          <div
            className="col-md-6"
            style={{ marginTop: "10%", marignBottom: "10%" }}
          >
            <h5 className="text-muted my-4 ms-md-2">
              The following three pillars lie at the core of Polymer’s product
              vision:
            </h5>
            <h3 className="yellow p-2 fw-bold m-2 rounded-2">
              No-code,accessible to all
            </h3>
            <h3 className="yellow p-2 fw-bold m-2 rounded-2">
              The fastest way to work with data
            </h3>
            <h3 className="yellow p-2 fw-bold m-2 rounded-2">
              The most beautiful interface for data
            </h3>
          </div>
          <div
            className="col-md-4 "
            style={{ marginTop: "15%", marignBottom: "10%" }}
          >
            <h1 className="display-5 fw-bold">We’re just getting started!</h1>
            <p className="fw-semibold " style={{ fontSize: "18px" }}>
              Polymer has a big vision and a talented team. If you’re interested
              in tackling tough technical and design challenges, get in touch.
            </p>
            <button className="yellow p-2 rounded fw-semibold border">
              Contact us
            </button>
          </div>
          <div
            className="col-md-8"
            style={{ marginTop: "10%", marignBottom: "10%" }}
          >
            <img
              src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/61f7d413cf8dcd89dc5ba1c3_1.png"
              loading="lazy"
              srcset="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/61f7d413cf8dcd89dc5ba1c3_1-p-500.png 500w, https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/61f7d413cf8dcd89dc5ba1c3_1.png 782w"
              sizes="(max-width: 767px) 95vw, 100vw"
              alt=""
              class="img-fluid"
            />
          </div>
          <div className="col-12 mt-5 mt-lg-0">
            <h1 className="display-5 fw-semibold text-center ">
              We’re backed by the best
            </h1>
            <p className="fw-semibold fs-5 text-center my-4">
              Thank you to our biggest supporters and investors.
            </p>
            <div className="d-flex justify-content-around my-5 overflow-auto">
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/6154d5463b5b1589ae33033d_logo-sierra.png"
                alt=""
                width="110px"
                height="50px"
              />
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/61c9bccb815a3b1a534e3bd7_logo-westwave.svg"
                alt=""
                width="150px"
                height="50px"
              />
              <img
                src="  https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/61574c65a5ad16a26271a32a_logo-xoogler.jpg"
                alt=""
                width="70px"
              />
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/6154d54597f8b6643618201b_logo-correlations.png"
                alt=""
                width="150px"
                height="50px"
              />

              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/61574c64cc7b13879927b0cd_logo-vela.jpg"
                alt=""
                width="150px"
                height="50px"
              />
              <img
                src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632da370e80dd1c3a7f9dd8f_logo-oceans.png"
                alt=""
                width="80px"
                height="50px"
              />
            </div>
            <h1 className="display-6 fw-semibold text-center my-5">
              Some of our awesome angels
            </h1>
            <div className="d-flex justify-content-center my-5 overflow-auto">
              <div className="text-center">
                <img
                  src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/61c9becd49eee80582c618bf_Vlad%20Tenev.png"
                  alt=""
                  width="70px"
                />
                <h5>Vlad Tenev</h5>
                <p className="text-muted">Co-Founder @ Robinhood</p>
              </div>
              <div className="text-center mx-5 px-5">
                <img
                  src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/61c9becc09bb1761f7f3a86b_Phil%20Neches.png"
                  alt=""
                  width="70px"
                />
                <h5>Phil Neches</h5>
                <p className="text-muted">Co-Founder @ Robinhood</p>
              </div>
              <div className="text-center">
                <img
                  src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/61c9becd6f2ac77895b961bb_Greg%20Badros.png"
                  alt=""
                  width="70px"
                />
                <h5> Greg Badros </h5>
                <p className="text-muted">Co-Founder @ Robinhood</p>
              </div>
            </div>
          </div>
          <Banner />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
