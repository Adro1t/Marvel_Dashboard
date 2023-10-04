import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

/**
 * The Navbar component represents the navigation bar at the top of the application.
 * It includes links to various sections of the application and a search component.
 */
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Brand/logo link */}
          <Link className="navbar-brand" to="/">
            MARVEL
          </Link>

          {/* Toggle button for mobile navigation */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navigation links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/characters">
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chart">
                  Chart
                </Link>
              </li>
            </ul>
          </div>

          {/* Search component */}
          <Search />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
