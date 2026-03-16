import { useNavigate } from "react-router-dom";
import styles from "./Skilled.module.css";

const avatars = [
  "/ins-nav01.png",
  "/ins-nav02.png",
  "/ins-nav03.png",
  "/ins-nav04.png",
  "/ins-nav05.png",
  "/ins-nav06.png",
];

export default function Skilled() {
  const navigate = useNavigate();

  const goToWebDesignCourse = () => {
    navigate("/course/ac1");
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="text-center mb-4">
          <span className={`rounded-pill ${styles.badge}`}>Skilled Introduce</span>
          <h2 className={styles.h2}>
            Our Top Class &amp; Professional
            <br />
            Instructors In One Place
          </h2>
        </div>

        <div className="row align-items-center justify-content-center g-4">
          <div className="col-lg-5 d-flex justify-content-center">
            <div className={styles.photoWrap}>
              <div className={styles.yellowShape} />
              <img
                src="/ins01.png"
                alt="Instructor"
                className={styles.instructorImg}
              />
            </div>
          </div>

          <div className="col-lg-5">
            <div className={styles.ratingPill}>
              <span className={styles.stars}>
                <img src="/icons/ratting-5.svg" alt="" />
              </span>
              <span className={styles.ratingText}>(4.8 Ratings)</span>
            </div>

            <h3 className={styles.name}>Olivia Mia</h3>
            <div className={styles.role}>Web Design</div>

            <p className={styles.desc}>
              Histudy The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </p>

            <div className="d-flex gap-2 mb-3">
              <a className={styles.social} href="#">
                <img src="/icons/f.svg" alt="" />
              </a>
              <a className={styles.social} href="#">
                <img src="/icons/tw.svg" alt="" />
              </a>
              <a className={styles.social} href="#">
                <img src="/icons/whats.svg" alt="" />
              </a>
              <a className={`${styles.insta} ${styles.social}`} href="#">
                <img src="/icons/insta.svg" alt="" />
              </a>
            </div>

            <button
              className={`btn ${styles.primaryBtn}`}
              type="button"
              onClick={goToWebDesignCourse}
            >
              Join My Class <span className={styles.arrow}>
                <img src="/icons/btn-arrow.svg" alt="" />
              </span>
            </button>
          </div>
        </div>

        <div className={styles.barWrap}>
          <div className={styles.bar}>
            <div className={styles.navBtn} aria-label="Prev"></div>

            <div className={styles.avatars}>
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className={`${styles.avatar} ${i === 0 ? styles.active : ""}`}
                >
                  <img src={src} alt={`avatar-${i}`} />
                </div>
              ))}
            </div>

            <div className={styles.navBtn} aria-label="Next"></div>
          </div>
        </div>
      </div>
    </section>
  );
}