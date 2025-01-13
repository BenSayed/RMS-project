import React from 'react';
import  "./SignUp.css" ;

const SignUp = () => {
  return (
    <div>
      <section className="SignUpPage">
        <div className="containerSignUp">
          <div className="form-sectionSignUp">
            <h1
              style={{
                fontFamily: "'Cormorant Upright'",
              }}
            >
              Create an Account
            </h1>
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
            <form>
              <div className="input-group">
                <input placeholder="First name" type="text" />
                <input placeholder="Last name" type="text" />
              </div>
              <div className="full-width">
                <input placeholder="Email" type="email" />
              </div>
              <div className="full-width password-group">
                <input placeholder="Password" type="password" />
                <img
                  alt="Show Password"
                  src="src/LoginPage/Sign up/mdi_eye-outline (1).svg"
                />
              </div>
              <div className="full-width password-group">
                <input placeholder="Confirm Password" type="password" />
                <img
                  alt="Show Password"
                  src="src/LoginPage/Sign up/mdi_eye-outline (2).svg"
                />
              </div>
              <div className="checkbox-group">
                <input
                  id="terms"
                  style={{
                    borderColor: "#ff9500",
                  }}
                  type="checkbox"
                />
                <label htmlFor="terms">
                  You agree to our friendly privacy policy
                </label>
              </div>

              <div className="lineDive2">
                <img src="src/LoginPage/login/Line 17.svg" alt="" />
                <span>or sign up with</span>
                <img src="src/LoginPage/login/Line 16.svg" alt="" />
              </div>

              <div className="social-login">
                <button
                  className="buttonSing"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <img
                    alt="Google Logo"
                    src="src/LoginPage/Sign up/flat-color-icons_google (2).svg"
                  />
                  Google
                </button>
                <button
                  className="buttonSing"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <img
                    alt="Apple Logo"
                    src="src/LoginPage/Sign up/mdi_apple (2).svg "
                  />
                  Apple
                </button>
              </div>
              <button className="submit-btn">Create an account</button>
            </form>
          </div>
          <div className="image-section3" />
        </div>
      </section>
    </div>
  );
}

export default SignUp;
