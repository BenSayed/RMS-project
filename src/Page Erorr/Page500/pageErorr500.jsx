import React from "react";
import "./pageErorr500.css";
import TextBoxe from "./component/TextBoxe";
import CookieAnimation from "./component/cookies/cookies";

const PageErorr500 = () => {
  return (
    <div>
      <img className="img1" src="public/IMEG/Elements.svg" alt="Erorr" />
      <CookieAnimation />

      <TextBoxe />
    </div>
  );
};

export default PageErorr500;
