import styles from "./Workshop.module.css";
import { NavLink } from "react-router-dom";


export default function Workshop() {
  return (
    <section className={`py-5 ${styles.section}`}>
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <div className={styles.circleWrap}>
              <div className={styles.circle}>
                <img
                  src="/Section.png"
                  alt="Workshop"
                  className={styles.circleImg}
                />

                <button className={styles.playBtn} type="button" aria-label="Play">
                  <img src="/icons/red-play.svg" alt="" />
                </button>

                <div className={styles.liveTag}>
                  <img src="/live.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <span className={`badge rounded-pill ${styles.badgeSoft}`}>
              Free Workshop
            </span>

            <h2 className="fw-bold mt-3 mb-2">Join Our Free Workshops</h2>
            <p className="text-secondary mb-4">
              Edhen an unknown printer took a galley of type and scrambled it to
              make a type specimen books survived not only five centuries.
            </p>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="d-flex gap-3">
                  <div className={`${styles.iconCircle} ${styles.iconPink}`}>
                    <img src="/icons/live-prev.svg" alt="" />
                  </div>
                  <div>
                    <div className="fw-bold">Smooth Virtual Live Classes</div>
                    <div className="text-secondary small">
                      Edhen an unknown printer took a galley of type scrambled.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex gap-3">
                  <div className={`${styles.iconCircle} ${styles.iconCyan}`}>
                    <img src="/icons/grad-comp.svg" alt="" />
                  </div>
                  <div>
                    <div className="fw-bold">99% Graduation Complete</div>
                    <div className="text-secondary small">
                      Edhen an unknown printer took a galley of type scrambled.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/register" className={`btn ${styles.primaryBtn}`}>
              Quick Join Now
              <span className="ms-2">
                <img src="/icons/btn-arrow.svg" alt="" />
              </span>
            </NavLink>
          </div>
        </div>

        <div className={`mt-5 ${styles.statsCard}`}>
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h3 className="text-white fw-bold mb-0">
                Thousands Of <span className={styles.hl}>Courses</span>
                <br />
                Authored By Industry
                <br />
                Experts
              </h3>
            </div>

            <div className="col-lg-4">
              <div className="d-flex gap-4 justify-content-lg-center">
                <div className="text-white">
                  <div className={styles.bigNum}>45K+</div>
                  <div className={styles.smallTxt}>Active Students</div>
                </div>
                <div className={styles.vLine}></div>
                <div className="text-white">
                  <div className={styles.bigNum}>328+</div>
                  <div className={styles.smallTxt}>Best Instructors</div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 d-none d-lg-flex justify-content-end">
              <div className={styles.people}>
                <img src="/fact.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}