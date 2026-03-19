import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../CartContext";
import { useAuth } from "../../AuthContext.jsx";
import styles from "./SingleCourse.module.css";

const fallbackCourses = {
  ac1: {
    id: "ac1",
    title: "Web Design",
    img: "/Wordpress-web-design-and-ecommerce-course-update-3.0.webp.png",
    video: "https://www.youtube.com/embed/rIPOJG3F3Vg",
    instructor: "Simon & Olivia Mia",
    duration: "1 Hour",
    level: "Beginner",
    lessons: 4,
    language: "English & Arabic",
    description:
      "Learn how to design modern and responsive websites with clean layouts, strong typography, and better user experience principles.",
    about:
      "This course is made for beginners who want to start web design from scratch. You will understand layout structure, visual hierarchy, spacing, typography, color combinations, and responsive thinking while working on practical examples.",
    learn: [
      "Understand web design principles",
      "Create responsive page layouts",
      "Use spacing and typography correctly",
      "Choose proper colors and visual hierarchy",
      "Design modern landing pages",
    ],
  },

  ac2: {
    id: "ac2",
    title: "Video editing",
    img: "/video-editing.png",
    video: "https://www.youtube.com/embed/q4OWKoUUjdY",
    instructor: "Mohamed Tarek",
    duration: "14 Hours",
    level: "Intermediate",
    lessons: 18,
    language: "Arabic",
    description:
      "Master editing basics and storytelling methods to produce professional videos for social media, YouTube, and client projects.",
    about:
      "This course teaches practical video editing workflows, including cutting, pacing, audio sync, transitions, titles, and visual storytelling. It is ideal for creators and freelancers who want to improve content quality.",
    learn: [
      "Edit videos professionally",
      "Build strong storytelling flow",
      "Add transitions and titles correctly",
      "Improve sound and pacing",
      "Export for YouTube and social media",
    ],
  },

  ac3: {
    id: "ac3",
    title: "Canva Designing",
    img: "/canva.png",
    video: "https://www.youtube.com/embed/q4OWKoUUjdY?start=7",
    instructor: "Aymen singh",
    duration: "10 Hours",
    level: "Beginner",
    lessons: 16,
    language: "Indian",
    description:
      "Create eye-catching social media posts, business visuals, and presentations quickly using Canva tools and ready-made assets.",
    about:
      "This course is perfect for beginners, marketers, and freelancers who want to create fast and professional-looking designs without advanced software. It covers templates, branding, layouts, and practical design usage.",
    learn: [
      "Use Canva professionally",
      "Create social media designs",
      "Design presentations and thumbnails",
      "Build simple brand assets",
      "Work faster using templates",
    ],
  },

  ac4: {
    id: "ac4",
    title: "Affiliate Marketing",
    img: "/Affiliate.png",
    video: "https://www.youtube.com/embed/itgmO78eK5I",
    instructor: "Mark Shown",
    duration: "12 Hours",
    level: "Beginner",
    lessons: 20,
    language: "English",
    description:
      "Understand affiliate marketing models, traffic sources, and how to promote products effectively to earn commissions.",
    about:
      "This course introduces the basics of affiliate marketing and shows how to pick offers, write promotion content, track links, and improve conversion performance over time.",
    learn: [
      "Understand affiliate systems",
      "Choose profitable offers",
      "Create promotional content",
      "Drive traffic to offers",
      "Track and optimize conversions",
    ],
  },

  dd1: {
    id: "dd1",
    title: "Web Design",
    img: "/Wordpress-web-design-and-ecommerce-course-update-3.0.webp.png",
    video: "https://www.youtube.com/embed/rIPOJG3F3Vg",
    instructor: "Simon & Olivia Mia",
    duration: "1 Hour",
    level: "Beginner",
    lessons: 4,
    language: "English & Arabic",
    description:
      "Build strong web design skills and learn how to create visually balanced pages for modern websites and digital products.",
    about:
      "This course focuses on structure, layout, typography, color theory, and responsive presentation. It is ideal for students who want to start in design or work as freelance website designers.",
    learn: [
      "Design clean web pages",
      "Create responsive sections",
      "Use typography properly",
      "Improve user readability",
      "Build portfolio-ready projects",
    ],
  },

  dd2: {
    id: "dd2",
    title: "UI/UX Design",
    img: "/Ui-Ux.png",
    instructor: "Mina Adel",
    duration: "20 Hours",
    level: "Intermediate",
    lessons: 28,
    language: "English",
    description:
      "Learn user interface and user experience design from research to wireframes, visual design, and design systems.",
    about:
      "This course teaches the process of solving user problems through structured UX thinking and polished UI design. It covers user flows, wireframes, prototypes, and interface improvements.",
    learn: [
      "Understand UX thinking",
      "Create wireframes and user flows",
      "Design modern interfaces",
      "Build consistent design systems",
      "Improve user journey and usability",
    ],
  },

  dd3: {
    id: "dd3",
    title: "Shopify Ecommerce",
    img: "/shopify.png",
    instructor: "Yousef Samir",
    duration: "15 Hours",
    level: "Beginner",
    lessons: 19,
    language: "Arabic",
    description:
      "Start your ecommerce journey by building and customizing Shopify stores for products, brands, and online businesses.",
    about:
      "This course walks students through store setup, theme editing, product organization, collection pages, and ecommerce best practices for Shopify stores.",
    learn: [
      "Set up a Shopify store",
      "Organize products and collections",
      "Customize themes and sections",
      "Improve store appearance",
      "Understand basic ecommerce workflow",
    ],
  },

  dd4: {
    id: "dd4",
    title: "WordPress & DIVI",
    img: "/DIVI.png",
    instructor: "Karim Nabil",
    duration: "17 Hours",
    level: "Intermediate",
    lessons: 21,
    language: "Arabic",
    description:
      "Learn how to build professional WordPress websites using the DIVI builder with practical layout and customization techniques.",
    about:
      "This course focuses on using WordPress and DIVI together to create modern pages, service websites, and sales pages with flexible layout building and no-code techniques.",
    learn: [
      "Install and manage WordPress",
      "Use DIVI builder effectively",
      "Create landing pages and sections",
      "Customize layouts visually",
      "Build complete client websites",
    ],
  },

  mp1: {
    id: "mp1",
    title: "Fiverr Marketplace",
    img: "/fiverr.png",
    instructor: "Alaa Mostafa",
    duration: "8 Hours",
    level: "Beginner",
    lessons: 12,
    language: "Arabic",
    description:
      "Understand how Fiverr works and how to create gigs that attract buyers and generate freelance opportunities.",
    about:
      "This course helps beginners enter Fiverr with the right profile setup, gig writing, keyword usage, pricing strategy, and communication basics.",
    learn: [
      "Set up a strong Fiverr profile",
      "Create optimized gigs",
      "Choose gig keywords",
      "Improve buyer communication",
      "Understand pricing strategies",
    ],
  },

  mp2: {
    id: "mp2",
    title: "Upwork Marketplace",
    img: "/upwork.png",
    instructor: "Nour El Din",
    duration: "9 Hours",
    level: "Beginner",
    lessons: 13,
    language: "Arabic",
    description:
      "Learn how to build a winning Upwork profile, submit stronger proposals, and start getting freelance work consistently.",
    about:
      "This course explains how to use Upwork professionally by improving profiles, writing proposals, selecting jobs, and communicating with potential clients.",
    learn: [
      "Build a professional Upwork profile",
      "Write stronger proposals",
      "Find suitable freelance jobs",
      "Improve client communication",
      "Increase job-winning chances",
    ],
  },

  ed1: {
    id: "ed1",
    title: "Graphic Design",
    img: "/canva.png",
    video: "https://www.youtube.com/embed/q4OWKoUUjdY?start=7",
    instructor: "Salem Fathy",
    duration: "16 Hours",
    level: "Beginner",
    lessons: 22,
    language: "Arabic",
    description:
      "Learn the fundamentals of graphic design, layout composition, branding visuals, and content-ready creative work.",
    about:
      "This course gives students a practical introduction to graphic design by focusing on layout rules, composition, contrast, visual consistency, and content design practice.",
    learn: [
      "Understand design fundamentals",
      "Create balanced visual layouts",
      "Work with fonts and color combinations",
      "Build social and branding visuals",
      "Improve design confidence",
    ],
  },

  ed2: {
    id: "ed2",
    title: "Digital Art & Illustration",
    img: "/art.png",
    instructor: "Rahma Osama",
    duration: "13 Hours",
    level: "Intermediate",
    lessons: 17,
    language: "English & Arabic",
    description:
      "Explore digital drawing and illustration basics to create expressive artwork and stylized visual concepts.",
    about:
      "This course introduces learners to digital art workflow, sketch structure, color filling, brush control, and creative illustration development using a digital approach.",
    learn: [
      "Understand digital illustration workflow",
      "Sketch and refine concepts",
      "Use colors and brushes effectively",
      "Create clean digital artwork",
      "Build personal illustration style",
    ],
  },

  ed3: {
    id: "ed3",
    title: "3D Animation",
    img: "/animation.png",
    instructor: "Tamer Wael",
    duration: "21 Hours",
    level: "Advanced",
    lessons: 26,
    language: "English",
    description:
      "Get introduced to 3D animation pipelines, motion principles, and scene-based animation building for creative projects.",
    about:
      "This course is made for learners who want to understand the fundamentals of 3D animation, object motion, scene timing, and the production workflow behind animated visuals.",
    learn: [
      "Understand 3D animation basics",
      "Work with timing and motion",
      "Animate simple scenes",
      "Organize animation workflow",
      "Build stronger visual storytelling",
    ],
  },

  ed4: {
    id: "ed4",
    title: "Video Editing Part 2",
    img: "/video-editing.png",
    instructor: "Mohamed Tarek",
    duration: "11 Hours",
    level: "Advanced",
    lessons: 15,
    language: "Arabic",
    description:
      "Take your video editing skills further with advanced transitions, pacing improvements, and stronger storytelling execution.",
    about:
      "This advanced continuation course focuses on polishing edits, improving scene timing, advanced visual flow, and better content delivery for social and client work.",
    learn: [
      "Improve advanced editing flow",
      "Use stronger transitions",
      "Enhance storytelling structure",
      "Polish client-style projects",
      "Export higher-quality results",
    ],
  },

  fc1: {
    id: "fc1",
    title: "Graphic Design",
    img: "/canva.png",
    video: "https://www.youtube.com/embed/q4OWKoUUjdY?start=7",
    instructor: "Salem Fathy",
    duration: "9 Hours",
    level: "Beginner",
    lessons: 12,
    language: "Arabic",
    description:
      "Learn graphic design basics and create practical visuals for social media and branding.",
    about:
      "This course introduces beginners to the foundations of graphic design using simple tools and real design tasks.",
    learn: [
      "Understand design basics",
      "Create simple layouts",
      "Use colors and fonts correctly",
      "Build social media graphics",
      "Practice visual composition",
    ],
  },

  fc2: {
    id: "fc2",
    title: "Microsoft Office",
    img: "/office.png",
    instructor: "Ahmed Adel",
    duration: "8 Hours",
    level: "Beginner",
    lessons: 14,
    language: "Arabic",
    description:
      "Learn the core skills of Word, Excel, and PowerPoint for study, work, and daily productivity.",
    about:
      "A beginner-friendly course that covers the most practical Microsoft Office tools used in school, office work, and reporting.",
    learn: [
      "Use Word for documents",
      "Work with Excel basics",
      "Create PowerPoint presentations",
      "Improve productivity",
      "Handle office tasks better",
    ],
  },

  fc3: {
    id: "fc3",
    title: "Quran Shikkha",
    img: "/quran.png",
    instructor: "Abdullah Kareem",
    duration: "11 Hours",
    level: "Beginner",
    lessons: 20,
    language: "Arabic & Bangla",
    description:
      "A guided learning course for reading and understanding Quran basics with clear and simple steps.",
    about:
      "This course is designed for learners who want to improve recitation foundations and basic understanding with a gentle pace.",
    learn: [
      "Read correctly step by step",
      "Understand recitation basics",
      "Improve pronunciation",
      "Practice daily learning",
      "Build confidence in reading",
    ],
  },

  fc4: {
    id: "fc4",
    title: "ChatGpt Ai",
    img: "/chatgpt.png",
    instructor: "Mahmoud Samy",
    duration: "7 Hours",
    level: "Beginner",
    lessons: 10,
    language: "English & Arabic",
    description:
      "Learn how to use AI tools and ChatGPT effectively for work, study, writing, and productivity.",
    about:
      "This course gives a practical introduction to prompting, AI assistance, content creation, research support, and daily productivity workflows.",
    learn: [
      "Write better prompts",
      "Use ChatGPT for study and work",
      "Generate ideas faster",
      "Improve productivity with AI",
      "Understand practical AI use cases",
    ],
  },

  dm1: {
    id: "dm1",
    title: "Facebook Marketing",
    img: "/facebook-marketing.png",
    instructor: "Ayman Ali",
    duration: "10 Hours",
    level: "Beginner",
    lessons: 15,
    language: "Arabic",
    description: "Learn how to create and optimize Facebook marketing campaigns.",
    about: "This course covers page growth, ad basics, targeting, and content planning for Facebook.",
    learn: [
      "Understand Facebook campaign basics",
      "Create simple campaigns",
      "Target the right audience",
      "Improve page growth",
      "Analyze campaign performance",
    ],
  },

  dm2: {
    id: "dm2",
    title: "SEO",
    img: "/seo.png",
    instructor: "Mostafa Adel",
    duration: "12 Hours",
    level: "Intermediate",
    lessons: 18,
    language: "English & Arabic",
    description: "Improve website visibility with practical search engine optimization techniques.",
    about: "This course introduces SEO foundations including keywords, on-page optimization, and content structure.",
    learn: [
      "Understand SEO basics",
      "Do keyword research",
      "Optimize page structure",
      "Improve content ranking",
      "Track SEO performance",
    ],
  },

  dm3: {
    id: "dm3",
    title: "Email marketing",
    img: "/email-marketing.png",
    instructor: "Nada Samir",
    duration: "9 Hours",
    level: "Beginner",
    lessons: 13,
    language: "Arabic",
    description: "Build effective email campaigns that engage audiences and increase conversions.",
    about: "A practical course on writing emails, planning sequences, and improving open and click rates.",
    learn: [
      "Write better marketing emails",
      "Build email sequences",
      "Improve open rates",
      "Understand audience segmentation",
      "Track campaign performance",
    ],
  },

  dm4: {
    id: "dm4",
    title: "Google Ad",
    img: "/google-ad.png",
    instructor: "Hossam Nader",
    duration: "11 Hours",
    level: "Intermediate",
    lessons: 16,
    language: "Arabic",
    description: "Learn how to launch and manage Google Ads campaigns for search and performance growth.",
    about: "This course explains campaign structure, keywords, budget setup, ad copy, and optimization basics.",
    learn: [
      "Set up Google Ads campaigns",
      "Write ad copy",
      "Choose keywords properly",
      "Control budget better",
      "Improve conversion performance",
    ],
  },

  cp1: {
    id: "cp1",
    title: "Photography",
    img: "/photography.png",
    instructor: "Ali Fares",
    duration: "8 Hours",
    level: "Beginner",
    lessons: 12,
    language: "Arabic",
    description: "Learn the foundations of photography including framing, lighting, and composition.",
    about: "This course helps beginners understand how to capture stronger images using simple photography rules.",
    learn: [
      "Understand framing",
      "Use lighting better",
      "Improve composition",
      "Take clearer photos",
      "Build visual storytelling",
    ],
  },

  cp2: {
    id: "cp2",
    title: "Drawing & Art",
    img: "/drawing-art.png",
    instructor: "Mariam Ashraf",
    duration: "10 Hours",
    level: "Beginner",
    lessons: 14,
    language: "English & Arabic",
    description: "Practice basic drawing techniques and artistic foundations to improve visual creativity.",
    about: "A beginner course focused on sketching, form, composition, and artistic observation skills.",
    learn: [
      "Practice drawing basics",
      "Understand shape and form",
      "Improve observation skills",
      "Use composition better",
      "Build confidence in sketching",
    ],
  },

  cp3: {
    id: "cp3",
    title: "Content Creation",
    img: "/content-creation.png",
    instructor: "Nourhan Adel",
    duration: "9 Hours",
    level: "Beginner",
    lessons: 13,
    language: "Arabic",
    description: "Learn how to plan, create, and present content effectively for modern platforms.",
    about: "This course focuses on content ideas, publishing consistency, audience targeting, and visual presentation.",
    learn: [
      "Generate content ideas",
      "Plan content calendars",
      "Understand audience targeting",
      "Improve publishing consistency",
      "Create stronger online content",
    ],
  },

  cp4: {
    id: "cp4",
    title: "Ethical Hacking",
    img: "/ethical-hacking.png",
    instructor: "Yassin Hatem",
    duration: "18 Hours",
    level: "Advanced",
    lessons: 22,
    language: "English",
    description: "Get introduced to cybersecurity fundamentals and ethical hacking concepts.",
    about: "This course explains basic ethical hacking ideas, security awareness, and safe learning fundamentals.",
    learn: [
      "Understand ethical hacking basics",
      "Learn cybersecurity concepts",
      "Identify common vulnerabilities",
      "Improve security awareness",
      "Build technical security foundations",
    ],
  },
};

const defaultCourseDetails = {
  instructor: "Mexemy Team",
  duration: "10 Hours",
  level: "Beginner",
  lessons: 12,
  language: "English & Arabic",
  description: "Course details will be updated soon.",
  about: "More detailed information about this course will be available soon.",
  learn: ["Course outline will be added soon."],
};

export default function SingleCourse() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleCart, isInCart } = useCart();
  const { isLoggedIn } = useAuth();
  const [openVideo, setOpenVideo] = useState(false);

  const rawCourse = state?.course || fallbackCourses[id];

  if (!rawCourse) {
    return (
      <div className={styles.notFound}>
        <h2>Course not found</h2>
        <button onClick={() => navigate("/courses")} className={styles.backBtn}>
          Back to Courses
        </button>
      </div>
    );
  }

  const course = {
    ...defaultCourseDetails,
    ...(fallbackCourses[rawCourse.id] || {}),
    ...rawCourse,
    learn:
      rawCourse.learn ||
      fallbackCourses[rawCourse.id]?.learn ||
      defaultCourseDetails.learn,
  };

  const inCart = isInCart(course.id);

  const handleWatchClick = () => {
    if (!isLoggedIn) {
      navigate("/st-login", {
        state: { from: { pathname: `/course/${course.id}` } },
      });
      return;
    }

    if (
      course.title.toLowerCase() === "web design" ||
      course.id === "ac1" ||
      course.id === "dd1"
    ) {
      navigate("/web-design-course");
      return;
    }

    setOpenVideo(true);
  };

  return (
    <section className={styles.page}>
      <div className="container py-5">
        <div className={styles.topSection}>
          <div className={styles.imageCard}>
            <img src={course.img} alt={course.title} />
          </div>

          <div className={styles.contentCard}>
            <span className={styles.badge}>{course.level}</span>
            <h1 className={styles.title}>{course.title}</h1>
            <p className={styles.description}>{course.description}</p>

            <div className={styles.metaGrid}>
              <div><strong>Instructor:</strong> {course.instructor}</div>
              <div><strong>Duration:</strong> {course.duration}</div>
              <div><strong>Lessons:</strong> {course.lessons}</div>
              <div><strong>Language:</strong> {course.language}</div>
            </div>

            <div className={styles.actions}>
              {course.video && (
                <button
                  type="button"
                  className={styles.primaryBtn}
                  onClick={handleWatchClick}
                >
                  Watch
                </button>
              )}

              <button
                type="button"
                className={inCart ? styles.removeBtn : styles.cartBtn}
                onClick={() => toggleCart(course)}
              >
                {inCart ? "Remove From Cart" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>About this course</h3>
            <p>{course.about}</p>
          </div>

          <div className={styles.infoCard}>
            <h3>What you will learn</h3>
            <ul>
              {course.learn.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {openVideo && course.video && (
        <div className={styles.modalOverlay} onClick={() => setOpenVideo(false)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalTop}>
              <div className={styles.modalTitle}>{course.title}</div>
              <button
                className={styles.modalClose}
                onClick={() => setOpenVideo(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className={styles.iframeWrap}>
              <iframe
                src={course.video}
                title={course.title}
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