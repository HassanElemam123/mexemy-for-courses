import { NavLink, useNavigate } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { useCart } from "../CartContext.jsx";
import { useAuth } from "../AuthContext.jsx";

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
  const { cartCount, clearCart } = useCart();
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const navCollapseRef = useRef(null);
  const { user, isLoggedIn, logout } = useAuth();

  const closeMobileMenu = () => {
    if (window.innerWidth < 992 && navCollapseRef.current) {
      navCollapseRef.current.classList.remove("show");
    }
  };

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

    closeMobileMenu();
  };

  const handleSuggestionClick = (title) => {
    setSearchText(title);
    setShowSuggestions(false);
    navigate(`/courses?search=${encodeURIComponent(title)}`);
    closeMobileMenu();
  };

  const handleLogout = () => {
    clearCart();
    logout();
    closeMobileMenu();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm py-2">
      <div className="container-fluid px-4">
        <img
          src="/icons/nav-logo.svg"
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

        <div
          className="collapse navbar-collapse  mt-3 mt-lg-0"
          id="mainNav"
          ref={navCollapseRef}
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <NavLink
                to="/"
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `nav-link fw-bold ${styles.linkColor} ${
                    isActive ? styles.activeLink : ""
                  }`
                }
              >
                All Courses
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/blogs"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `nav-link fw-bold ${styles.linkColor} ${
                    isActive ? styles.activeLink : ""
                  }`
                }
              >
                Blogs
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle fw-bold ${styles.linkColor} ${styles.dropdownTrigger}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resource
              </a>

              <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                <li>
                  <NavLink
                    to="/resource/data"
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `${styles.dropdownItem} ${
                        isActive ? styles.activeDropdownItem : ""
                      }`
                    }
                  >
                    <span className={styles.itemDot}></span>
                    Data
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/resource/about"
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `${styles.dropdownItem} ${
                        isActive ? styles.activeDropdownItem : ""
                      }`
                    }
                  >
                    <span className={styles.itemDot}></span>
                    About
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `nav-link fw-bold ${styles.linkColor} ${
                    isActive ? styles.activeLink : ""
                  }`
                }
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item dropdown fw-bold">
              <a
                className={`nav-link dropdown-toggle ${styles.linkColor} ${styles.dropdownTrigger}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Affiliate
              </a>

              <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                <li>
                  <NavLink
                    to="/affiliate/login"
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `${styles.dropdownItem} ${
                        isActive ? styles.activeDropdownItem : ""
                      }`
                    }
                  >
                    <span className={styles.itemDot}></span>
                    Login
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/affiliate/join"
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `${styles.dropdownItem} ${
                        isActive ? styles.activeDropdownItem : ""
                      }`
                    }
                  >
                    <span className={styles.itemDot}></span>
                    Join
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/affiliate/instructors"
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `${styles.dropdownItem} ${
                        isActive ? styles.activeDropdownItem : ""
                      }`
                    }
                  >
                    <span className={styles.itemDot}></span>
                    Instructors
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <div
            className={`d-flex align-items-center gap-3 ${styles.rightActions}`}
          >
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
                    src="/icons/search.svg"
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
                    <div className={styles.noSearchResult}>
                      No matching courses
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className={styles.iconRow}>
              <div className={styles.cartWrapper}>
                <NavLink to="/cart" onClick={closeMobileMenu}>
                  <img
                    src="/icons/cart.svg"
                    className={`p-1 ${styles.cursorPointer}`}
                    alt="Cart"
                  />
                </NavLink>

                <span className={styles.cartBadge}>{cartCount}</span>
              </div>

              {isLoggedIn ? (
                <>
                  {user?.username && (
                    <span className={styles.userName}>Hi, {user.username}</span>
                  )}

                  <button
                    type="button"
                    className={`btn px-3 ${styles.logoutBtn}`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  className={`btn px-3 ${styles.loginBtn}`}
                  to="/st-login"
                  onClick={closeMobileMenu}
                >
                  Login
                </NavLink>
              )}

              <NavLink
                className={`btn px-3 ${styles.registerBtn}`}
                to="/register"
                onClick={closeMobileMenu}
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
