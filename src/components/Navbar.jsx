import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            Primex India Inc.
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  <Link style={{ textDecoration: "none" }} to="/">
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link style={{ textDecoration: "none" }} to="/about">
                    About
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link style={{ textDecoration: "none" }} to="/Collection">
                    Collection
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  <Link style={{ textDecoration: "none" }} to="/contact">
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
