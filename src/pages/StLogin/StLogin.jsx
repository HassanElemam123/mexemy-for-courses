import { Formik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { useAuth } from "../../AuthContext.jsx";
import { demoAccounts } from "../../services/authApi.js";
import { showSuccessToast } from "../../Alert/Toastify.jsx";
import styles from "./StLogin.module.css";

const loginSchema = Yup.object({
  identity: Yup.string().required("Username or email is required"),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
  keepSignedIn: Yup.boolean(),
});

export default function StLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginError, setLoginError] = useState("");
  const [showDemoAccounts, setShowDemoAccounts] = useState(false);

  const demoHint = useMemo(() => "Use DummyJSON test accounts", []);

  return (
    <main className={styles.page}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-4">
            <div className={styles.card}>
              <h2 className={styles.title}>Hi, Welcome back!</h2>

              <Formik
                initialValues={{
                  identity: "",
                  password: "",
                  keepSignedIn: false,
                }}
                validationSchema={loginSchema}
                validateOnMount
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                  setLoginError("");

                  const result = await login(
                    values.identity,
                    values.password,
                    values.keepSignedIn,
                  );

                  if (result.ok) {
                    showSuccessToast("Login successful!");
                    resetForm();
                    navigate(from, { replace: true });
                  } else {
                    setLoginError(result.message);
                  }

                  setSubmitting(false);
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
                  setFieldValue,
                }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className={styles.demoTopBar}>
                      <button
                        type="button"
                        className={`btn btn-outline-secondary btn-sm ${styles.demoToggleBtn}`}
                        onClick={() => setShowDemoAccounts((prev) => !prev)}
                      >
                        {showDemoAccounts
                          ? "Hide test accounts"
                          : "Show test accounts"}
                      </button>

                      <small className={`text-muted ${styles.demoHint}`}>
                        {demoHint}
                      </small>
                    </div>

                    {showDemoAccounts && (
                      <div className="border rounded p-2 mb-3 bg-light">
                        <p className="mb-2 fw-semibold">DummyJSON Accounts</p>

                        <div className="d-grid gap-2">
                          {demoAccounts.map((account) => (
                            <button
                              key={account.username}
                              type="button"
                              className="btn btn-sm btn-light border text-start"
                              onClick={() => {
                                setFieldValue("identity", account.username);
                                setFieldValue("password", account.password);
                                setLoginError("");
                                setShowDemoAccounts(false);
                              }}
                            >
                              <div className="fw-semibold">{account.label}</div>
                              <div className="small text-muted">
                                username: {account.username}
                              </div>
                              <div className="small text-muted">
                                email: {account.email}
                              </div>
                              <div className="small text-muted">
                                password: {account.password}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-3">
                      <input
                        type="text"
                        name="identity"
                        placeholder="Username or Email Address"
                        className={`form-control ${styles.input} ${
                          touched.identity && errors.identity
                            ? "is-invalid"
                            : ""
                        }`}
                        value={values.identity}
                        onChange={(e) => {
                          handleChange(e);
                          if (loginError) setLoginError("");
                        }}
                        onBlur={handleBlur}
                      />
                      {touched.identity && errors.identity && (
                        <div className="invalid-feedback">
                          {errors.identity}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={`form-control ${styles.input} ${
                          touched.password && errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                        value={values.password}
                        onChange={(e) => {
                          handleChange(e);
                          if (loginError) setLoginError("");
                        }}
                        onBlur={handleBlur}
                      />
                      {touched.password && errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    {loginError && (
                      <div className="alert alert-danger py-2" role="alert">
                        {loginError}
                      </div>
                    )}

                    <div
                      className={`d-flex align-items-center justify-content-between mb-4 ${styles.metaRow}`}
                    >
                      <div className="form-check m-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="keepSignedIn"
                          name="keepSignedIn"
                          checked={values.keepSignedIn}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label
                          className={`form-check-label ${styles.checkLabel}`}
                          htmlFor="keepSignedIn"
                        >
                          Keep me signed in
                        </label>
                      </div>

                      <NavLink
                        to="/forgot-password"
                        className={styles.forgotLink}
                      >
                        Forgot?
                      </NavLink>
                    </div>

                    <button
                      type="submit"
                      className={`btn ${styles.submitBtn}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Signing In..." : "Sign In"}
                    </button>

                    <p className={styles.registerText}>
                      Don&apos;t have an account?{" "}
                      <NavLink to="/register" className={styles.registerLink}>
                        Register Now
                      </NavLink>
                    </p>
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
