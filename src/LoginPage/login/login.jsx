import React, { useState } from "react";
import "./Login.css";
import Header from "/src/Component/Header/Header";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <Header />
      <section className="sectionlogin">
        <div className="PageLogin">
          <div className="PageLogincontainer">
            <div className="PageLoginform-section">
              <h1 className="welcome-text">Welcome again!</h1>
              <p>
                Don’t have an account? <a href="#">Sign up</a>
              </p>
              <input type="email" placeholder="Email" />
              <div className="password-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                />
                <img
                  className="eye-icon"
                  src="src/LoginPage/login/mdi_eye-outline.svg"
                  alt="eye icon"
                  onClick={togglePassword}
                />
              </div>
              <div className="remember">
                <input className="InputRem" type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>

              <div className="lineDive">
                <img src="src/LoginPage/login/Line 17.svg" alt="" />
                <h3>or login with</h3>
                <img src="src/LoginPage/login/Line 16.svg" alt="" />
              </div>

              <div className="social-buttons">
                <button>
                  <img
                    src="src/LoginPage/login/google .svg"
                    alt="Google Icon"
                  />
                  Google
                </button>
                <button>
                  <img src="src/LoginPage/login/apple .svg" alt="Apple Icon" />
                  Apple
                </button>
              </div>

              <button className="login-btn">Login</button>
            </div>

            <div className="image-section0">
              {" "}
              <img
                style={{ borderRadius: "48px" }}
                src="src/LoginPage/login/Rectangle 1162.svg"
                alt=" not eror "
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
