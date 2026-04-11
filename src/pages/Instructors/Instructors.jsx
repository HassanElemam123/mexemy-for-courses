import { Link } from "react-router-dom";
import styles from "./Instructors.module.css";
import { instructors } from "./instructorsData";

const featuredNames = ["Simon & Olivia Mia", "Mohamed Tarek", "Mina Adel"];

function getInitials(name) {
  return name
    .replace("&", " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function Instructors() {
  const featuredInstructors = instructors.filter((item) =>
    featuredNames.includes(item.name),
  );

  const allTracks = [...new Set(instructors.flatMap((item) => item.courses))];

  return (
    <section className={styles.instructorsPage}>
      <div className="container">
        <div className={styles.heroBox}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Affiliate Instructors</span>

            <h1 className={styles.heroTitle}>
              Learn from the instructors behind your courses
            </h1>

            <p className={styles.heroText}>
              This page brings together the real instructor names already used
              in your course data and presents them in a larger, more complete
              experience that matches the visual identity of the site.
            </p>

            <div className={styles.heroActions}>
              <Link to="/courses" className={styles.primaryBtn}>
                Explore Courses
              </Link>

              <Link to="/affiliate/join" className={styles.secondaryBtn}>
                Join Affiliate
              </Link>
            </div>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <strong>{instructors.length}</strong>
              <span>Instructors</span>
            </div>

            <div className={styles.statCard}>
              <strong>{allTracks.length}</strong>
              <span>Teaching Tracks</span>
            </div>

            <div className={styles.statCard}>
              <strong>Beginner → Advanced</strong>
              <span>Different Levels</span>
            </div>
          </div>
        </div>

        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>Featured Mentors</span>
            <h2>Highlighted instructors from the platform</h2>
          </div>

          <p>
            A few standout teaching profiles that represent the tone of the
            learning experience across design, video, and product-focused
            training.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {featuredInstructors.map((instructor) => (
            <div className="col-lg-4" key={instructor.id}>
              <article className={styles.featuredCard}>
                <div className={styles.featuredTop}>
                  <div className={styles.avatarLg}>
                    {getInitials(instructor.name)}
                  </div>

                  <div>
                    <h3>{instructor.name}</h3>
                    <p>{instructor.role}</p>
                  </div>
                </div>

                <p className={styles.featuredText}>{instructor.tagline}</p>

                <div className={styles.courseTags}>
                  {instructor.courses.map((course) => (
                    <span key={course}>{course}</span>
                  ))}
                </div>

                <div className={styles.metaGrid}>
                  <div>
                    <strong>Language</strong>
                    <span>{instructor.language}</span>
                  </div>
                  <div>
                    <strong>Level</strong>
                    <span>{instructor.level}</span>
                  </div>
                  <div>
                    <strong>Duration</strong>
                    <span>{instructor.duration}</span>
                  </div>
                  <div>
                    <strong>Style</strong>
                    <span>{instructor.teachingStyle}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>All Instructors</span>
            <h2>The full teaching team</h2>
          </div>

          <p>
            A larger directory view that gives every instructor a place on the
            page and keeps the design aligned with the rest of the site.
          </p>
        </div>

        <div className="row g-4">
          {instructors.map((instructor) => (
            <div className="col-md-6 col-xl-4" key={instructor.id}>
              <article className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.avatarSm}>
                    {getInitials(instructor.name)}
                  </div>

                  <div>
                    <h3 className={styles.cardName}>{instructor.name}</h3>
                    <p className={styles.cardRole}>{instructor.role}</p>
                  </div>
                </div>

                <p className={styles.cardBio}>{instructor.tagline}</p>

                <div className={styles.cardMeta}>
                  <div className={styles.cardMetaItem}>
                    <span>Course Level</span>
                    <strong>{instructor.level}</strong>
                  </div>

                  <div className={styles.cardMetaItem}>
                    <span>Language</span>
                    <strong>{instructor.language}</strong>
                  </div>

                  <div className={styles.cardMetaItem}>
                    <span>Duration</span>
                    <strong>{instructor.duration}</strong>
                  </div>
                </div>

                <div className={styles.teachesBox}>
                  <span className={styles.teachesLabel}>Teaches</span>

                  <div className={styles.courseTags}>
                    {instructor.courses.map((course) => (
                      <span key={course}>{course}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.styleBox}>
                  <span className={styles.styleLabel}>Teaching Style</span>
                  <p>{instructor.teachingStyle}</p>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className={styles.trackSection}>
          <div className={styles.sectionHeadAlt}>
            <div>
              <span className={styles.sectionLabel}>Teaching Areas</span>
              <h2>Skills covered by the instructors page</h2>
            </div>

            <p>
              These teaching areas are taken from the actual course topics
              already present in your project.
            </p>
          </div>

          <div className={styles.trackGrid}>
            {allTracks.map((track) => (
              <span key={track} className={styles.trackChip}>
                {track}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.bottomBox}>
          <div>
            <span className={styles.sectionLabel}>Why this page works</span>
            <h2>A larger page that feels native to the project</h2>
            <p>
              Instead of a small placeholder layout, this version makes the
              instructors section feel like a real part of the platform: more
              content, more structure, and colors that stay consistent with the
              rest of Mexemy.
            </p>
          </div>

          <div className={styles.bottomActions}>
            <Link to="/about" className={styles.primaryBtn}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
