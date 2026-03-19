import { NavLink } from "react-router-dom";
import styles from "./AboutResource.module.css";

const features = [
  {
    id: 1,
    title: "Curated Tools",
    text: "We collect the most useful tools, platforms, and resources to help students and beginners learn faster without wasting time searching.",
  },
  {
    id: 2,
    title: "Practical Learning",
    text: "Our resource pages focus on real tools that can be used directly in courses, freelance work, design practice, and daily learning.",
  },
  {
    id: 3,
    title: "Easy Access",
    text: "Everything is organized in a simple way so you can quickly discover what you need and move directly to the next learning step.",
  },
];

const steps = [
  {
    id: 1,
    title: "Explore",
    text: "Browse the available resources and discover the most relevant tools for your learning path.",
  },
  {
    id: 2,
    title: "Choose",
    text: "Pick the platform, website, or tool that matches your course, skill level, and goals.",
  },
  {
    id: 3,
    title: "Apply",
    text: "Use the selected resources in your practice, projects, and study routine to improve faster.",
  },
];

export default function AboutResource() {
  return (
    <main className={styles.page}>
      {/* hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>About Resources</h1>
            <p className={styles.heroText}>
              Helpful tools, platforms, and materials designed to support your
              learning journey and make skill-building easier.
            </p>
          </div>
        </div>
      </section>

      {/* intro */}
      <section className={styles.introSection}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <div className={styles.introContent}>
                <span className={styles.badge}>Why Resources Matter</span>
                <h2 className={styles.sectionTitle}>
                  Learn with the right tools and save your time
                </h2>
                <p className={styles.introText}>
                  A good resource page is not only a collection of links. It is
                  a shortcut to better learning. We aim to provide selected
                  websites, builders, channels, and tools that students can
                  actually use while improving their skills.
                </p>
                <p className={styles.introText}>
                  Instead of wasting time trying random tools, you can focus on
                  trusted resources that support practice, productivity, and
                  stronger results.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center">
              <img
                src="/resource-about.png"
                alt="Resources"
                className={styles.introImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className={styles.centerTitle}>What makes our resources useful</h2>

          <div className="row g-4">
            {features.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <div className={styles.featureCard}>
                  <div className={styles.featureNumber}>0{item.id}</div>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* steps */}
      <section className={styles.stepsSection}>
        <div className="container">
          <div className="text-center mb-5">
            <span className={styles.badge}>Simple Process</span>
            <h2 className={styles.centerTitle}>How to use these resources</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {steps.map((step) => (
              <div key={step.id} className="col-12 col-md-6 col-lg-4">
                <div className={styles.stepCard}>
                  <div className={styles.stepCircle}>{step.id}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Start exploring helpful resources</h2>
            <p className={styles.ctaText}>
              Browse the resource library and discover useful tools for design,
              development, productivity, and learning.
            </p>

            <NavLink to="/resource/data" className={`btn ${styles.ctaBtn}`}>
              Explore Resources
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}