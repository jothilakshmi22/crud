import React from "react";
import "./polymer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-2 ps-3 mt-3 pt-3 ms-4 ms-sm-0 mt-sm-5 pt-sm-5 ps-sm-0 ">
            <h4>Polymer</h4>
          </div>
          <div className=" col-12 col-sm-3 col-lg-2 mt-0 mt-sm-5 pt-sm-5">
            <ul type="none" className="lh-lg">
              <li className="text-dark fw-bold">Company</li>
              <li className="text-muted fw-bold">About Polymer</li>
              <li className="text-muted fw-bold">Careers </li>
              <li className="text-muted fw-bold">Terms of Service </li>
              <li className="text-muted fw-bold">Privacy policy </li>
            </ul>
          </div>
          <div className="col-12 col-sm-3 col-lg-2 mt-0 mt-sm-5 pt-sm-5">
            <ul type="none" className="lh-lg">
              <li className="text-dark fw-bold">Resources</li>
              <li className="text-muted fw-bold">Blog</li>
              <li className="text-muted fw-bold">Help center</li>
              <li className="text-muted fw-bold"> Contact us</li>
            </ul>
          </div>
          <div className="col-12 col-sm-3 col-lg-2 mt-0 mt-sm-5 pt-sm-5">
            <ul type="none" className="lh-lg">
              <li className="text-dark fw-bold">Product</li>
              <li className="text-muted fw-bold ">Pricing</li>
              <li className="text-muted fw-bold">Data Privacy</li>
              <li className="text-muted fw-bold"> Service status</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-sm-10 text-muted brands ">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>

            <p className="mt-4"> &#169; 2022 polymer search</p>
          </div>
          <div className="col-sm-2">
            <img
              src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c82636a47e051f351bd2d_SOC2-labrel.png"
              alt=""
              width="60px"
            />
            <p className="text-muted mt-2 ">SOC 2 Compliant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
