import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const Header = () => {
  return (
    <>
      <h1>Let's set up your account</h1>
      <p>
        Already have an account?{" "}
        <a className="link" href="/">
          Sign in
        </a>
      </p>
    </>
  );
};
const PageContent = () => {
  return (
    <>
      <h1>Dummy Heading</h1>
      <p>
        Diam dolore accusam justo gubergren ipsum magna velit nonumy ipsum
        praesent at clita duo eros duis invidunt dolores. Dolor eirmod molestie
        vel adipiscing ut accusam id dolor nam. Et voluptua aliquyam. At ea amet
        erat sed lorem aliquam justo sea kasd elitr gubergren velit ullamcorper
        doming stet sadipscing. Et et ea vero diam est dolor nonumy sed diam
        aliquyam.
      </p>
    </>
  );
};

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", password: "", userType: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        password: Yup.string().min(8, "Required").required("Required"),
        userType: Yup.object().shape({
          userType: Yup.string().required("User type is required!"),
        }),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className="signUp-Form">
          <div className="field-group">
            <input
              className="input-field"
              id="firstName"
              type="text"
              {...formik.getFieldProps("firstName")}
              placeholder="Your name"
            />
            <label htmlFor="firstName" className="field-label">
              Your name
            </label>

            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="field-group">
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              placeholder="Email address"
              className="input-field"
            />
            <label htmlFor="email" className="field-label">
              Email address
            </label>
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <select
            className="input-field"
            id="userType"
            {...formik.getFieldProps("userType")}
          >
            <option value="" label="I would describe my user type as">
              I would describe my user type as
            </option>
            <option value="it" label="IT">
              IT
            </option>
            <option value="design" label="Design">
              Design
            </option>
          </select>
          <div className="field-group">
            <input
              className="input-field"
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
              placeholder="Password"
            />
            <label htmlFor="password" className="field-label">
              Password
            </label>
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit" className="next-btn">
            Next
          </button>
        </form>
      )}
    </Formik>
  );
};
const TermsAndcondText = () => {
  return (
    <p>
      By clicking the "Next" button, you agree yto creating a free account, and{" "}
      <a href="/" className="link">
        Terms of service
      </a>
      <span> and </span>
      <a href="/" className="link">
        Privacy policy
      </a>
    </p>
  );
};
const Container = () => {
  return (
    <div className="container">
      <div className="col left">
        <Header />
        <SignupForm />
        <TermsAndcondText />
      </div>
      <div className="col right">
        <PageContent />
      </div>
    </div>
  );
};

function App() {
  return <Container />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
