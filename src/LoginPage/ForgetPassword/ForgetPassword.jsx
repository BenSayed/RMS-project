import React, { useState } from "react";
import "./ForgetPassword.css";

function ForgetPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <section className="sectionForgetPassword00">
        <div className="PageForgetPassword00">
          <div className="PageForgetPasswordcontainer00">
            <div className="PageForgetPasswordform-section00">
              <h1 className="Forget-password00">Forget password</h1>

              <div className="PageForgetPasswordinput00">
                <input type="email" placeholder="Email" />

                <button className="send-btn00">Send Code</button>
              </div>
            </div>

            <div className="image-section00">
              {" "}
              <img
                style={{ borderRadius: "48px" }}
                src="src/LoginPage/ForgetPassword/Rectangle 1162.svg"
                alt=" not eror "
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgetPassword;
