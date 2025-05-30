import React, { useState } from 'react';
import '../styles/CheckoutPage.css';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {

    const [showPopup, setShowPopup] = useState(false);

    const handlePayNow = () => {
    setShowPopup(true);
    };

     const navigate = useNavigate();

  const handleTicket = () => {
    navigate('/ticket');
  };

  return (
    
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="payment-method">
        <div className="card-header">
          <span>Payment Method</span>
          <button className="change-btn">Change</button>
        </div>

        <div className="card-display">
          <div className="card-logo">💳</div>
          <div className="card-info">
            <p className="balance">$120,580.00</p>
            <p className="holder">Card Holder<br /><strong>Miles Morales</strong></p>
            <p className="number">**** **** **** 51446</p>
          </div>
        </div>
      </div>

      <div className="payment-details">
        <h3>Payment Details</h3>

        <label>Your Email</label>
        <input type="email" defaultValue="Milesmorales@gmail.com" />

        <label>Cardholder Name</label>
        <input type="text" defaultValue="Miles Morales" />

        <label>Card Number</label>
        <input type="text" defaultValue="**** **** **** 51446" />

        <div className="row">
          <div>
            <label>Date</label>
            <input type="text" defaultValue="02 Nov 2021" />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" defaultValue="123" />
          </div>
        </div>
      </div>

      <button className="pay-button" onClick={handlePayNow}>Pay Now <span>$99.8</span></button>
    
      {showPopup && (
        <div className="popup">
          <p>🎉 Payment is successful!</p>
          <button className="eticket-btn" onClick={handleTicket}>See E-ticket</button>
        </div>
      )}
    </div>


  );
}

export default CheckoutPage;