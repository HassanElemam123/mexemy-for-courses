import styles from "./Blogs.module.css";
import { NavLink } from "react-router-dom";


export default function Blogs() {
  const blogs = [
    {
      id: 1,
      tag: "Marketing",
      title: "How To Become ridiculously Self-Aware In 20 Minutes",
      date: "20 July, 2024",
      author: "Admin",
      img: "/blog-marketing01.png",
    },
    {
      id: 2,
      tag: "Students",
      title: "Get Started With Ui Design With Tips To Speed",
      date: "20 July, 2024",
      author: "Admin",
      img: "/blog-marketing02.png",
    },
    {
      id: 3,
      tag: "Science",
      title: "Make Your Own Expanding Contracting Content",
      date: "20 July, 2024",
      author: "Admin",
      img: "/blog-marketing03.png",
    },
    {
      id: 4,
      tag: "Agency",
      title: "What we are capable to usually discovered",
      date: "20 July, 2024",
      author: "Admin",
      img: "/blog-marketing04.png",
    },
  ];

  return (
    <>
      <section className={styles.section}>
        <div className="container-fluid px-4">
          <div className="text-center mb-4">
            <span className={`rounded-pill ${styles.pill}`}>News &amp; Blogs</span>
            <h2 className={styles.h2}>Our Latest News Feed</h2>
            <p className={styles.sub}>
              when known printer took a galley of type scrambl edmake
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {blogs.map((b) => (
              <div key={b.id} className="col-12 col-sm-6 col-lg-3">
                <article className={styles.card}>
                  <div className={styles.imgWrap}>
                    <img src={b.img} alt={b.title} />
                    <span className={styles.tag}>{b.tag}</span>
                  </div>

                  <div className={styles.body}>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}>
                        <span className={styles.icon}>
                          <img src="/icons/calender.svg" alt="" />
                        </span>
                        {b.date}
                      </span>

                      <span className={styles.metaDot}></span>

                      <span className={styles.metaItem}>
                        <span className={styles.icon}>
                          <img src="/icons/admin.svg" alt="" />
                        </span>
                        by {b.author}
                      </span>
                    </div>

                    <h3 className={styles.title}>{b.title}</h3>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Cards Section (White) ===== */}
      <section className={`mt-5 ${styles.ctaSection}`}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Instructor */}
            <div className="col-12 col-lg-6">
              <div className={styles.ctaCard}>
                <div className={styles.ctaRow}>

                  <div className={`${styles.ctaImgWrap} ${styles.yellowLeft}`}>
                    <img src="/cta-instructor.png" alt="Become a Instructor" />
                  </div>

                  <div className={styles.ctaContent}>
                    <h4 className={styles.ctaTitle}>Become a Instructor</h4>
                    <p className={styles.ctaText}>
                      To take a trivial example, which of us undertakes physical
                      exercise yes is this happen here.
                    </p>

                    <NavLink to="/affiliate/join" className={`btn ${styles.ctaBtn} ${styles.primaryBtn}`}>
                      Apply Now
                      <span className={styles.ctaArrow}>
                        <img src="/icons/btn-arrow.svg" alt="" />
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Student */}
            <div className="col-12 col-lg-6">
              <div className={styles.ctaCard}>
                <div className={styles.ctaRow}>

                  <div className={`${styles.ctaImgWrap} ${styles.yellowLeft}`}>
                    <img src="/cta-students.png" alt="Become a Student" />
                  </div>

                  <div className={styles.ctaContent}>
                    <h4 className={styles.ctaTitle}>Become a Student</h4>
                    <p className={styles.ctaText}>
                      Join millions of people from around the world learning
                      together. Online learning.
                    </p>

                    <NavLink to="/register" className={`btn ${styles.ctaBtn} ${styles.primaryBtn}`}>
                      Apply Now
                      <span className={styles.ctaArrow}>
                        <img src="/icons/btn-arrow.svg" alt="" />
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}