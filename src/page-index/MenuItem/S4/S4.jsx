import React, { useState } from "react";
import "./S4.css";

const S4 = () => {
  const foodItems = [
    { id: 1, image: "src/page-index/MenuItem/S4/Rectangle 11.svg", title: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: "68" },
    { id: 2, image: "src/page-index/MenuItem/S4/Rectangle 11.svg", title: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: "68" },
    { id: 3, image: "src/page-index/MenuItem/S4/Rectangle 11.svg", title: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: "68" },
    { id: 4, image: "src/page-index/MenuItem/S4/Rectangle 11.svg", title: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: "68" },
    { id: 5, image: "src/page-index/MenuItem/S4/Rectangle 11.svg", title: "Wagyu Steak", description: "250g of lean steak with sous and smashed potato or rice", price: "68" }
  ];

  return (
    <div className="container">
      <h1 className="title">Combo Options</h1>
      <div className="card-container">
        {foodItems.map((item) => (
          <FoodCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

import PropTypes from 'prop-types';

const FoodCard = ({ image, title, description, price }) => {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(null);

  return (
    <div className="food-card">
      <img src={image} alt={title} className="food-image" />
      <div className="food-info">
        <h2 className="food-title">{title}</h2>
        <p className="food-description">{description}</p>

        <div className="stars">
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <span
                key={index}
                className={`star ${currentRating <= (hover || rating) ? "active" : ""}`}
                onClick={() => setRating(currentRating)}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              >
                ★
              </span>
            );
          })}
        </div>

        <div className="food-price">{price}$</div>
      </div>
    </div>
  );}
FoodCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};


export default S4;
