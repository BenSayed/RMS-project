import Section1 from "./section-1/section1";
import Section2 from "./section-2/section2";
import Section3 from "./section-3/section3";
import Section4 from "./section-4/section4";
import Header from "/src/Component/Header/Header";
import React from "react";

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
