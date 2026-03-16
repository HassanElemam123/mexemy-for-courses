import styles from "./Terms.module.css";

const sections = [
  {
    title: "1. Acceptance of Terms",
    text: "By accessing or using Mexemy, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use this website or our services.",
  },
  {
    title: "2. Use of the Platform",
    text: "Mexemy provides educational content, digital courses, and related learning services. You agree to use the platform only for lawful purposes and in a way that does not violate the rights of others or restrict their use of the platform.",
  },
  {
    title: "3. User Accounts",
    text: "When you create an account, you are responsible for maintaining the confidentiality of your account information and password. You are also responsible for all activities that occur under your account.",
  },
  {
    title: "4. Payments and Enrollments",
    text: "Some courses or services on Mexemy may require payment. By purchasing a course, you agree to provide accurate billing information and authorize us to process your payment. Access to premium content may be limited to enrolled users only.",
  },
  {
    title: "5. Intellectual Property",
    text: "All content on Mexemy, including videos, text, graphics, logos, and course materials, is the property of Mexemy or its content creators and is protected by copyright and intellectual property laws. You may not copy, distribute, or reproduce any content without permission.",
  },
  {
    title: "6. Refund Policy",
    text: "Refund requests may be subject to our refund policy. We reserve the right to review each request individually and approve or reject it according to our platform policy and service conditions.",
  },
  {
    title: "7. Prohibited Activities",
    text: "You may not misuse the platform by attempting unauthorized access, uploading harmful content, sharing account credentials, distributing course materials illegally, or engaging in any activity that harms the platform or its users.",
  },
  {
    title: "8. Limitation of Liability",
    text: "Mexemy is not liable for any indirect, incidental, or consequential damages arising from your use of the platform, courses, or services. All content is provided on an 'as is' basis without warranties of any kind.",
  },
  {
    title: "9. Modifications to Terms",
    text: "We reserve the right to update or modify these Terms and Conditions at any time. Continued use of the platform after changes are posted means that you accept the updated terms.",
  },
  {
    title: "10. Contact Information",
    text: "If you have any questions regarding these Terms and Conditions, you may contact us through our official support channels listed on the website.",
  },
];

export default function Terms() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container-fluid px-4">
          <div className={styles.heroInner}>
            <span className={styles.badge}>Legal</span>
            <h1 className={styles.heroTitle}>Terms and Conditions</h1>
            <p className={styles.heroText}>
              Please read these terms carefully before using our website,
              courses, and digital services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className={styles.card}>
                <div className={styles.topNote}>
                  Effective date: <strong>March 2026</strong>
                </div>

                <p className={styles.intro}>
                  These Terms and Conditions govern your access to and use of
                  Mexemy and its services. By using the platform, you confirm
                  that you understand and agree to these terms.
                </p>

                <div className={styles.sectionsWrap}>
                  {sections.map((section, index) => (
                    <div key={index} className={styles.termBlock}>
                      <h3 className={styles.termTitle}>{section.title}</h3>
                      <p className={styles.termText}>{section.text}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.bottomNote}>
                  If you do not agree with these Terms and Conditions, please
                  discontinue use of the platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}