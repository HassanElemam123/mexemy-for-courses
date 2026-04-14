import { Link } from "react-router-dom";
import styles from "./Instructors.module.css";
import { instructors } from "./instructorsData";

function getInitials(name) {
  return name
    .replace(/&/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function Instructors() {
  const totalCourses = instructors.reduce(
    (sum, instructor) => sum + instructor.courseCount,
    0,
  );

  const totalLessons = instructors.reduce(
    (sum, instructor) => sum + instructor.totalLessons,
    0,
  );

  const featured = instructors.slice(0, 3);

  return (
    <section className={styles.instructorsPage}>
      <div className="container">
        <div className={styles.heroBox}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Affiliate Instructors</span>

            <h1 className={styles.heroTitle}>
              Meet the instructors behind the courses
            </h1>

            <p className={styles.heroText}>
              Explore the teaching team behind Mexemy. Every instructor here has
              a dedicated profile page with their teaching style, course list,
              and a more complete introduction to what they help learners build.
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
              <strong>{totalCourses}</strong>
              <span>Courses</span>
            </div>

            <div className={styles.statCard}>
              <strong>{totalLessons}+</strong>
              <span>Total Lessons</span>
            </div>
          </div>
        </div>

        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>Featured Profiles</span>
            <h2>Start with a few highlighted mentors</h2>
          </div>

          <p>
            Each instructor profile is now a separate page, so learners can know
            the person behind the teaching before jumping into the course.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {featured.map((instructor) => (
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

                <p className={styles.featuredText}>{instructor.summary}</p>

                <div className={styles.courseTags}>
                  {instructor.tracks.map((track) => (
                    <span key={track}>{track}</span>
                  ))}
                </div>

                <div className={styles.metaGrid}>
                  <div>
                    <strong>Experience</strong>
                    <span>{instructor.experience}</span>
                  </div>

                  <div>
                    <strong>Courses</strong>
                    <span>{instructor.courseCount}</span>
                  </div>

                  <div>
                    <strong>Lessons</strong>
                    <span>{instructor.totalLessons}</span>
                  </div>

                  <div>
                    <strong>Style</strong>
                    <span>{instructor.teachingStyle}</span>
                  </div>
                </div>

                <Link
                  to={`/affiliate/instructors/${instructor.slug}`}
                  className={styles.profileBtn}
                >
                  View Full Profile
                </Link>
              </article>
            </div>
          ))}
        </div>

        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>All Instructors</span>
            <h2>The full teaching team</h2>
          </div>

          <p>Browse every instructor and open a dedicated page for each one.</p>
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

                <p className={styles.cardBio}>{instructor.summary}</p>

                <div className={styles.cardMeta}>
                  <div className={styles.cardMetaItem}>
                    <span>Experience</span>
                    <strong>{instructor.experience}</strong>
                  </div>

                  <div className={styles.cardMetaItem}>
                    <span>Courses</span>
                    <strong>{instructor.courseCount}</strong>
                  </div>

                  <div className={styles.cardMetaItem}>
                    <span>Lessons</span>
                    <strong>{instructor.totalLessons}</strong>
                  </div>
                </div>

                <div className={styles.teachesBox}>
                  <span className={styles.teachesLabel}>Teaches</span>

                  <div className={styles.courseTags}>
                    {instructor.tracks.map((track) => (
                      <span key={track}>{track}</span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/affiliate/instructors/${instructor.slug}`}
                  className={styles.profileBtn}
                >
                  Open Profile
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
