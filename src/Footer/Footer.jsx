import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* الجزء البنفسجي */}
      <div className={styles.top}>
        <div className="container">
          <div className="row gy-4 align-items-ؤثىفثق">
            {/* Left */}
            <div className="col-12 col-lg-4">
              <img src="/icons/mexemy-logo-white.svg" alt="" className="mb-3"/>

              <div className={styles.quote}>
                <span className={styles.quoteLine}></span>
                <div>
                  <p className={styles.quoteText}>
                    give a man a fish and you feed him for a day; <br />
                    teach a man to fish and you feed him for a lifetime.
                  </p>
                  <div className={styles.quoteAuthor}>— Maimonides</div>
                </div>
              </div>
            </div>

            {/* Middle (NavLink) */}
            <div className="col-12 col-lg-4 d-flex justify-content-lg-center">
              <div className={styles.linksCol}>
                <div className={styles.linksTitle}>All pages</div>

                <ul className={styles.links}>
                  <li>
                    <NavLink
                      to="/courses"
                      className={({ isActive }) =>
                        `${styles.footerLink} ${isActive ? styles.activeLink : ""}`
                      }
                    >
                      All Courses
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `${styles.footerLink} ${isActive ? styles.activeLink : ""}`
                      }
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/privacy"
                      className={({ isActive }) =>
                        `${styles.footerLink} ${isActive ? styles.activeLink : ""}`
                      }
                    >
                      Privacy Policy
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/refund"
                      className={({ isActive }) =>
                        `${styles.footerLink} ${isActive ? styles.activeLink : ""}`
                      }
                    >
                      Refund and Returns Policy
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `${styles.footerLink} ${isActive ? styles.activeLink : ""}`
                      }
                    >
                      About us
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/faq"
                      className={({ isActive }) =>
                        `${styles.footerLink} ${isActive ? styles.activeLink : ""}`
                      }
                    >
                      faq
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/terms"
                      className={({ isActive }) =>
                        `${styles.footerLink} ${isActive ? styles.activeLink : ""}`
                      }
                    >
                      Terms and condition
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right */}
            <div  className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
              <div className={styles.paymentsWrap}>
                <img
                  className={styles.paymentsImg}
                  src="/payments.png"
                  alt="Payments"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الشريط الأبيض */}
      <div className={styles.bottom}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            <div className={styles.copy}>Copyright © 2024 @mexemy.com</div>

            <div className={styles.social}>
              <a className={styles.socialBtn} href="https://web.facebook.com/mexemy.bd" target="_blank" aria-label="Facebook">
                <img src="/icons/Link-Facebook→SVG.svg" alt="" />
              </a>
              <a className={styles.socialBtn} href="http://instagram.com/mexemy.official/" target="_blank" aria-label="Instagram">
                <img src="/icons/Link-Instagram→SVG.svg" alt="" />
              </a>
              <a className={styles.socialBtn} href="https://www.youtube.com/@mexemyclasses"  target="_blank" aria-label="YouTube">
                <img src="/icons/Link-YouTube→SVG.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}