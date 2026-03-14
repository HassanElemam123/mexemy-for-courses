import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={`py-5 ${styles.section}`}>
      <div className="container-fluid px-4">

        <div className="text-center mx-auto mb-4" style={{ maxWidth: 760 }}>
          <span className={`${styles.pill} d-inline-flex mb-3`}>Our Top Features</span>
          <h2 className={`fw-bold mb-2 ${styles.headTitle}`}>Achieve Your Goal With SkillGrow</h2>
          <p className={` mb-0 ${styles.cardP}`}>
            when an unknown printer took a galley of type and scrambled make specimen book has
            survived not only five centuries
          </p>
        </div>

        <div className="row g-3 justify-content-center mb-5">
          <div className="col-12 col-md-6 col-lg-4">
            <div className={`${styles.card} ${styles.cardBlue}`}>
              <div className={styles.cardHead}>
                <div className={styles.cardIcon}>
                  <img src="/icons/expert.svg" alt="" />
                </div>
                <h5 className={styles.cardTitle}>Expert Tutors</h5>
              </div>

              <p className={styles.cardDesc}>
                When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
              </p>

              <span className={styles.sparkle} aria-hidden="true">
                <img src="/icons/stars.svg" alt="" />
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className={`${styles.card} ${styles.cardPurple}`}>
              <div className={styles.cardHead}>
                <div className={styles.cardIcon}>
                  <img src="/icons/effective.svg" alt="" />
                </div>
                <h5 className={styles.cardTitle}>Effective Learning</h5>
              </div>

              <p className={styles.cardDesc}>
                When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
              </p>

              <span className={styles.sparkle} aria-hidden="true">
                <img src="/icons/stars.svg" alt="" />
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className={`${styles.card} ${styles.cardYellow}`}>
              <div className={styles.cardHead}>
                <div className={styles.cardIcon}>
                  <img src="/icons/earn.svg"  alt="" />
                </div>
                <h5 className={styles.cardTitle}>Earn Certificate</h5>
              </div>

              <p className={styles.cardDesc}>
                When An Unknown Printer Took A Galley Offe Type And Scrambled Makes.
              </p>

              <span className={styles.sparkle} aria-hidden="true">
                <img src="/icons/stars.svg" alt="" />
              </span>
            </div>
          </div>
        </div>

        <div className="row align-items-center g-4">

          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className={styles.leftVisual}>
              <img
                src="/Section-person.png"
                alt="About visual"
                className={styles.leftImg}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <span className={`${styles.pillSmall} d-inline-flex mb-3`}>
              Get More About Us
            </span>

            <h3 className={`${styles.headDesc} fw-bold mb-3`} style={{ fontSize: 34, lineHeight: 1.15 }}>
              Thousand Of Top <span className={styles.highlight}>Courses</span>
              <br />
              Now In One Place
            </h3>

            <p className={`${styles.desc} mb-4`}>
              Groove’s intuitive shared inbox makes it easy for team members to organize,
              prioritize and… this episode of the Smashing Pod we’re talking about Web Platform
              Baseline.
            </p>

            <ul className="list-unstyled mb-4">
              <li className={`${styles.listItem} d-flex align-items-center gap-2 mb-2`}>
                <span className={styles.bullet}>
                  <img src="/icons/listing-arrow.svg" alt="" />
                </span>
                <span className="fw-semibold">The Most World Class Instructors</span>
              </li>
              <li className={`${styles.listItem} d-flex align-items-center gap-2 mb-2`}>
                <span className={styles.bullet}>
                  <img src="/icons/listing-arrow.svg" alt="" />
                </span>
                <span className="fw-semibold">Access Your Class anywhere</span>
              </li>
              <li className={`${styles.listItem} d-flex align-items-center gap-2`}>
                <span className={styles.bullet}>
                  <img src="/icons/listing-arrow.svg" alt="" />
                </span>
                <span className="fw-semibold">Flexible Course Plan</span>
              </li>
            </ul>

          <button className={`btn ${styles.primaryBtn}`} type="button">
              Start Free Trial <span className="ms-2">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}