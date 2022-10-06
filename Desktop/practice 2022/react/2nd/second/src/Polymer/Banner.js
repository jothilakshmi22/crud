import React from "react";
import "./polymer.css";
// import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner d-flex justify-content-center align-items-center flex-column ms-md-0">
      <div className=" text-center banner-center">
        <h1 className="fw-bold display-5 text-white">
          Start using Polymer right now. Free for 14 days.
        </h1>
        <p className="text-muted fw-bold mt-4 fs-5">
          See for yourself how fast and easy it is to create visualizations,
          build dashboards, and unmask valuable insights in your data.
        </p>

        <br />
        {/* <Link to="/login"> */}
        <button class="yellow text-dark fw-bold fs-5 py-sm-3 px-sm-3  btn-hover rounded">
          Start for free
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Banner;
