import styles from "./Events.module.css";

export default function Events() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.emptyBox}>
          <h1 className={styles.title}>No Events Yet</h1>
        </div>
      </div>
    </main>
  );
}