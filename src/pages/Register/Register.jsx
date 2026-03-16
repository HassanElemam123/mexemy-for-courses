import { Formik } from "formik";
import * as Yup from "yup";
import { useSearchParams } from "react-router-dom";
import styles from "./Register.module.css";

const registerSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Too short")
    .required("First name is required"),

  lastName: Yup.string()
    .min(2, "Too short")
    .required("Last name is required"),

  username: Yup.string()
    .min(3, "Min 3 characters")
    .required("User name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("E-Mail is required"),

  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email")], "Emails must match")
    .required("Confirm email is required"),

  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),

  agree: Yup.boolean().oneOf([true], "You must agree to continue"),
});

export default function Register() {
  const [searchParams] = useSearchParams();
  const prefilledEmail = searchParams.get("email") || "";

  return (
    <main className={styles.page}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            <div className={styles.card}>
              <Formik
                enableReinitialize
                initialValues={{
                  firstName: "",
                  lastName: "",
                  username: "",
                  email: prefilledEmail,
                  confirmEmail: prefilledEmail,
                  password: "",
                  confirmPassword: "",
                  agree: false,
                }}
                validationSchema={registerSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("Register Data:", values);
                  alert("Registered successfully ✅");
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
                      <label className={styles.label}>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className={`form-control ${styles.input} ${
                          touched.firstName && errors.firstName ? "is-invalid" : ""
                        }`}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.firstName && errors.firstName && (
                        <div className="invalid-feedback">{errors.firstName}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className={styles.label}>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className={`form-control ${styles.input} ${
                          touched.lastName && errors.lastName ? "is-invalid" : ""
                        }`}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.lastName && errors.lastName && (
                        <div className="invalid-feedback">{errors.lastName}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className={styles.label}>User Name</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="User Name"
                        className={`form-control ${styles.input} ${
                          touched.username && errors.username ? "is-invalid" : ""
                        }`}
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.username && errors.username && (
                        <div className="invalid-feedback">{errors.username}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className={styles.label}>E-Mail</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-Mail"
                        className={`form-control ${styles.input} ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className={styles.label}>Confirm E-Mail</label>
                      <input
                        type="email"
                        name="confirmEmail"
                        placeholder="Confirm E-Mail"
                        className={`form-control ${styles.input} ${
                          touched.confirmEmail && errors.confirmEmail ? "is-invalid" : ""
                        }`}
                        value={values.confirmEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.confirmEmail && errors.confirmEmail && (
                        <div className="invalid-feedback">{errors.confirmEmail}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className={styles.label}>Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
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

                    <div className="mb-3">
                      <label className={styles.label}>Password Confirmation</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Password Confirmation"
                        className={`form-control ${styles.input} ${
                          touched.confirmPassword && errors.confirmPassword
                            ? "is-invalid"
                            : ""
                        }`}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <div className="invalid-feedback">
                          {errors.confirmPassword}
                        </div>
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
                        By signing up, I agree with the website&apos;s{" "}
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
    </main>
  );
}