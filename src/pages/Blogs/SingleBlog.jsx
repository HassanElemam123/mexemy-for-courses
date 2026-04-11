import { Link, useParams } from "react-router-dom";
import styles from "./Blogs.module.css";
import { blogPosts } from "./blogsData";

export default function SingleBlog() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className={styles.blogsPage}>
        <div className="container">
          <div className={styles.notFoundBox}>
            <span className={styles.blogsBadge}>Blog</span>
            <h1 className={styles.notFoundTitle}>Article not found</h1>
            <p className={styles.notFoundText}>
              The article you are looking for does not exist or may have been
              moved.
            </p>
            <Link to="/blogs" className={styles.blogsPrimaryBtn}>
              Back to Blogs
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.blogsPage}>
      <div className="container">
        <div className={styles.singleBlogHeader}>
          <Link to="/blogs" className={styles.backLink}>
            ← Back to Blogs
          </Link>

          <div className={styles.singleBlogHero}>
            <div className={styles.singleBlogMeta}>
              <span className={styles.blogCardCategory}>{post.category}</span>
              <span className={styles.blogCardTime}>{post.readTime}</span>
            </div>

            <h1 className={styles.singleBlogTitle}>{post.title}</h1>
            <p className={styles.singleBlogSubtitle}>{post.description}</p>
          </div>
        </div>

        <article className={styles.singleBlogContent}>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className={styles.singleBlogFooter}>
            <Link to="/blogs" className={styles.blogsPrimaryBtn}>
              More Articles
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
