import React from 'react';
import  "./section4.css" ;
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

          <div className="cards">
            <div className="card">
              <img
                src="src/page-index/Home/section-4/1.svg"
                alt="Wagyu Steak"
              />
              <div className="content">
                <div className="text">
                  <h3>Wagyu Steak</h3>
                  <p>
                    Wagyu Steak Wagyu Steak <br />
                    Steak Wagyu Steak
                  </p>
                  <div className="stars">
                    &#9733; &#9733; &#9733; &#9733; &#9733;   
                  </div>
                </div>
                <div className="price">68$</div>
              </div>
            </div>

            <div className="card">
              <img
                src="src/page-index/Home/section-4/2.svg"
                alt="Lobster Roll"
              />
              <div className="content">
                <div className="text">
                  <h3>Wagyu Steak</h3>
                  <p>
                    Wagyu Steak Wagyu Steak <br />
                    Steak Wagyu Steak
                  </p>
                  <div className="stars">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </div>
                </div>
                <div className="price">68$</div>
              </div>
            </div>

            <div className="card">
              <img
                src="src/page-index/Home/section-4/3.svg"
                alt="Pasta Carbonara"
              />
              <div className="content">
                <div className="text">
                  <h3>Wagyu Steak</h3>
                  <p>
                    Wagyu Steak Wagyu Steak <br />
                    Steak Wagyu Steak
                  </p>
                  <div className="stars">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </div>
                </div>
                <div className="price">68$</div>
              </div>
            </div>

            <div className="card">
              <img src="src/page-index/Home/section-4/4.svg" alt="Cheesecake" />
              <div className="content">
                <div className="text">
                  <h3>Wagyu Steak</h3>
                  <p>
                    Wagyu Steak Wagyu Steak <br />
                    Steak Wagyu Steak
                  </p>
                  <div className="stars">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </div>
                </div>
                <div className="price">68$</div>
              </div>
            </div>
          </div>

          <a href="#" className="show-all-button">
            <span>Show All</span>
            <div className="icon-container">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L10.59 3.41 16.17 9H2v2h14.17l-5.58 5.59L12 18l8-8-8-8z" />
              </svg>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Section4;
