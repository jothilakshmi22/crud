import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import "./polymer.css";

// import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="pricing">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 pt-5">
            <div className="display-4 fw-semibold text-center">Pricing</div>
            <p className="text-center fs-4 py-2">Choose the prefect plan.</p>
          </div>
          <div className="col-md-4">
            <div className="card p-2 my-md-0 my-3">
              <p className="fs-4 text-dark fw-semibold ">Free</p>
              <p className="fs-5 text-muted ">
                For individuals just getting started with Polymer.
              </p>
              <div className="display-6 fw-bold ">$0</div>
              <button className="btn btn-dark text-white fw-semibold mt-3 p-2">
                Get started
              </button>
              <p className="fs-4 text-dark fw-semibold mt-3">
                Free plan includes:
              </p>
              <p className="fs-4 text-dark fw-semibold  ">Usage</p>
              <p className="text-muted">
                <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" />
                1 data connector{" "}
              </p>
              <p className="text-muted">
                <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" />
                Manual data syncing{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-2 my-md-0 my-3">
              <p className="fs-4 text-dark fw-semibold ">Data Plus</p>
              <p className="fs-5 text-muted ">
                Explore,Visualize,and Share your data with others
              </p>
              <div className="display-6 fw-bold ">$9.00</div>
              <button className="btn btn-dark text-white fw-semibold mt-3 p-2">
                Get started
              </button>
              <p className="fs-4 text-dark fw-semibold mt-3">
                All Free features, plus:
              </p>
              <p className="fs-4 text-dark fw-semibold  ">Usage</p>

              <p className="text-muted">
                <img
                  src="https://img.icons8.com/android/12/000000/plus.png"
                  className="me-1"
                />
                5 data connectors{" "}
              </p>
              <p className="text-muted">
                <img
                  src="https://img.icons8.com/android/12/000000/plus.png"
                  className="me-1"
                />
                Hourly auto syncing{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-2 my-md-0 my-3">
              <p className="fs-4 text-dark fw-semibold ">Enterprise</p>
              <p className="fs-5 text-muted ">
                For companies and teams with custom data needs
              </p>
              <div className="display-6 fw-bold ">Custom</div>
              <button className="btn btn-dark text-white fw-semibold mt-3 p-2">
                Contact us
              </button>
              <p className="fs-4 text-dark fw-semibold mt-3">
                All Plus features,plus:
              </p>
              <p className="fs-4 text-dark fw-semibold  ">Usage</p>

              <p className="text-muted">
                <img
                  src="https://img.icons8.com/android/12/000000/plus.png"
                  className="me-1"
                />
                Unlimited data connectorS{" "}
              </p>
              <p className="text-muted">
                <img
                  src="https://img.icons8.com/android/12/000000/plus.png"
                  className="me-1"
                />
                Real-time-auto syncing{" "}
              </p>
            </div>
          </div>
          <div className="col-12 bg-dark text-white fs-semibold text-center rounded-5 p-5 my-5 ">
            <p className="fs-4 fw-bold"> Enterprise</p>
            <h1 className="p-3">
              Need a customized solution or access to our API?
            </h1>
            <button className="yellow p-3 outline-none rounded p-3  fw-bold ">
              Get in touch
            </button>
          </div>
          <Banner />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
