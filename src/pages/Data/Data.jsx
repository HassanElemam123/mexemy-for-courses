import styles from "./Data.module.css";

const resources = [
  {
    id: 1,
    title: "Elementor",
    desc: "Elementor is a drag-and-drop page builder for WordPress. This plugin helps you create beautiful pages using a visual editor. It's designed for you to build pages quickly.",
    img: "/elementor.png",
    btn: "Get Now",
  },
  {
    id: 2,
    title: "Blocksy",
    desc: "Blocksy is a forever free WordPress theme that's optimized to work with the new block-based content editing interface in WordPress. The theme was built using modern web technologies.",
    img: "/Blocksy.png",
    btn: "Get Now",
  },
  {
    id: 3,
    title: "Namehero",
    desc: "Name Hero offers high speed WordPress hosting for your website. Reseller hosting & VPS hosting experts powering thousands of happy customers!",
    img: "/Name-Hero.png",
    btn: "Get Now",
  },
  {
    id: 4,
    title: "Local WP",
    desc: "Local WP is a free software for Windows, Mac, Linux which helps users to install WordPress cms on their pc for free. This software helps users install WordPress locally using their computer.",
    img: "/wp.png",
    btn: "Download",
  },
  {
    id: 5,
    title: "Our Youtube",
    desc: "We have the biggest resource of knowledge on our youtube channel, everything related to skill development, productivity, life skills, career, student life and goals.",
    img: "/youtube_logo.png",
    btn: "Visit channel",
    link: "https://www.youtube.com/@mexemyclasses",
  },
  {
    id: 6,
    title: "dribbble",
    desc: "Dribbble is an online portfolio platform for every types of designers and developers where you can upload your own designs or take inspirations from others to design your own things.",
    img: "/dribble.png",
    btn: "Get Now",
  },
];

export default function Data() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>Web design.</h1>
            <p className={styles.heroSub}>Resources and materials.</p>
          </div>
        </div>
      </section>

      {/* Step Section */}
      <section className={styles.stepSection}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <div className={styles.stepContent}>
                <span className={styles.stepLabel}>Step 1</span>
                <h2 className={styles.stepTitle}>Choose your domain</h2>

                <form className={styles.domainForm}>
                  <span className={styles.domainPrefix}>www.</span>

                  <input
                    type="text"
                    className={styles.domainInput}
                    placeholder="desired-domain"
                  />

                  <select className={styles.domainSelect}>
                    <option>.com</option>
                    <option>.net</option>
                    <option>.org</option>
                  </select>

                  <button type="button" className={styles.checkBtn}>
                    check
                  </button>
                </form>
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center">
              <img
                src="/domain.png"
                alt="Domain Search"
                className={styles.stepImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rocket Section */}
      <section className={styles.rocketSection}>
        <div className="container text-center">
          <img
            src="/rocket.png"
            alt="Rocket"
            className={styles.rocketImg}
          />
        </div>
      </section>

      {/* Resources Section */}
      <section className={styles.resourcesSection}>
        <div className="container">
          <h2 className={styles.resourcesTitle}>Recources that you need</h2>

          <div className="row g-4 justify-content-center">
            {resources.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-lg-4">
                <div className={styles.resourceCard}>
                  <div className={styles.resourceIconWrap}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={styles.resourceIcon}
                    />
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>

                  <a
                    href={item.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardBtn}
                  >
                    {item.btn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}