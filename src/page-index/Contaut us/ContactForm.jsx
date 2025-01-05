import FormInput from "./FormInput";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <header className="form-header">
        <img
          src="  src/page-index/Contaut us/Logo 1.svg "
          alt="Flavor Haven"
          className="logo"
        />
        <h1>Flavor Haven</h1>
      </header>

      <h1 className="form-h1"> We'd love to help</h1>
      <p>Get in Touch with Us, We'd Love to Hear From You!</p>

      <form>
        <div className="form-row">
          <input type="text" placeholder="First name" className="input-field" />
          <input type="text" placeholder="Last name" className="input-field" />
        </div>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="tel" placeholder="Phone number" className="input-field" />
        <textarea
          placeholder="Message"
          className="input-field textarea"
        ></textarea>

        <div className="checkbox-container">
          <input type="checkbox" id="privacy" />
          <label htmlFor="privacy">
            You agree to our friendly privacy policy
          </label>
        </div>

        <button type="button" className="submit-button">
          Back to Home
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
