import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";

export default function LandingHome() {
  return (
    <section className={styles.hero}>
      <div className="container-fluid px-4">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <h1 className={styles.title}>
              Learning is <span className={styles.highlight}>What You</span>
              <br />
              Make of it. Make it Yours
              <br />
              at VideoEditing.
            </h1>

            <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
              <NavLink to="/register" className={`btn ${styles.primaryBtn}`}>
                Start Free Trial
                <span className="ms-2">
                  <img src="/icons/btn-arrow.svg" alt="" />
                </span>
              </NavLink>

              <NavLink to="/courses">
                <button className={`btn ${styles.playBtn}`} aria-label="Play">
                  <img
                    src="/icons/Symbol.svg"
                    alt="play"
                    className={styles.playIcon}
                  />
                </button>
              </NavLink>
              <div className={styles.watchText}>
                Watch Our <br /> New Courses
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.visualWrap}>
              <div className={styles.blob}></div>

              <div className={`${styles.card} ${styles.cardMain}`}>
                <div className={styles.cardTop}>
                  <div className={styles.cardBadge}>Video Editing</div>
                  <div className={styles.cardSmallText}>&amp; storytelling</div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.media}>
                    <img
                      src="/video-editing.png"
                      alt="Video Editing"
                      className={styles.cardImg}
                    />
                  </div>
                </div>
              </div>

              <div className={`${styles.card} ${styles.cardStat}`}>
                <div className={styles.statTitle}>Total Students</div>
                <div className={styles.statValue}>15K</div>
              </div>

              <div className={`${styles.card} ${styles.cardSocial}`}>
                <div className={styles.socialTop}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
                <div className={styles.socialText}>
                  36K+ <span>Enrolled</span>
                </div>
                <div className={styles.avatars}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.brandsStrip}>
        <img
          src="/div.brand-area.png"
          alt="brands"
          className={styles.brandsImg}
        />
      </div>
    </section>
  );
}
