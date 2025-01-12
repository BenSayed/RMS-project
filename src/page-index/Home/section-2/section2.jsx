import React from 'react';
import  "./section2.css" ; 
const Section2 = () => {
  return (
    <section className='section2'>
      <div className="features-container">
        <h2>Features</h2>
        <div className="features">
          <div className="feature">
            <img
              className="no-shadow"
              src="src/page-index/Home/section-2/33.svg"
              alt="Chef Icon"
            />
            <p>
              Dishes prepared by <br /> world-class chefs
            </p>
          </div>

          <div className="feature">
            <img
              className="no-shadow"
              src="src/page-index/Home/section-2/22.svg"
              alt="Ingredients Icon"
            />
            <p>
              Fresh and local <br /> ingredients
            </p>
          </div>

          <div className="feature">
            <img
              className="no-style "
              src="src/page-index/Home/section-2/11.svg"
              alt="Service Icon"
            />
            <p>
              Exceptional <br /> customer service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
 
 

export default Section2;
