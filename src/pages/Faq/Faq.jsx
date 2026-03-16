import styles from "./Faq.module.css";

const faqItems = [
  {
    id: "faqOne",
    question: "What is Mexemy?",
    answer:
      "Mexemy is an online learning platform that provides practical digital courses, training programs, and educational resources to help students and professionals improve their skills and careers.",
  },
  {
    id: "faqTwo",
    question: "How do I enroll in a course?",
    answer:
      "You can browse the available courses, open the course details page, and click the enrollment button. Some courses may require payment, while others may be available for free.",
  },
  {
    id: "faqThree",
    question: "Can I access courses after enrollment?",
    answer:
      "Yes. Once you successfully enroll in a course, you can access its learning content according to the platform rules and the course availability period.",
  },
  {
    id: "faqFour",
    question: "Do I need prior experience before joining a course?",
    answer:
      "Not always. Many of our courses are designed for beginners, while some others are intended for intermediate or advanced learners. You can check the course level before enrolling.",
  },
  {
    id: "faqFive",
    question: "Can I request a refund?",
    answer:
      "Refund requests are handled according to our refund policy. Each request may be reviewed individually depending on the course type, purchase date, and service conditions.",
  },
  {
    id: "faqSix",
    question: "How can I contact support?",
    answer:
      "You can reach our support team through the contact information available on the website. We are available to help you with technical issues, enrollment questions, and general inquiries.",
  },
  {
    id: "faqSeven",
    question: "Can I join as an affiliate partner?",
    answer:
      "Yes. Mexemy offers an affiliate program for users who would like to promote our courses and services. You can join through the affiliate registration page and submit your application.",
  },
  {
    id: "faqEight",
    question: "Do you provide certificates after course completion?",
    answer:
      "Some courses may include certificates of completion depending on the course type and the platform policy. You can check the course details page to confirm certificate availability.",
  },
];

export default function Faq() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container-fluid px-4">
          <div className={styles.heroInner}>
            <span className={styles.badge}>Help Center</span>
            <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
            <p className={styles.heroText}>
              Find quick answers to the most common questions about Mexemy,
              courses, enrollments, and support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className={styles.content}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <div className={styles.card}>
                <div className="accordion" id="faqAccordion">
                  {faqItems.map((item, index) => (
                    <div className={`accordion-item ${styles.accordionItem}`} key={item.id}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${styles.accordionBtn} ${
                            index !== 0 ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.id}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={item.id}
                        >
                          {item.question}
                        </button>
                      </h2>

                      <div
                        id={item.id}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className={`accordion-body ${styles.accordionBody}`}>
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.bottomNote}>
                  Still have questions? Please contact our support team for
                  more help.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}