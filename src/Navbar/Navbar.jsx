import { NavLink, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import styles from "./Navbar.module.css";
import { useCart } from "../CartContext.jsx";

const allCourses = [
  { id: "ac1", title: "Web Design" },
  { id: "ac2", title: "Video editing" },
  { id: "ac3", title: "Canva Designing" },
  { id: "ac4", title: "Affiliate Marketing" },
  { id: "dd1", title: "Web Design" },
  { id: "dd2", title: "UI/UX Design" },
  { id: "dd3", title: "Shopify Ecommerce" },
  { id: "dd4", title: "WordPress & DIVI" },
  { id: "mp1", title: "Fiverr Marketplace" },
  { id: "mp2", title: "Upwork Marketplace" },
  { id: "ed1", title: "Graphic Design" },
  { id: "ed2", title: "Digital Art & Illustration" },
  { id: "ed3", title: "3D Animation" },
  { id: "ed4", title: "Video Editing Part 2" },
];

export default function Navbar() {
  const { cartCount } = useCart();
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const filteredCourses = useMemo(() => {
    const value = searchText.trim().toLowerCase();

    if (!value) return [];

    return allCourses
      .filter((course) => course.title.toLowerCase().includes(value))
      .slice(0, 8);
  }, [searchText]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setShowSuggestions(true);

    if (value.trim()) {
      navigate(`/courses?search=${encodeURIComponent(value)}`);
    } else {
      navigate("/courses");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchText)}`);
      setShowSuggestions(true);
    } else {
      navigate("/courses");
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (title) => {
    setSearchText(title);
    setShowSuggestions(false);
    navigate(`/courses?search=${encodeURIComponent(title)}`);
  };

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link fw-bold ${styles.linkColor} ${
                    isActive ? styles.activeLink : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `nav-link fw-bold ${styles.linkColor} ${
                    isActive ? styles.activeLink : ""
                  }`
                }
              >
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
                  <NavLink
                    to="/resource/data"
                    className={({ isActive }) =>
                      `dropdown-item fw-bold ${styles.linkColor} ${
                        isActive ? styles.activeDropdownItem : ""
                      }`
                    }
                  >
                    Data
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/resource/about"
                    className={({ isActive }) =>
                      `dropdown-item fw-bold ${styles.linkColor} ${
                        isActive ? styles.activeDropdownItem : ""
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link fw-bold ${styles.linkColor} ${
                    isActive ? styles.activeLink : ""
                  }`
                }
              >
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
                  <NavLink
                    to="/affiliate/AfLogin"
                    className={({ isActive }) =>
                      `dropdown-item fw-bold ${styles.linkColor} ${
                        isActive ? styles.activeDropdownItem : ""
                      }`
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/affiliate/join"
                    className={({ isActive }) =>
                      `dropdown-item fw-bold ${styles.linkColor} ${
                        isActive ? styles.activeDropdownItem : ""
                      }`
                    }
                  >
                    Join
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <div className={`d-flex align-items-center gap-3 ${styles.rightActions}`}>
            <div className={styles.searchWrapper}>
              <form onSubmit={handleSubmit} className={styles.searchForm}>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchText}
                  onChange={handleChange}
                  onFocus={() => setShowSuggestions(true)}
                  className={styles.searchInput}
                />

                <button type="submit" className={styles.searchBtn}>
                  <img
                    src="../../public/icons/search.svg"
                    className={styles.cursorPointer}
                    alt="Search"
                  />
                </button>
              </form>

              {showSuggestions && searchText.trim() && (
                <div className={styles.searchDropdown}>
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                      <button
                        key={course.id}
                        type="button"
                        className={styles.searchItem}
                        onClick={() => handleSuggestionClick(course.title)}
                      >
                        {course.title}
                      </button>
                    ))
                  ) : (
                    <div className={styles.noSearchResult}>No matching courses</div>
                  )}
                </div>
              )}
            </div>

            <div className={styles.iconRow}>
              <div className={styles.cartWrapper}>
                <NavLink to="/cart">
                  <img
                    src="../../public/icons/cart.svg"
                    className={`p-1 ${styles.cursorPointer}`}
                    alt="Cart"
                  />
                </NavLink>

                <span className={styles.cartBadge}>{cartCount}</span>
              </div>

              <img
                src="../../public/icons/login.svg"
                className={`p-1 ${styles.cursorPointer}`}
                alt="Profile"
              />

              <NavLink className={`btn px-3 ${styles.registerBtn}`} to="/StRegister">
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}