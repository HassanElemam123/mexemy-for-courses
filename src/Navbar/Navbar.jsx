import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm py-2">
      <div className="container-fluid px-4">

        <img
          src="../../public/icons/nav-logo.svg"
          alt="mexemy"
          className={styles.navbarLogo}
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <NavLink className={`nav-link fw-bold ${styles.linkColor}`} to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={`nav-link fw-bold ${styles.linkColor}`} to="/courses">
                All Courses
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resource
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={`dropdown-item fw-bold ${styles.linkColor}`} to="/resource/data">
                    Data
                  </NavLink>
                </li>
                <li>
                  <NavLink className={`dropdown-item fw-bold ${styles.linkColor}`} to="/resource/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className={`nav-link fw-bold ${styles.linkColor}`} to="/contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item dropdown fw-bold">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Affiliate
              </a>
              <ul className="dropdown-menu fw-bold">
                <li>
                  <NavLink className={`dropdown-item fw-bold ${styles.linkColor}`} to="/affiliate/AfLogin">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className={`dropdown-item fw-bold ${styles.linkColor}`} to="/affiliate/join">
                    Join
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-4">

              <img src="../../public/icons/search.svg" className={`p-1 ${styles.cursorPointer}`} alt="" />

              <img src="../../public/icons/cart.svg" className={`p-1 ${styles.cursorPointer}`} alt="Cart" />

              <img src="../../public/icons/login.svg" className={`p-1 ${styles.cursorPointer}`} alt="Profile" />

            <NavLink className={`btn px-3 ${styles.registerBtn}`} to="/StRegister">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}