import { Link, useParams } from "react-router-dom";
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

export default function SingleInstructor() {
  const { slug } = useParams();

  const instructor = instructors.find((item) => item.slug === slug);

  if (!instructor) {
    return (
      <section className={styles.instructorsPage}>
        <div className="container">
          <div className={styles.notFoundBox}>
            <span className={styles.heroBadge}>Instructor</span>
            <h1 className={styles.notFoundTitle}>Instructor not found</h1>
            <p className={styles.notFoundText}>
              The profile you are looking for does not exist or may have been
              moved.
            </p>
            <Link to="/affiliate/instructors" className={styles.primaryBtn}>
              Back to Instructors
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.instructorsPage}>
      <div className="container">
        <div className={styles.singleHeader}>
          <Link to="/affiliate/instructors" className={styles.backLink}>
            ← Back to Instructors
          </Link>

          <div className={styles.singleHero}>
            <div className={styles.singleTop}>
              <div className={styles.avatarXl}>
                {getInitials(instructor.name)}
              </div>

              <div>
                <span className={styles.heroBadge}>Instructor Profile</span>
                <h1 className={styles.singleTitle}>{instructor.name}</h1>
                <p className={styles.singleRole}>{instructor.role}</p>
              </div>
            </div>

            <p className={styles.singleSummary}>{instructor.summary}</p>

            <div className={styles.singleStats}>
              <div className={styles.singleStatCard}>
                <strong>{instructor.experience}</strong>
                <span>Experience</span>
              </div>

              <div className={styles.singleStatCard}>
                <strong>{instructor.courseCount}</strong>
                <span>Courses</span>
              </div>

              <div className={styles.singleStatCard}>
                <strong>{instructor.totalLessons}</strong>
                <span>Total Lessons</span>
              </div>

              <div className={styles.singleStatCard}>
                <strong>{instructor.languages}</strong>
                <span>Languages</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-7">
            <div className={styles.infoBox}>
              <span className={styles.sectionLabel}>About</span>
              <h2>Who this instructor is</h2>
              <p>{instructor.about}</p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className={styles.infoBox}>
              <span className={styles.sectionLabel}>Teaching Style</span>
              <h2>How they teach</h2>

              <div className={styles.infoList}>
                <div>
                  <strong>Style</strong>
                  <span>{instructor.teachingStyle}</span>
                </div>

                <div>
                  <strong>Focus</strong>
                  <span>{instructor.focus}</span>
                </div>

                <div>
                  <strong>Levels</strong>
                  <span>{instructor.levels}</span>
                </div>

                <div>
                  <strong>Languages</strong>
                  <span>{instructor.languages}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionLabel}>
              Courses by this instructor
            </span>
            <h2>What they currently teach</h2>
          </div>

          <p>
            Every course below is already connected to this instructor based on
            the current course data in your project.
          </p>
        </div>

        <div className="row g-4">
          {instructor.courses.map((course) => (
            <div className="col-md-6" key={course.id}>
              <article className={styles.courseCard}>
                <div className={styles.courseCardTop}>
                  <span className={styles.courseBadge}>{course.level}</span>
                  <span className={styles.courseLessons}>
                    {course.lessons} lessons
                  </span>
                </div>

                <h3>{course.title}</h3>
                <p>{course.description}</p>

                <div className={styles.courseMeta}>
                  <div>
                    <strong>Duration</strong>
                    <span>{course.duration}</span>
                  </div>

                  <div>
                    <strong>Language</strong>
                    <span>{course.language}</span>
                  </div>
                </div>

                <Link to={`/course/${course.id}`} className={styles.profileBtn}>
                  Open Course
                </Link>
              </article>
            </div>
          ))}
        </div>

        <div className={styles.bottomBox}>
          <div>
            <span className={styles.sectionLabel}>Keep Exploring</span>
            <h2>Discover more instructors and courses</h2>
            <p>
              Move across the full instructors page or jump directly into the
              courses taught by this mentor.
            </p>
          </div>

          <div className={styles.bottomActions}>
            <Link to="/affiliate/instructors" className={styles.secondaryBtn}>
              All Instructors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
