import React from 'react';
import "./Footer.css" ;
const Footer = () => {
  return (
    <footer>
      <div className="newsletter0">
        <div className="logo-container0">
          <img
            src="public/IMEG/Logo.png"
            alt="Flavor Haven Logo"
            className="logoo"
          />
          <h1 className="restaurant-name0">Flavor Haven</h1>
        </div> 
        <p> Don &apos;t forget to join us for our   <br/> newsletters</p>
        <div className="email-subscribe00">
          <input type="email" placeholder="Enter Your Email" />
          <button>Notify me</button>
        </div>
      </div>
      <nav className="footer-menu0">
        <a href="#">Home</a>
        <a href="#">Reservation</a>
        <a href="#">Menu</a>
        <a href="#">Contact Us</a>
        <a href="#">About</a>
      </nav>
      <div className="copyright0">
        <p>
          &copy; 2025 Flavor Haven. All rights reserved. No content from this
          website may be copied, reproduced, or distributed for commercial
          purposes without prior written permission from Flavor Haven.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
