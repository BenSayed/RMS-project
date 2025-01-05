import React from "react";
 import ContactForm from "./ContactForm";
 
import ImageSection from "./ImageSection";
const Countact = () => {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <ContactForm />
        <ImageSection />
      </div>
    </div>
  );
};

export default Countact;
