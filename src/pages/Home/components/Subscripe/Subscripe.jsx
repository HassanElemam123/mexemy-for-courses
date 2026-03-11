import styles from "./Subscripe.module.css";
import { useState } from "react";


export default function Subscripe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!email.trim()) return alert("Write your E-mail first");
    alert(`Subscribed: ${email}`);
    setEmail("");
  };




  const cards = [
    {
      id: 1,
      date: "25 June, 2024",
      title: "The Accessible Target Sizes Cheatsheet",
      location: "United Kingdom",
      img: "/thump01.png",
    },
    {
      id: 2,
      date: "25 June, 2024",
      title: "Exactly How Technology Can Make Reading",
      location: "Tokyo Japan",
      img: "/thump02.png",
    },
    {
      id: 3,
      date: "25 June, 2024",
      title: "Aewe Creating Futures Through Technology",
      location: "New Work",
      img: "/thump03.png",
    },
  ];

  return (
    <section className={styles.section}>
      {/* ---------- Subscribe Bar ---------- */}
      <div className={` ${styles.subscribeWrap}`}>
        <div className={styles.subscribeBar}>
          <div className="row align-items-center g-4">
            <div className="col-lg-3 d-none d-lg-block">
              <img
                className={styles.heroImg}
                src="/newsletter.png"
                alt="person"
              />
            </div>

            <div className="col-lg-9">
              <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 justify-content-between">
                <h3 className={styles.subscribeTitle}>
                  Want To Stay <span>Informed</span> About
                  <br />
                  New <span>Courses</span> &amp; Study?
                </h3>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="Type Your E-Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className={` ${styles.subBtn}`} type="submit">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </div>
      </div>

      {/* ---------- Events Section ---------- */}
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          {/* Left text */}
          <div className={`col-lg-4 ${styles.content}`}>
            <span className={styles.badge}>Upcoming Events</span>
            <h2 className={styles.h2}>
              Join Our Community
              <br />
              And Make It Bigger
            </h2>
            <p className={styles.p}>
              Edhen an unknown printer took a galley of type and scrambled it to
              make a type specimen books centuries.
            </p>

            <button className={`btn ${styles.primaryBtn}`}>
              See All Events <span className={styles.arrow}>→</span>
            </button>
          </div>

          {/* Right cards */}
          <div className="col-lg-8">
            <div className={styles.cardsWrap}>
              <div className="row g-3">
                {cards.map((c) => (
                  <div key={c.id} className="col-md-4">
                    <div className={styles.card}>
                      <div className={styles.cardImgWrap}>
                        <img src={c.img} alt={c.title} />
                        <span className={styles.date}>{c.date}</span>
                      </div>

                      <div className={styles.cardBody}>
                        <h6 className={styles.cardTitle}>{c.title}</h6>
                        <div className={styles.loc}>
                          <span className={styles.pin}>
                            <img src="/icons/location.svg" alt="" />
                          </span>
                          {c.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}