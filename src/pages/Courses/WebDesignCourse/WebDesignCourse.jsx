import styles from "./WebDesignCourse.module.css";

const lessons = [
  {
    id: 1,
    title: "Introduction to Web Design",
    video: "https://www.youtube.com/embed/FJV41wBgMls?si=fy6p7lA9GFj2w0uz",
    duration: "26:20",
  },
  {
    id: 2,
    title: "Layouts and Structure",
    video: "https://www.youtube.com/embed/by8f2vYoJAE?si=CQBVZNEJ3bKqn-eJ",
    duration: "8:07",
  },
  {
    id: 3,
    title: "Typography and Colors",
    video: "https://www.youtube.com/embed/Id8Kl1eDI7w",
    duration: "11:48",
  },
  {
    id: 4,
    title: "Responsive Design Basics",
    video: "https://www.youtube.com/embed/l04dDYW-QaI?si=7L_zy-zhib3F5FQr",
    duration: "17:31",
  },
];

export default function WebDesignCourse() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.badge}>Course Lessons</span>
            <h1 className={styles.title}>Web Design Course</h1>
            <p className={styles.text}>
              Start learning web design step by step through these course videos.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className="row g-4">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="col-12 col-lg-6">
                <div className={styles.card}>
                  <div className={styles.videoWrap}>
                    <iframe
                      src={lesson.video}
                      title={lesson.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.lessonTop}>
                      <span className={styles.lessonNumber}>
                        Lesson {lesson.id}
                      </span>
                      <span className={styles.lessonDuration}>
                        {lesson.duration}
                      </span>
                    </div>

                    <h3 className={styles.lessonTitle}>{lesson.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}