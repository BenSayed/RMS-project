import React from "react";
import "./Erorr404.css";
import BoxText from "./comp/boxText";
import BurgerLayers from "./comp/BurgerLayers";
import Header from "/src/Component/Header/Header";
const Erorr404 = () => {
  return (
    <div>
      <img className="img1" src="./public/IMEG/Elements.svg " alt="Erorr" />

      <div className="pageeror">
        <div className="burge">
          {" "}
          <BurgerLayers />{" "}
        </div>

        <BoxText />
      </div>
    </div>
  );
};

export default Erorr404;
