import React from "react";

const FormInput = () => {
  return (
    <form>
      <input placeholder="Enter your name" className="form-input" />
      <input
        placeholder="Enter your email"
        type="email"
        className="form-input"
      />
      <input
        placeholder="Enter your password"
        type="password"
        className="form-input"
      />
      <input
        placeholder="Enter a number"
        type="number"
        className="form-input"
      />
      <textarea
        placeholder="Enter your Massege"
        // @ts-ignore
        rows="6"
        className="form-input"
      />
    </form>
  );
};

export default FormInput;
