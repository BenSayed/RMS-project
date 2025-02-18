import Section1 from "./section-1/section1";
import Section2 from "./section-2/section2";
import Section3 from "./section-3/section3";
import Section4 from "./section-4/section4";
import Section5 from "./section-5/Section5";

import Header from "/src/Component/Header/Header";
import React from "react";

const Home = () => {
  return (
    <div>
      <section>
        {" "}
        <Section1 />{" "}
      </section>
      <section>
        {" "}
        <Section2 />
      </section>
      <section className="section3">
        {" "}
        <Section3 />
      </section>
      <section>
        {" "}
        <Section4 />{" "}
      </section>
      <section>
        {" "}
        <Section5 />{" "}
      </section>
    </div>
  );
};

export default Home;
