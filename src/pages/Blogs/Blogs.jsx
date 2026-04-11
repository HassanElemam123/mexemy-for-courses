import { Link } from "react-router-dom";
import styles from "./Blogs.module.css";
import { blogPosts } from "./blogsData";

export default function Blogs() {
  return (
    <section className={styles.blogsPage}>
      <div className="container">
        <div className={styles.blogsHero}>
          <span className={styles.blogsBadge}>Mexemy Blog</span>

          <h1 className={styles.blogsTitle}>
            Ideas that help you learn, build, and grow
          </h1>

          <p className={styles.blogsSubtitle}>
            Explore thoughtful articles about digital skills, freelancing,
            discipline, and growth. Each piece is written to help learners move
            with more clarity, confidence, and direction.
          </p>
        </div>

        <div className={styles.blogsSectionHead}>
          <div>
            <span className={styles.blogsSectionLabel}>Latest Articles</span>
            <h2>Fresh reads for ambitious learners</h2>
          </div>

          <p>
            A collection of short articles designed to keep you moving with more
            clarity and less confusion.
          </p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post) => (
            <div className="col-md-6 col-xl-4" key={post.slug}>
              <article className={styles.blogCard}>
                <div className={styles.blogCardTop}>
                  <span className={styles.blogCardCategory}>
                    {post.category}
                  </span>
                  <span className={styles.blogCardTime}>{post.readTime}</span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.description}</p>

                <Link
                  to={`/blogs/${post.slug}`}
                  className={styles.blogCardLink}
                >
                  Read More
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
