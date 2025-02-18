import React, { useRef } from "react";
import "./Section5.css";
import { Heart, ArrowRight } from "lucide-react"; // استيراد الأيقونات

const Section5 = () => {
  const reviewsRef = useRef(null);

  const handleMouseDown = (e) => {
    const reviews = reviewsRef.current;
    reviews.isDown = true;
    reviews.startX = e.pageX - reviews.offsetLeft;
    reviews.startY = e.pageY - reviews.offsetTop;
  };

  const handleMouseLeave = () => {
    const reviews = reviewsRef.current;
    reviews.isDown = false;
  };

  const handleMouseUp = () => {
    const reviews = reviewsRef.current;
    reviews.isDown = false;
  };

  const handleMouseMove = (e) => {
    const reviews = reviewsRef.current;
    if (!reviews.isDown) return;
    e.preventDefault();
    const x = e.pageX - reviews.offsetLeft;
    const y = e.pageY - reviews.offsetTop;
    const walkX = (x - reviews.startX) * 3; // Adjust scroll speed
    const walkY = (y - reviews.startY) * 3; // Adjust scroll speed
    reviews.scrollLeft = reviews.scrollLeft - walkX;
    reviews.scrollTop = reviews.scrollTop - walkY;
  };

  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <div className="main-card">
          <div className="card-content">
            <div className="image-container">
              {" "}
              <div className="card-header">
                <h2>Hear from our</h2>
                <h2 className="highlight">Satisfied Clients</h2>
                <h2>
                  have to say
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    fontSize={5}
                    fill="rgb(243, 156, 16)"
                    width="10"
                    height="10"
                  >
                    <path d="M50 91C48.6 91 47.2 90.6 46 89.8C25.9 76.1 10 61.4 10 41.7C10 29.6 20.6 19 32.7 19C39.3 19 45.3 22.1 49 27.4C52.7 22.1 58.7 19 65.3 19C77.4 19 88 29.6 88 41.7C88 61.4 72.1 76.1 52 89.8C50.8 90.6 49.4 91 48 91Z" />
                  </svg>
                </h2>
              </div>
              <img
                src="src/page-index/Home/section-5/Subtract (1).svg"
                alt="burger"
              />
            </div>

            <div className="stats">
              <p>+8.4k</p>
            </div>
          </div>
        </div>

        <div
          className="reviews-section"
          ref={reviewsRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ overflowY: "scroll", maxHeight: "400px" }}
        >
          <div className="review">
            <div className="stars">★★★★★</div>
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.&quot;
            </p>
            <div className="review-footer">
              <img
                src="src/page-index/Home/section-5/Rectangle 1161.svg"
                alt="Cameron Williamson"
                className="profile-image"
              />
              <div className="reviewer-info">
                <h4>Mark Larrat</h4>
                <span>Nursing Assistant</span>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="stars">★★★★★</div>
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolomod tempor
              incididunt ut labore et dolomod t et dolore magna aliqua.&quot;
            </p>
            <div className="review-footer">
              <img
                src="src/page-index/Home/section-5/Rectangle 1161.svg"
                alt="Cameron Williamson"
                className="profile-image"
              />
              <div className="reviewer-info">
                <h4>Cameron Williamson</h4>
                <span>President of Sales</span>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="stars">★★★★★</div>
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolomod tempor
              incididunt ut labore et dolomod t et dolore magna aliqua.&quot;
            </p>
            <div className="review-footer">
              <img
                src="src/page-index/Home/section-5/Rectangle 1161.svg"
                alt="Cameron Williamson"
                className="profile-image"
              />
              <div className="reviewer-info">
                <h4>Cameron Williamson</h4>
                <span>President of Sales</span>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="stars">★★★★★</div>
            <p>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolomod tempor
              incididunt ut labore et dolomod t et dolore magna aliqua.&quot;
            </p>
            <div className="review-footer">
              <img
                src="src/page-index/Home/section-5/Rectangle 1161.svg"
                alt="Cameron Williamson"
                className="profile-image"
              />
              <div className="reviewer-info">
                <h4>Cameron Williamson</h4>
                <span>President of Sales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-section">
        <h2>Are u The Next One!</h2>
        <button className="join-button">
          Join Now{" "}
          <img
            src="src/page-index/Home/section-5/Frame 38176.svg "
            alt=""
            width={30}
          />
        </button>
      </div>
    </section>
  );
};

export default Section5;
