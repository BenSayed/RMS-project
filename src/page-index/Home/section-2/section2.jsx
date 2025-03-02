import React from 'react';
import  "./section2.css" ; 
import  image22 from "./33.svg" ;
import  image23 from "./22.svg" ;
import  image24 from "./11.svg" ;
const Section2 = () => {
  return (
    <section className='section2'>
      <div className="features-container">
        <h2>Features</h2>
        <div className="features">
          <div className="feature">
            <img
              className="no-shadow"
              src= {image22}
              alt="Chef Icon"
            />
            <p>
              Dishes prepared by <br /> world-class chefs
            </p>
          </div>

          <div className="feature">
            <img
              className="no-shadow"
              src={image23}
              alt="Ingredients Icon"
            />
            <p>
              Fresh and local <br /> ingredients
            </p>
          </div>

          <div className="feature">
            <img
              className="no-style "
              src={image24}
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
