import { useMemo, useState } from "react";
import styles from "./LastGrid.module.css";

const latestCourse = {
  titleSmall: "Our latest course:",
  title: "Video Editing\nand Storytelling",
  cta: "Enroll Now",
  img: "/video-editing.png",
  video: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
};

const sections = [
  {
    title: "Active Courses",
    items: [
      {
        id: "ac1",
        title: "Web Design",
        img: "/Wordpress-web-design-and-ecommerce-course-update-3.0.webp.png",
        status: "active",
        video: "https://www.youtube.com/embed/rIPOJG3F3Vg",
      },
      {
        id: "ac2",
        title: "Video editing",
        img: "/video-editing.png",
        status: "active",
        video: "https://www.youtube.com/embed/q4OWKoUUjdY",
      },
      {
        id: "ac3",
        title: "Canva Designing",
        img: "/canva.png",
        status: "active",
        video: "https://www.youtube.com/embed/q4OWKoUUjdY?start=7",
      },
      {
        id: "ac4",
        title: "Affiliate Marketing",
        img: "/Affiliate.png",
        status: "active",
        video: "https://www.youtube.com/embed/itgmO78eK5I",
      },
    ],
  },
  {
    title: "Design and development",
    items: [
      {
        id: "dd1",
        title: "Web Design",
        img: "/Wordpress-web-design-and-ecommerce-course-update-3.0.webp.png",
        status: "active",
        video: "https://www.youtube.com/embed/rIPOJG3F3Vg",
      },
      { id: "dd2", title: "UI/UX Design", img: "/Ui-Ux.png", status: "soon" },
      { id: "dd3", title: "Shopify Ecommerce", img: "/shopify.png", status: "soon" },
      { id: "dd4", title: "WordPress & DIVI", img: "/DIVI.png", status: "soon" },
    ],
  },

  {
    title: "Marketplace",
    items: [
      { id: "mp1", title: "Fiverr Marketplace", img: "/fiverr.png", status: "soon" },
      { id: "mp2", title: "Upwork Marketplace", img: "/upwork.png", status: "soon" },
    ],
  },
  {
    title: "Editing & Design",
    items: [
      {
        id: "ed1",
        title: "Graphic Design",
        img: "/canva.png",
        status: "active",
        video: "https://www.youtube.com/embed/q4OWKoUUjdY?start=7",
      },
      { id: "ed2", title: "Digital Art & Illustration", img: "/art.png", status: "soon" },
      { id: "ed3", title: "3D Animation", img: "/animation.png", status: "soon" },
      { id: "ed4", title: "Video Editing Part 2", img: "/video-editing.png", status: "soon" },
    ],
  },
];

function CourseCard({ item, onOpenVideo, onAddToCart }) {
  const isActive = item.status === "active";

  return (
    <div className={styles.courseCard}>
      <button
        type="button"
        className={styles.coverBtn}
        onClick={() => item.video && onOpenVideo(item.video, item.title)}
        disabled={!item.video}
        aria-label={item.video ? `Play ${item.title}` : item.title}
      >
        <div className={styles.courseMedia}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </div>
      </button>

      <div className={styles.courseBody}>
        <div className={styles.courseTitle}>{item.title}</div>

        <div className={styles.courseActions}>
          {isActive ? (
            <>
              <button type="button" className={styles.enrollBtn} onClick={() => item.video && onOpenVideo(item.video, item.title)}>
                Enroll now <span className={styles.enrollIcon}><img src="/icons/enroll-down.svg" alt="" /></span>
              </button>

              <button type="button" className={styles.cartBtn} onClick={() => onAddToCart(item)}>
                + Cart
              </button>
            </>
          ) : (
            <button type="button" className={styles.soonBtn} disabled>
              Coming soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LastCourses() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  const cartCount = useMemo(() => cart.length, [cart]);

  const openVideo = (src, title) => {
    setVideoSrc(src);
    setVideoTitle(title);
    setOpen(true);
  };

  const closeVideo = () => {
    setOpen(false);
    setVideoSrc("");
    setVideoTitle("");
  };

  const addToCart = (item) => {
    setCart((prev) => {
      if (prev.some((x) => x.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  return (
    <section className={styles.page}>
      {/* ===== Latest Course (Hero) ===== */}
      <div className={styles.hero}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <p className={styles.small}>{latestCourse.titleSmall}</p>

              <h2 className={styles.title}>
                {latestCourse.title.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>

              <button
                className={`btn ${styles.enrollYellow}`}
                type="button"
                onClick={() => openVideo(latestCourse.video, "Latest Course")}
              >
                {latestCourse.cta} <img src="/icons/arrow.svg" alt="" className={styles.yellowDot} />
              </button>

              <div className={styles.cartHint}>
                Cart: <b>{cartCount}</b>
              </div>
            </div>

            <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div className={styles.heroCard}>
                <div className={styles.heroMedia}>
                  <img src={latestCourse.img} alt="Latest Course" />
                </div>
                <div className={styles.heroFooter}>
                  <div className={styles.heroFooterTitle}>Video Editing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Courses Grid Page ===== */}
      <div className={styles.listWrap}>
        <div className="container py-4">
          {sections.map((sec) => (
            <div key={sec.title} className={styles.block}>
              <h3 className={styles.blockTitle}>{sec.title}</h3>

              <div className={styles.grid}>
                {sec.items.map((item) => (
                  <CourseCard
                    key={item.id}
                    item={item}
                    onOpenVideo={openVideo}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Modal فيديو ===== */}
      {open && (
        <div className={styles.modalOverlay} onClick={closeVideo}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalTop}>
              <div className={styles.modalTitle}>{videoTitle}</div>
              <button className={styles.modalClose} onClick={closeVideo} aria-label="Close">
                ✕
              </button>
            </div>

            <div className={styles.iframeWrap}>
              <iframe
                src={videoSrc}
                title={videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}