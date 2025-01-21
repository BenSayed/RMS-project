import  { useState } from 'react';
import './reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    time: '',
    date: '',
    branch: '',
    guests: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleConfirm = () => {
    const { time, date, branch, guests } = formData;

    if (!time || !date || !branch || !guests) {
      alert('Please fill in all fields before confirming your reservation.');
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="sect">
      <div className="reservation-container0">
        <h1>Reservation</h1>
        <img
          src="src/page-index/Reservation/Rectangle 1162.svg"
          alt="Restaurant"
        />
        <div className="dropdowns">
          <select id="time" value={formData.time} onChange={handleChange}>
            <option value="" disabled>
              Time
            </option>
            <option value="8:00 PM">8:00 PM</option>
            <option value="9:00 PM">9:00 PM</option>
            <option value="10:00 PM">10:00 PM</option>
          </select>
          <select id="date" value={formData.date} onChange={handleChange}>
            <option value="" disabled>
              Date
            </option>
            <option value="22/1/2025">22/1/2025</option>
            <option value="23/1/2025">23/1/2025</option>
            <option value="24/1/2025">24/1/2025</option>
          </select>
          <select id="branch" value={formData.branch} onChange={handleChange}>
            <option value="" disabled>
              Branch
            </option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
            <option value="New York">New York</option>
          </select>
          <select id="guests" value={formData.guests} onChange={handleChange}>
            <option value="" disabled>
              Number of Guests
            </option>
            <option value="1">1</option>
            <option value="2">2 Adults</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm
        </button>

        {showPopup && (
          <div className="overlay" onClick={closePopup}>
            <div className="popup">
              <img
                src="src/page-index/Reservation/Rectangle 1151.svg"
                alt="Food"
              />
              <h2>Your Reservation Details</h2>
              <p>Please review your reservation details:</p>
              <div className="popup-content">
                <p>
                  <strong>Time:</strong> {formData.time}
                </p>
                <p>
                  <strong>Date:</strong> {formData.date}
                </p>
                <p>
                  <strong>Branch:</strong> {formData.branch}
                </p>
                <p>
                  <strong>Number of Guests:</strong> {formData.guests}
                </p>
              </div>
              <button className="close-button" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reservation;
