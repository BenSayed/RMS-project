import React, {useState} from "react";
import "./banarMenu.css";
//import bannerImage from "./banner-image.png"; // استبدليه بالصورة الفعلية
 


const Banner = () => { 
   const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 7; // عدد الشرائح

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };
  return (
    <div className="banner-container">
      <img
        src="src/page-index/Banar/Group 34526.svg"
        alt=""
        className="imggg"
      />
      <div className="banner-decor banner-decor-top"></div>
      <div className="banner-content">
        <h1 className="banner-title">Royal Lunch Offer</h1>
        <ul className="banner-list">
          <li>Appetizer: Shrimp cocktail with cocktail sauce.</li>
          <li>
            Main Course: Seabass fillet with lemon butter sauce, served with
            sautéed vegetables and saffron rice.
          </li>
          <li>Dessert: Authentic Italian tiramisu.</li>
          <li>Drink: Lemonade with mint or sparkling water.</li>
        </ul>
      </div>
      <div className="banner-image-wrapper">
        <div className="banner-decor-horizontal1"></div>
        <div className="banner-decor-horizontal2"></div>
        <div className="banner-decor-horizontal3"></div>
        <div className="banner-decor-vertical1"></div>
        <div className="banner-decor-vertical2"></div>
        <div className="banner-decor-vertical3"></div>
        <img
          src="src/page-index/Banar/Image copy.svg"
          alt=""
          className="banner-image2"
        />
        <img
          src="src/page-index/Banar/Object copy.svg"
          alt="Delicious food"
          className="banner-image"
        />
        <img
          src="src/page-index/Banar/Image.svg"
          alt="kljk"
          className="banner-image1"
        />
      </div>
      <div className="banner-price-section">
        <img src="src/page-index/Banar/Group 34524.svg" alt="" className="imgg"/>
        <div className="banner-price">84$</div>
        <button className="banner-button">
          Order Now <span className="arrow"><img src="src/page-index/Banar/Vector (6).svg" alt="" /></span>
        </button>
      </div>
      <div className="banner-decor banner-decor-bottom">
      <div className="banner-navigation">
        <button className="banner-arrow" onClick={prevSlide}><img src=" src/page-index/Banar/Vector (5).svg" alt="" /></button>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span key={index} className={`banner-dot ${index === currentIndex ? "active" : ""}`}></span>
        ))}
        <button className="banner-arrow1" onClick={nextSlide}><img src="src/page-index/Banar/Vector@2x.svg" alt="" /></button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
