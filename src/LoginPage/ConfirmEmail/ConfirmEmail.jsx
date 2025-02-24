import React, { useState } from "react";
import "./ConfirmEmail.css";

const EmailConfirmation = () => {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (index, e) => {
    if (isNaN(e.target.value)) return;
    let newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
    
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  return (
    <div className="coniner">
      <div className="box">
        <h2>Confirm email</h2>
        <div className="code-inputs">
          {code.map((num, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="code-input"
              value={num}
              onChange={(e) => handleChange(index, e)}
            />
          ))}
        </div>
        <p className="resend-text">Resend code after 3:12</p>
        <button className="lin-btn">Login</button>
      </div>
      <div className="image-section1">
              {" "}
              <img
                style={{ borderRadius: "48px" }}
                src="src/LoginPage/ConfirmEmail/Rectangle 1162 (1).svg"
                alt=" not eror "
              />{" "}
            </div>
    </div>
  );
};

export default EmailConfirmation;
