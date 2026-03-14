
import { useCart } from "../../CartContext";
import styles from "../Courses/components/LastCourseGrid/LastGrid.module.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <section className={styles.page}>
      <div className={styles.listWrap}>
        <div className="container py-5">
          <div className={styles.cartHeader}>
            <h2 className={styles.blockTitle}>My Cart</h2>

            {cart.length > 0 && (
              <button
                type="button"
                className={styles.clearCartBtn}
                onClick={clearCart}
              >
                Clear Cart
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className={styles.emptyCartBox}>
              No courses added yet
            </div>
          ) : (
            <div className={styles.grid}>
              {cart.map((item) => (
                <div key={item.id} className={styles.courseCard}>
                  <div className={styles.courseMedia}>
                    <img src={item.img} alt={item.title} loading="lazy" />
                  </div>

                  <div className={styles.courseBody}>
                    <div className={styles.courseTitle}>{item.title}</div>

                    <div className={styles.courseActions}>
                      <button
                        type="button"
                        className={styles.removeCartBtn}
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove From Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}