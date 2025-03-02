import React, { useRef } from "react";
import "./Section5.css";

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
        <div className="image-section">
          <img src="public/IMEG/Frame 38175.png" alt="Testimonials" />
          <div className="likes">+8.4k</div>
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
                src="mark-profile.jpg"
                alt="Mark Larrat"
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
                src="public/IMEG/f983f47c-90a7-415f-bcfd-bb489ab674b7.jpg"
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
                src="public/IMEG/f983f47c-90a7-415f-bcfd-bb489ab674b7.jpg"
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
                src="public/IMEG/f983f47c-90a7-415f-bcfd-bb489ab674b7.jpg"
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
          Join Now <img src="public/IMEG/Frame 38176.png" alt="" width={30} />
        </button>
      </div>
    </section>
  );
};

export default Section5;
