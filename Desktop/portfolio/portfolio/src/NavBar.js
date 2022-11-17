import React from "react";
import "./App.css";


function NavBar() {
 

  return (
    <div>
      <div className="container-fluid navBar fixed-top">
        <div className="container ">
          <nav
            class="navbar navbar-expand-lg navbar-darkfixed top"
            style={{ backgroundColor: " rgba(0, 0, 0, 0.060);" }}
          >
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Port<span>folio</span>
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
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link me-4 " aria-current="page" href="#home">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4 " aria-current="page" href="#about">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4 " href="#Skillset">
                      Skills
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4" href="#interest">
                      Interest
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
