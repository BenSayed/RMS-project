import React from "react";
import "./section1.css";
import MicIcon from "@mui/icons-material/Mic"; // Assuming you want to use this for the microphone icon
 
import image1 from "./Rectangle 1152.svg";
const Section1 = () => {
  return (
    <div>
      <section className="section1">
        <div className=" textconteiner">
          <p className="tagline">
            Indulge in the finest dishes in a luxurious setting, where
            creativity meets exquisite flavor
          </p>
          <h1 className="title">Unforgettable Dining</h1>
        </div>
        <div className="cotiner_img">
          <img
            src= {image1}
            alt=" erorr"
          />
        </div>

        <div className="container22">
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button className="mic-button">
             
              <img src="src/page-index/Home/section-1/Vector.svg" alt="" />
            </button>
          </div>

          <div className="button-container">
            <button className="button primary-button">Menu</button>
            <button className="button secondary-button">Book a table</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
