import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./LastGrid.module.css";
import { useCart } from "../../../../CartContext";

const latestCourse = {
  titleSmall: "Our latest course:",
  title: "Video Editing\nand Storytelling",
  cta: "Enroll Now",
  img: "/video-editing.png",
  video: "https://www.youtube.com/embed/5gzWSz6xmwM?si=EZQdrzboOI6ickP6",
};

const middleHero = {
  title: "Incompetent\nyouth society,\nSkillfully raised,\nOur new\nPathway",
  img: "/course-banner-11.png",
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
        video: "https://www.youtube.com/embed/5gzWSz6xmwM?si=EZQdrzboOI6ickP6",
      },
      {
        id: "ac3",
        title: "Canva Designing",
        img: "/canva.png",
        status: "active",
        video: "https://www.youtube.com/embed/JpOlIzTVRic?si=wrQalz0iVvnbJa2f",
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
        video: "https://www.youtube.com/embed/JpOlIzTVRic?si=wrQalz0iVvnbJa2f",
      },
      { id: "ed2", title: "Digital Art & Illustration", img: "/art.png", status: "soon" },
      { id: "ed3", title: "3D Animation", img: "/animation.png", status: "soon" },
      { id: "ed4", title: "Video Editing Part 2", img: "/video-editing.png", status: "soon" },
    ],
  },
];

const extraSections = [
  {
    title: "Digital Marketing",
    items: [
      { id: "dm1", title: "Facebook Marketing", img: "/facebook-marketing.png", status: "soon" },
      { id: "dm2", title: "SEO", img: "/SEO.png", status: "soon" },
      { id: "dm3", title: "Email marketing", img: "/e-mail-market.png", status: "soon" },
      { id: "dm4", title: "Google Ad", img: "/google-ad.png", status: "soon" },
    ],
  },
  {
    title: "Creative & Passion",
    items: [
      { id: "cp1", title: "Photography", img: "/photography.png", status: "soon" },
      { id: "cp2", title: "Drawing & Art", img: "/drawing-art.png", status: "soon" },
      { id: "cp3", title: "Content Creation", img: "/content-creation.png", status: "soon" },
      { id: "cp4", title: "Ethical Hacking", img: "/ethical-hacking.png", status: "soon" },
    ],
  },
  {
    title: "Free Courses",
    items: [
      {
        id: "fc1",
        title: "Graphic Design",
        img: "/canva.png",
        status: "active",
        video: "https://www.youtube.com/embed/q4OWKoUUjdY?start=7",
      },
      { id: "fc2", title: "Microsoft Office", img: "/office.png", status: "soon" },
      { id: "fc3", title: "Quran Shikkha", img: "/quran.png", status: "soon" },
      { id: "fc4", title: "ChatGpt Ai", img: "/chatgpt.png", status: "soon" },
    ],
  },
];

function CourseCard({ item, onOpenVideo }) {
  const isActive = item.status === "active";
  const { toggleCart, isInCart } = useCart();
  const navigate = useNavigate();
  const inCart = isInCart(item.id);

  const goToCourse = () => {
    navigate(`/course/${item.id}`, { state: { course: item } });
  };

  return (
    <div className={styles.courseCard}>
      <button
        type="button"
        className={styles.coverBtn}
        onClick={goToCourse}
        aria-label={item.title}
      >
        <div className={styles.courseMedia}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </div>
      </button>

      <div className={styles.courseBody}>
        <button type="button" className={styles.courseTitleBtn} onClick={goToCourse}>
          {item.title}
        </button>

        <div className={styles.courseActions}>
          {isActive ? (
            <>
              <button
                type="button"
                className={styles.enrollBtn}
                onClick={() => item.video && onOpenVideo(item.video, item.title)}
              >
                Enroll now{" "}
                <span className={styles.enrollIcon}>
                  <img src="/icons/enroll-down.svg" alt="" />
                </span>
              </button>

              <button
                type="button"
                className={inCart ? styles.removeCartBtn : styles.cartBtn}
                onClick={() => toggleCart(item)}
              >
                {inCart ? "Remove From Cart" : "Add To Cart"}
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
  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search")?.toLowerCase().trim() || "";

  const filteredSections = useMemo(() => {
    if (!searchQuery) return sections;

    return sections
      .map((sec) => ({
        ...sec,
        items: sec.items.filter((item) =>
          item.title.toLowerCase().includes(searchQuery)
        ),
      }))
      .filter((sec) => sec.items.length > 0);
  }, [searchQuery]);

  const filteredExtraSections = useMemo(() => {
    if (!searchQuery) return extraSections;

    return extraSections
      .map((sec) => ({
        ...sec,
        items: sec.items.filter((item) =>
          item.title.toLowerCase().includes(searchQuery)
        ),
      }))
      .filter((sec) => sec.items.length > 0);
  }, [searchQuery]);

  const hasAnyResults =
    filteredSections.length > 0 || filteredExtraSections.length > 0;

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

  return (
    <section className={styles.page}>
      {!searchQuery && (
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
                  {latestCourse.cta}
                  <img src="/icons/arrow.svg" alt="" className={styles.yellowDot} />
                </button>
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
      )}

      <div className={styles.listWrap}>
        <div className="container py-4">
          {searchQuery && (
            <div className={styles.searchResultText}>
              Search results for: <strong>{searchQuery}</strong>
            </div>
          )}

          {!hasAnyResults ? (
            <div className={styles.emptySearchBox}>No courses found.</div>
          ) : (
            <>
              {filteredSections.map((sec) => (
                <div key={sec.title}>
                  <div className={styles.block}>
                    <h3 className={styles.blockTitle}>{sec.title}</h3>

                    <div className={styles.grid}>
                      {sec.items.map((item) => (
                        <CourseCard
                          key={item.id}
                          item={item}
                          onOpenVideo={openVideo}
                        />
                      ))}
                    </div>
                  </div>

                  {!searchQuery && sec.title === "Editing & Design" && (
                    <div className={styles.middleHero}>
                      <div className="container">
                        <div className="row align-items-center g-4">
                          <div className="col-12 col-lg-6">
                            <h2 className={styles.middleTitle}>
                              {middleHero.title.split("\n").map((line, idx) => (
                                <span key={idx}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                            </h2>
                          </div>

                          <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center">
                            <div className={styles.middleVisual}>
                              <img src={middleHero.img} alt="Middle banner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {filteredExtraSections.map((sec) => (
                <div key={sec.title} className={styles.block}>
                  <h3 className={styles.blockTitle}>{sec.title}</h3>

                  <div className={styles.grid}>
                    {sec.items.map((item) => (
                      <CourseCard
                        key={item.id}
                        item={item}
                        onOpenVideo={openVideo}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {!searchQuery && (
                <div className={styles.infoSection}>
                  <div className="container">
                    <div className={styles.infoContent}>
                      <p className={styles.infoText}>
                        All of our courses are currently under review for recording, and
                        they will soon be published on our platform one by one. Stay
                        connected with us by following our Facebook and YouTube channels
                      </p>

                      <div className={styles.socialRow}>
                        <a href="https://web.facebook.com/mexemy.bd" target="_blank" className={styles.socialIcon} aria-label="Facebook">
                          <img src="/icons/facebook-down.svg" alt="Facebook" />
                        </a>

                        <a href="https://www.youtube.com/@mexemyclasses" target="_blank" className={styles.socialIcon} aria-label="YouTube">
                          <img src="/icons/youtube-down.svg" alt="YouTube" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

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