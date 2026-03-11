import { useMemo, useState } from "react";
import styles from "./top.module.css";

const data = [
  {
    id: 1,
    category: "Development",
    title: "Learning JavaScript With Imagination",
    instructor: "David Miller",
    rating: 4.8,
    reviews: 48,
    price: 9.0,
    oldPrice: 29.0,
    lessons: 5,
    duration: "1h 20m",
    students: 22,
    accent: "orange",
    image: "/development.png",
    avatar:"/miller.png",
  },
  {
    id: 2,
    category: "Design",
    title: "The Complete Graphic Design for Beginners",
    instructor: "Wilson",
    rating: 4.5,
    reviews: 45,
    price: 10.0,
    oldPrice: 20.0,
    lessons: 60,
    duration: "70h 45m",
    students: 202,
    accent: "green",
    image: "/design.png",
    avatar:"/wilson.png",
  },
  {
    id: 3,
    category: "Data Science",
    title: "Learning JavaScript With Imagination",
    instructor: "Warren",
    rating: 4.8,
    reviews: 48,
    price: 20.0,
    oldPrice: null,
    lessons: 8,
    duration: "1h 20m",
    students: 66,
    accent: "pink",
    image: "/data-science.png",
    avatar:"/warren.png",
  },
  {
    id: 4,
    category: "Business",
    title: "Financial Analyst Training & Investing Course",
    instructor: "Robert Fox",
    rating: 4.2,
    reviews: 42,
    price: 15.0,
    oldPrice: 20.0,
    lessons: 5,
    duration: "1h 20m",
    students: 22,
    accent: "blue",
    image: "/business.png",
    avatar:"/robert.png",
  },
];

const tabs = ["All Courses", "Design", "Business", "Development"];

function Stars({ value }) {

  return (
    <span className={styles.star}>
      <img src="/icons/Symbol-star.svg" alt="" /><span className={styles.starValue}>{value}</span>
    </span>
  );
}

export default function Top() {
  const [active, setActive] = useState("All Courses");

  const filtered = useMemo(() => {
    if (active === "All Courses") return data;
    return data.filter((c) => c.category === active);
  }, [active]);

  return (
    <section className={styles.Top}>
      <div className="container-fluid px-4">
        <div className={styles.header}>
          <span className={styles.badge}>Top Class Courses</span>

          <h2 className={`fw-bold mb-3 mt-3 ${styles.h2}`}>Explore Our World's Best Courses</h2>
          <p className={styles.sub}>
            When known printer took a galley of type scrambled make.
          </p>

          <div className={styles.tabs}>
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={`${styles.tab} ${active === t ? styles.tabActive : ""}`}
              >
                {t}
              </button>
            ))}
            <div className={styles.tabLine}></div>
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.slice(0, 4).map((c) => (
            <article key={c.id} className={styles.card}>
              <div className={`${styles.cover} ${styles[c.accent]}`}>

                <img
                  src={c.image}
                  alt={c.title}
                  className={styles.coverImg}
                  onError={(e) => console.log("Image failed:", e.currentTarget.src)}
                />
              </div>

              <div className={styles.body}>
                <div className={styles.metaRow}>
                  <span className={styles.cat}>{c.category}</span>
                  <div className={styles.price}>
                    {c.oldPrice ? (
                      <span className={styles.old}>${c.oldPrice.toFixed(2)}</span>
                    ) : null}
                    <span className={styles.new}>${c.price.toFixed(2)}</span>
                  </div>
                </div>

                <h3 className={styles.title}>{c.title}</h3>

                <div className={styles.authorRow}>
                  <img src={c.avatar} alt="" />
                  <span className={styles.instructor}>{c.instructor}</span>

                  <div className={styles.rating}>
                    <Stars value={c.rating} />
                    <span className={styles.reviews}>({c.reviews} Reviews)</span>
                  </div>
                </div>

                <div className={styles.footer}>
                  <span className={styles.fItem}><img src="/public/icons/lesson → Item.svg" alt="" /> {c.lessons}</span>
                  <span className={styles.fItem}><img src="/public/icons/clock → Item.svg" alt="" /> {c.duration}</span>
                  <span className={styles.fItem}><img src="/public/icons/graduation → Item.svg" alt="" /> {c.students}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <button className={`btn ${styles.primaryBtn}`}type="button">
            See All Courses <span className={styles.ctaArrow}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}