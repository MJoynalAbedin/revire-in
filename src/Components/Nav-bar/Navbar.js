import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar my-nav-bar fixed-top navbar-expand-lg navbar-light bg-of-nav">
        <div className="container-fluid m-2">
          <a className="navbar-brand ms-5 revire-logo" href="/www">
            REVIRE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link active our-nav-links me-5"
                aria-current="page"
                href="www.#.com"
              >
                Home
              </a>
              <a
                className="nav-link active our-nav-links me-5"
                aria-current="page"
                href="www.#.com"
              >
                Product
              </a>
              <a
                className="nav-link active our-nav-links me-5"
                aria-current="page"
                href="www.#.com"
              >
                Contact
              </a>
              <a
                className="nav-link active our-nav-links me-5"
                aria-current="page"
                href="www.#.com"
              >
                Blogs
              </a>
            </div>
            <div className="navbar-nav ms-auto">
              <button className="me-5 our-nav-links btn btn-outline-success">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
