import React, { useState } from "react";
import "./S2.css";

export default function S2() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("150 gm");

  return (
    <div className="containe">
      <div className="left-section">
        <div className="product-card">
          <h1>Wagyu Steak</h1>
          <h2>68.99$</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <div className="details">
            <span>🍖 250g Lean beef</span>
            <span>🧈 Butter sous</span>
            <span>🥔 Smashed potato</span>
          </div>
        </div>

        <div className="size-selector">
          <h3>Size</h3>
          <label>
            <input
              type="radio"
              name="size"
              value="150 gm"
              checked={size === "150 gm"}
              onChange={() => setSize("150 gm")}
            />{" "}
            150 gm
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="250 gm"
              checked={size === "250 gm"}
              onChange={() => setSize("250 gm")}
            />{" "}
            250 gm
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="350 gm"
              checked={size === "350 gm"}
              onChange={() => setSize("350 gm")}
            />{" "}
            350 gm
          </label>
          <select onChange={(e) => setSize(e.target.value)}>
            <option>Other size</option>
          </select>
        </div>
      </div>

      <div className="order-section">
        <h2>Order Now</h2>
        <div className="quantity-selector">
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            style={{ marginLeft: "-5px", padding: "20px", fontSize: "50px" }}
          >
            -
          </button>
          <span style={{ marginLeft: "100px" }}>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            style={{ marginLeft: "85px", padding: "20px", fontSize: "50px" }}
          >
            +
          </button>
        </div>
        <button className="add-to-cart" style={{ textAlign: "center" }}>
          Add to cart
        </button>
      </div>
    </div>
  );
}