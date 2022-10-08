import React from "react";
import { Link } from "react-router-dom";
import "./polymer.css";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark rounded-2 position-absolute ms-lg-4 ms-md-3 ms-2 ">
        <div class="container-fluid">
          <Link to="/">
            <a class="navbar-brand fw-bold" href="#">
              Polymer
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about">
                  <a
                    class="nav-link active fw-bold ms-lg-5 ps-lg-5 "
                    aria-current="page"
                    href="#"
                  >
                    About
                  </a>
                </Link>
              </li>
              <li class="nav-item fw-bold">
                <Link to="/pricing">
                  <a class="nav-link text-white mx-lg-4 " href="#">
                    Price
                  </a>
                </Link>
              </li>
              <li class="nav-item fw-bold ">
                <Link to="/blog">
                  <a class="nav-link text-white " href="#">
                    Blog
                  </a>
                </Link>
              </li>
              {/* <li class="nav-item dropdown fw-bold">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul
                  class="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item text-white" href="#">
                      <small> Help center</small>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#">
                      <small> Data privacy</small>
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item text-white" href="#">
                      <small> Contact us</small>
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <form class="d-flex">
              <Link to="/login">
                <button class="btn btn-dark fw-bold border" type="submit">
                  Login
                </button>
              </Link>
              <Link to="/login">
                <button
                  class="yellow btn-hover py-2 px-3 rounded fw-semibold border"
                  type="submit"
                >
                  Start for free
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
