import React from "react";
import "./login1.css";
const Login1 = () => {
  return (
    <div className="Login1class">
      <div className="loginCardconteiner">
        <div className="loginCardconteinerform  ">
          <div className="loginCardconteinerformtext  ">
            <h2>Welcome again! </h2>
            <h4>
              {" "}
              Don’t have an account? <span>Sign up</span>
            </h4>
          </div>
          <div className="loginCardconteinerformAction  ">
            <div className="loginCardconteinerformActioninput border">
              <form action=" ">
                <div className="loginCardconteinerformActioninput2">
                  <input type="email" placeholder="Email" />

                  <input placeholder="Password" />
                  <img
                    className="eye-icon"
                    src="src/LoginPage/login/mdi_eye-outline.svg"
                    alt="eye icon"
                  />
                  <h3> Forget password </h3>
                 
           <div className="loginCardconteinerformActioninput2remember border">
            
           <input  type="checkbox" id="remember" />
           <label htmlFor="remember">Remember me</label>
           </div>
                </div>
              </form>
            </div>
            <div className="loginCardconteinerformActionSinwith border"></div>
            <button>Login</button>
          </div>
        </div>

        <div className="loginCardconteinerimg">
          <img src="src/LoginPage/login/Rectangle 1162.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login1;
