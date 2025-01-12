import React from "react";
import "./section.css";
import MicIcon from "@mui/icons-material/Mic"; // Assuming you want to use this for the microphone icon

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
            src="src/page-index/Home/section-1/Rectangle 1152.svg"
            alt=" erorr"
          />
        </div>

        <div className="container">
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
