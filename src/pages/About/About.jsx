import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.page}>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className="container-fluid px-4">
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>About us</h1>

            <div className={styles.heroSocial}>
              <a
                href="https://web.facebook.com/mexemy.bd"
                target="_blank"
                rel="noreferrer"
                className={styles.heroIcon}
                aria-label="facebook"
              >
                <img src="/icons/f-about.svg" alt="" />
              </a>

              <a
                href="https://www.youtube.com/@mexemyclasses"
                target="_blank"
                rel="noreferrer"
                className={styles.heroIcon}
                aria-label="youtube"
              >
                <img src="/icons/y-about.svg" alt="" />
              </a>

              <a
                href="http://instagram.com/mexemy.official/"
                target="_blank"
                rel="noreferrer"
                className={styles.heroIcon}
                aria-label="instagram"
              >
                <img src="/icons/in-about.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.textBlock}>
            <p>
              To combat unemployment in Bangladesh&apos;s youth society and introduce a new
              education system, Maxmi has embarked on a journey. In the present era, where
              skills are given more importance than textbook knowledge and certificates,
              we are lagging far behind compared to other countries. One of the main reasons
              is the lack of proper guidelines and resources. As a solution, we have brought
              trainers, courses, and career guidelines for you.
            </p>

            <p>
              Our dream is to create a new education system in Bangladesh where students can
              choose their preferred skills, become experts in them, and use their skills to
              enhance their careers. We want every student in this country to undergo a
              transformation into a successful skilled youth.
            </p>

            <p className={styles.bold}>
              To develop your skills, excel in your career, and simultaneously contribute to
              creating a new skilled youth society, join hands with Maxmi today.
            </p>
          </div>

          <h2 className={styles.midTitle}>
            Maxmi could be your choice as a learning platform.
          </h2>

          <div className="row g-4 mt-2">
            <div className="col-12 col-lg-6">
              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>High-quality courses.</h3>
                <p className={styles.featureText}>
                  Our courses are created using high-quality mics and studios. The biggest
                  difference between us and other platforms is the quality and content of
                  our courses. Maxmi&apos;s ultimate goal is always to provide everyone with
                  high-quality and valuable courses.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>Top-notch trainers.</h3>
                <p className={styles.featureText}>
                  Our courses are developed by industry-leading experts and skilled educators.
                  As a result, you can benefit from their wealth of experience, avoid common
                  mistakes, and achieve success more quickly and easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT + MAP ===== */}
      <section className={styles.contact}>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-5">
              <div className={styles.brand}>
                <img src="/icons/nav-logo.svg" alt="" />
              </div>

              <ul className={styles.infoList}>
                <li>
                  <span className={styles.dot}></span>
                  2nd Durgapur Union, Amtoli, Adasa sadar, Cumilla
                </li>
                <li>
                  <span className={styles.dot}></span>
                  01601069250
                </li>
                <li>
                  <span className={styles.dot}></span>
                  Support@mexemy.com
                </li>
                <li>
                  <span className={styles.dot}></span>
                  Licence no : 2022191679401304
                </li>
                <li>
                  <span className={styles.dot}></span>
                  Business type: E-learning
                </li>
              </ul>

              <div className={styles.contactSocial}>
                <a className={styles.socialBtn} href="#" aria-label="facebook">
                  <img src="/icons/f-about.svg" alt="" />
                </a>
                <a className={styles.socialBtn} href="#" aria-label="youtube">
                  <img src="/icons/y-about.svg" alt="" />
                </a>
                <a className={styles.socialBtn} href="#" aria-label="instagram">
                  <img src="/icons/in-about.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className={styles.mapWrap}>
                <iframe
                  title="mexemy map"
                  src="https://www.google.com/maps?q=Cumilla%20Bangladesh&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PURPLE STRIP ===== */}
      <div className={styles.bottomStrip}></div>
    </main>
  );
}