import React, { useState } from 'react';
import '../styles/SelectSeatsPage.css';
import { useNavigate } from 'react-router-dom';

function SelectSeatsPage() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (index) => {
    setSelectedSeats((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const navigate = useNavigate();

  const handlecheckout = () => {
    navigate('/checkout');
  };

  const renderSeats = () => {
    return Array.from({ length: 40 }, (_, index) => {
      const isReserved = index >= 10 && index <= 25;
      const isSelected = selectedSeats.includes(index);

      return (
        <div
          key={index}
          className={`seat ${isReserved ? 'reserved' : isSelected ? 'selected' : 'available'}`}
          onClick={() => !isReserved && toggleSeat(index)}
        />
      );
    });
  };

  return (
    <div className="select-seats-page">
      <h2>Select Seats</h2>

      <div className="form-section">
        <select><option>Empire XXI Yogyakarta</option><option>Kinopalæet</option></select>
        <div className="datetime">
          <select><option>30 maj 2025</option></select>
          <select><option>02:00 PM</option></select>
        </div>
      </div>

      <div className="screen">SCREEN</div>

      <div className="seats-grid">{renderSeats()}</div>

      <div className="legend">
        <div><span className="dot selected"></span>Selected</div>
        <div><span className="dot reserved"></span>Reserved</div>
        <div><span className="dot available"></span>Available</div>
      </div>

      <button className="checkout-button" onClick={handlecheckout}>Checkout</button>
    </div>
  );
}

export default SelectSeatsPage;