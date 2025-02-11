import React from "react";
import "./section4.css";
const Section4 = () => {
  return (
    <div>
      <section className="section4">
        <div className="app">
          <div className="food-selection">
            <h2>
              Choose the type of <span style={{ color: "#ff9500" }}>Food</span>
            </h2>
          </div>

          <div className="navbar">
            <button>Main Courses</button>
            <button>Appetizers</button>
            <button>Seafood</button>
            <button>Desserts</button>
            <button>Beverages</button>
          </div>

          <div className="cardss">
            <Card
              imgSrc="src/page-index/MenuPage/Rectangle 1153 (1).svg"
              altText="Wagyu Steak"
              title="Wagyu Steak"
              description="250g of lean steak with sous smashed potato or rice"
              price="78$"
              heartImg="src/page-index/MenuPage/solar_heart-bold (2).svg"
            />
            <Card
              imgSrc="src/page-index/MenuPage/Rectangle 1153 (1).svg"
              altText="Lobster Roll"
              title="Lobster Roll"
              description="250g of lean steak with sous smashed potato or rice"
              price="28$"
              heartImg="src/page-index/MenuPage/solar_heart-bold (2).svg"
            />
            <Card
              imgSrc="src/page-index/MenuPage/Rectangle 1153 (1).svg"
              altText="Cheesecake"
              title="Cheesecake"
              description="250g of lean steak with sous smashed potato or rice"
              price="98$"
              heartImg="src/page-index/MenuPage/solar_heart-bold (2).svg"
            />
            <Card
              imgSrc="src/page-index/MenuPage/Rectangle 1153 (1).svg"
              altText="Cheesecake"
              title="Cheesecake"
              description="250g of lean steak with sous smashed potato or rice"
              price="110$"
              heartImg="src/page-index/MenuPage/solar_heart-bold (2).svg"
            />
          </div>
          <a href="#" className="show-all-button">
            <span>Show All</span>
            <div className="icon-container">
              <img src="src/page-index/Home/section-4/Group (1).svg " alt="" />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
const Card = ({ imgSrc, altText, title, description, price, heartImg }) => {
  return (
    <div className="carddSection4">
      <img src={imgSrc} alt={altText} />
      <div className="contentSection4">
        <div className="textSection4">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="starsSection4">
            &#9733; &#9733; &#9733; &#9733; &#9733;
          </div>
        </div>
        <div className="priceSection4">{price}</div>
        <div className="heartSection4">
          <img src={heartImg} alt={altText} />
        </div>
      </div>
    </div>
  );
};
export default Section4;
