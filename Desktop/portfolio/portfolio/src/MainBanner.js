import React from "react";
import "./App.css";

const MainBanner = () => {
  return (
    <div className="main animation" id="home">
      <div className="container">
        <div className="row  ">
          <div className="col-md-6 d-flex justify-content-center align-items-center mt-md-0 mt-sm-5 mt-5 pt-sm-4 pt-md-0 pt-4  ">
            <img
              src="gif.gif"
              alt="girl say hi!"
              className=" img-fluid mt-sm-0 mt-0 mt-md-0 bg-sm-white bg-sm-opacity-0  "
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
            <div className="content ">
              <div className="fw-bolder hello">Hello! I'm</div>
              <h1 className="name"> Jothi Lakshmi</h1>
              <div className="pt-3">
                <span class="material-symbols-sharp">call</span>
                <sup style={{ fontSize: "1rem" }} className="fw-bold phone">
                  +91 6374122641
                </sup>
              </div>
              <br />
              <div>
                <span class="material-symbols-sharp">mail</span>
                <sup
                  style={{ fontSize: "1rem" }}
                  className="ms-2 fw-bold email"
                >
                  jothilakshmi2288@gmail.com
                </sup>
              </div>
              <br />
              <a
                href="jothi_lakshmi_FDR.pdf"
                className="mt-md-2 mb-sm-3 mb-0 "
                target="_black"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
