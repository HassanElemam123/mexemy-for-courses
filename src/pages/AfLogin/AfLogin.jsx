import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./AfLogin.module.css";

const loginSchema = Yup.object({
  identity: Yup.string().required("Username or email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
});

export default function AfLogin() {
  return (
    <main className={styles.page}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className={styles.formWrap}>
              <Formik
                initialValues={{
                  identity: "",
                  password: "",
                }}
                validationSchema={loginSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("Affiliate Login:", values);
                  alert("Logged in successfully ✅");
                  resetForm();
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  isValid,
                  dirty,
                }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                      <label className={styles.label}>Username / Email *</label>
                      <input
                        type="text"
                        name="identity"
                        className={`form-control ${styles.input} ${
                          touched.identity && errors.identity ? "is-invalid" : ""
                        }`}
                        value={values.identity}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.identity && errors.identity && (
                        <div className="invalid-feedback">{errors.identity}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className={styles.label}>Password *</label>
                      <input
                        type="password"
                        name="password"
                        className={`form-control ${styles.input} ${
                          touched.password && errors.password ? "is-invalid" : ""
                        }`}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.password && errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className={`btn ${styles.loginBtn}`}
                      disabled={!dirty || !isValid || isSubmitting}
                    >
                      Login
                    </button>

                    <div className={styles.lostWrap}>
                      <a href="/forgot-password" className={styles.lostLink}>
                        Lost your password?
                      </a>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}