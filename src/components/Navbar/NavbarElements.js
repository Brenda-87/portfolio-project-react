import React from "react";

export default function NavbarElements() {
  return (
    <nav
      className="
        navbar
        fixed-top
        navbar-expand-lg navbar-dark
        bg-dark
        border-bottom border-3 border-info
      "
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          {" "}
          <i className="fas fa-home fa-2x"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                title="Introduction to front-end developer Brenda"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="portfolio.html"
                title="Front-end developer Brenda's projects"
              >
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="about.html"
                title="Find out more about front-end developer Brenda"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="contact.html"
                title="Contact front-end developer Brenda via e-mail"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
