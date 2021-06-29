import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#index">
            <img src="/Logo.svg"></img>
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
                <a class="nav-link " aria-current="page" href="#index">
                  <b>Home</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                 <b> About</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#collection">
                <b>  Collection</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#contact">
                <b>  Contact</b>
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
