import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./AffRegister.module.css";

const affRegisterSchema = Yup.object({
  username: Yup.string()
    .min(3, "Min 3 characters")
    .required("Username is required"),

  firstName: Yup.string()
    .min(2, "Too short")
    .required("First name is required"),

  lastName: Yup.string()
    .min(2, "Too short")
    .required("Last name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),

  paymentEmail: Yup.string()
    .email("Invalid payment email")
    .required("Payment email is required"),

  website: Yup.string().required("Website is required"),

  promotion: Yup.string()
    .min(10, "Please write a bit more")
    .required("This field is required"),

  agree: Yup.boolean().oneOf([true], "You must agree to continue"),
});

export default function AffRegister() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className={styles.headingWrap}>
                <span className={styles.smallBadge}>mexemy Affiliate</span>
                <h1 className={styles.heroTitle}>
                  You can definitely join our affiliate program
                  <br />
                  and start earning passive income.
                </h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-4">
              <div className={styles.formCard}>
                <Formik
                  initialValues={{
                    username: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    paymentEmail: "",
                    website: "",
                    promotion: "",
                    agree: false,
                  }}
                  validationSchema={affRegisterSchema}
                  onSubmit={(values, { resetForm }) => {
                    console.log("Affiliate Register:", values);
                    alert("Affiliate registration submitted ✅");
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
                      <div className="mb-3">
                        <label className={styles.label}>Username *</label>
                        <input
                          type="text"
                          name="username"
                          className={`form-control ${styles.input} ${
                            touched.username && errors.username ? "is-invalid" : ""
                          }`}
                          value={values.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Username"
                        />
                        {touched.username && errors.username && (
                          <div className="invalid-feedback">{errors.username}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className={styles.label}>First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          className={`form-control ${styles.input} ${
                            touched.firstName && errors.firstName ? "is-invalid" : ""
                          }`}
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="First Name"
                        />
                        {touched.firstName && errors.firstName && (
                          <div className="invalid-feedback">{errors.firstName}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className={styles.label}>Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          className={`form-control ${styles.input} ${
                            touched.lastName && errors.lastName ? "is-invalid" : ""
                          }`}
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Last Name"
                        />
                        {touched.lastName && errors.lastName && (
                          <div className="invalid-feedback">{errors.lastName}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className={styles.label}>Email *</label>
                        <input
                          type="email"
                          name="email"
                          className={`form-control ${styles.input} ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Email"
                        />
                        {touched.email && errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
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
                          placeholder="Password"
                        />
                        {touched.password && errors.password && (
                          <div className="invalid-feedback">{errors.password}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className={styles.label}>Password Confirmation *</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          className={`form-control ${styles.input} ${
                            touched.confirmPassword && errors.confirmPassword
                              ? "is-invalid"
                              : ""
                          }`}
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Password Confirmation"
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                          <div className="invalid-feedback">
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className={styles.label}>Payment Email</label>
                        <input
                          type="email"
                          name="paymentEmail"
                          className={`form-control ${styles.input} ${
                            touched.paymentEmail && errors.paymentEmail ? "is-invalid" : ""
                          }`}
                          value={values.paymentEmail}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Payment Email"
                        />
                        {touched.paymentEmail && errors.paymentEmail && (
                          <div className="invalid-feedback">{errors.paymentEmail}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className={styles.label}>Website</label>
                        <input
                          type="text"
                          name="website"
                          className={`form-control ${styles.input} ${
                            touched.website && errors.website ? "is-invalid" : ""
                          }`}
                          value={values.website}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Website"
                        />
                        {touched.website && errors.website && (
                          <div className="invalid-feedback">{errors.website}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className={styles.label}>How will you promote us? *</label>
                        <textarea
                          name="promotion"
                          rows="5"
                          className={`form-control ${styles.textarea} ${
                            touched.promotion && errors.promotion ? "is-invalid" : ""
                          }`}
                          value={values.promotion}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Write here..."
                        />
                        {touched.promotion && errors.promotion && (
                          <div className="invalid-feedback">{errors.promotion}</div>
                        )}
                      </div>

                      <div className={`form-check mb-3 ${styles.checkRow}`}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="agree"
                          name="agree"
                          checked={values.agree}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label
                          className={`form-check-label ${styles.checkLabel}`}
                          htmlFor="agree"
                        >
                          Agree to Our{" "}
                          <a href="/terms" className={styles.termsLink}>
                            Terms and Conditions
                          </a>
                        </label>
                      </div>

                      {touched.agree && errors.agree && (
                        <div className={styles.agreeError}>{errors.agree}</div>
                      )}

                      <button
                        type="submit"
                        className={`btn ${styles.submitBtn}`}
                        disabled={!dirty || !isValid || isSubmitting}
                      >
                        Register
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}