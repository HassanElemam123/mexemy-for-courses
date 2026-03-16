import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./LostPassword.module.css";

const lostPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  newPassword: Yup.string()
    .min(6, "Min 6 characters")
    .required("New password is required"),

  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function LostPassword() {
  return (
    <main className={styles.page}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className={styles.formWrap}>
              <Formik
                initialValues={{
                  email: "",
                  newPassword: "",
                  confirmNewPassword: "",
                }}
                validationSchema={lostPasswordSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("Lost Password Data:", values);
                  alert("Password updated successfully ✅");
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

                    <div className="mb-4">
                      <label className={styles.label}>New Password *</label>
                      <input
                        type="password"
                        name="newPassword"
                        className={`form-control ${styles.input} ${
                          touched.newPassword && errors.newPassword
                            ? "is-invalid"
                            : ""
                        }`}
                        value={values.newPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="New Password"
                      />
                      {touched.newPassword && errors.newPassword && (
                        <div className="invalid-feedback">
                          {errors.newPassword}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className={styles.label}>
                        Confirm New Password *
                      </label>
                      <input
                        type="password"
                        name="confirmNewPassword"
                        className={`form-control ${styles.input} ${
                          touched.confirmNewPassword &&
                          errors.confirmNewPassword
                            ? "is-invalid"
                            : ""
                        }`}
                        value={values.confirmNewPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Confirm New Password"
                      />
                      {touched.confirmNewPassword &&
                        errors.confirmNewPassword && (
                          <div className="invalid-feedback">
                            {errors.confirmNewPassword}
                          </div>
                        )}
                    </div>

                    <button
                      type="submit"
                      className={`btn ${styles.submitBtn}`}
                      disabled={!dirty || !isValid || isSubmitting}
                    >
                      Update Password
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