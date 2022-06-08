import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3 px-3" id="nav">
      <div className="container-fluid">
        <img id="logoimg" src="./logo.png" alt="" width="90" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto" id="links">
            <a className="nav-link active" aria-current="page" href="#home">
              Home
            </a>
            <a className="nav-link" href="#skills">
              Jobs
            </a>
            <a className="nav-link" href="#about">
              Companies
            </a>
            <a className="nav-link" href="#about">
              FAQs
            </a>
            <a className="nav-link" href="#about">
              Course
            </a>
            <img id="logoimg1" src="./logo.png" alt="" width="40" height="40" />
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                someThing
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
