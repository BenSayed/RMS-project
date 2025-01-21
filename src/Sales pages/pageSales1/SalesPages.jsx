import React from "react";
import "./SalesPages.css";
const SalesPages = () => {
  return (
    <div className="SalesPages">
      <div style={{ display: "flex" }}>
        <div className="SalesCard">
          <div className="CartSection">
            <h2> Cart </h2>

            <div className="last-textt">
              <span>Cost</span>
              <span>Qty</span>
            </div>
          </div>
          <div>
            <div>
              <div className="CartSection2">
                <div className="car-img-text" style={{ display: "flex" }}>
                  <img
                    src="src/Sales pages/pageSales1/Rectangle 1153.svg "
                    alt=" eror "
                  />
                  <div className="cart-text">
                    <h2> Wagyu Steak </h2> <br />
                    <p>
                      {" "}
                      250g of lean steak with sous and smashed potato or rice{" "}
                    </p>
                  </div>
                </div>

                <div className="cost-qty-div">
                  <h2>46$ </h2>

                  <div className="button-actoion">
                    <button>-</button>
                    <h2> 8 </h2>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="CartSection2">
              <div className="car-img-text" style={{ display: "flex" }}>
                <img
                  src="src/Sales pages/pageSales1/Rectangle 1153.svg "
                  alt=" eror "
                />
                <div className="cart-text">
                  <h2> Wagyu Steak </h2> <br />
                  <p>
                    {" "}
                    250g of lean steak with sous and smashed potato or rice{" "}
                  </p>
                </div>
              </div>
              <div className="cost-qty-div">
                <h2>76$ </h2>

                <div className="button-actoion">
                  <button>-</button>
                  <h2> 1 </h2>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="SalesCardWrite">
          <h2 style={{ fontSize: "32px", color: " #151716" }}>
            Do you have any special requests?
          </h2>
          <textarea placeholder="Write here..." />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="ComboOptions">
          <h1> ComboOptions </h1>

          <div style={{ display: "flex", maxWidth: "868px", gap: "20px" }}>
            <div className="WagyuSteakCared">
              <div className="WSC-text">
                <img
                  src="src/Sales pages/pageSales1/Rectangle 1153 (1).svg "
                  alt=""
                />
                <h2> Wagyu Steak </h2>
                <p>
                  250g of lean steak with <br /> sous and smashed <br /> potato
                  or rice
                </p>

                <div className="WSC-start">
                  <h3>&#9733; &#9733; &#9733; &#9733; &#9733; </h3>{" "}
                  <h2> 46$ </h2>
                </div>
              </div>
            </div>

            <div className="WagyuSteakCared">
              <div className="WSC-text">
                <img
                  src="src/Sales pages/pageSales1/Rectangle 1153 (1).svg "
                  alt=""
                />
                <h2> Wagyu Steak </h2>
                <p>
                  250g of lean steak with <br /> sous and smashed <br /> potato
                  or rice
                </p>

                <div className="WSC-start">
                  <h3>&#9733; &#9733; &#9733; &#9733; &#9733; </h3>{" "}
                  <h2> 46$ </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: "868px",
              gap: "20px",
              paddingTop: "20px",
            }}
          >
            <div className="WagyuSteakCared">
              <div className="WSC-text">
                <img
                  src="src/Sales pages/pageSales1/Rectangle 1153 (1).svg "
                  alt=""
                />
                <h2> Wagyu Steak </h2>
                <p>
                  250g of lean steak with <br /> sous and smashed <br /> potato
                  or rice
                </p>

                <div className="WSC-start">
                  <h3>&#9733; &#9733; &#9733; &#9733; &#9733; </h3>{" "}
                  <h2> 46$ </h2>
                </div>
              </div>
            </div>
            <div className="WagyuSteakCared">
              <div className="WSC-text">
                <img
                  src="src/Sales pages/pageSales1/Rectangle 1153 (1).svg "
                  alt=""
                />
                <h2> Wagyu Steak </h2>
                <p>
                  250g of lean steak with <br /> sous and smashed <br /> potato
                  or rice
                </p>

                <div className="WSC-start">
                  <h3>&#9733; &#9733; &#9733; &#9733; &#9733; </h3>{" "}
                  <h2> 46$ </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="OrderSummary">
          <h2 className="card-title">Order summary</h2>
          <div className="details">
            <div className="row">
              <span>Order</span>
              <span>136.00$</span>
            </div>
            <div className="row">
              <span>Taxes</span>
              <span>12.00$</span>
            </div>
            <div className="row">
              <span>Delivery fees</span>

              <span> *Serves fees* </span>
              <span> 20.00$</span>
            </div>
            <div className="total">
              <span>Taxes</span>
              <span>168.00$</span>
            </div>
          </div>
          <button className="add-items">+ Add More Items</button>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default SalesPages;
