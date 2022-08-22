import React from "react";
import "./Style.css";

function Navbarr() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a
            class="navbar-brand fw-bolder fs-4"
            href="#"
            style={{ color: "#29f700" }}
          >
            SPICES🔥
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link text-light " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#products">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#conducts">
                  Contact
                </a>
              </li>
            </ul>
            <button className="button fw-bold mt-lg-0 mt-2">Sign up</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarr;
