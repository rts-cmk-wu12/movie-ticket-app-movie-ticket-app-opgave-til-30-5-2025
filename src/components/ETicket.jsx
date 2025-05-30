import React, { useState } from "react";
import "../styles/ETicket.css";
import { useNavigate } from "react-router-dom";

function ETicket () {

     return (
    <div className="container">
      <div className="ticket-box">
        <h1 className="title">E-Ticket</h1>
        <p className="instruction">
          Come to the cinema, show and scan the barcode to the space provided.
          Continue to comply with health protocols.
        </p>

        <div className="ticket-card">
          <div className="ticket-header">
            <span className="film">Film: Shang-Chi</span>
            <span className="e-ticket-label">e-ticket</span>
          </div>

          <div className="ticket-details">
            <div>
              <p className="label">Date</p>
              <p>06/09/2021</p>
            </div>
            <div>
              <p className="label">Seats</p>
              <p>c4, c5</p>
            </div>
            <div>
              <p className="label">Location</p>
              <p>Viva Cinema</p>
            </div>
            <div>
              <p className="label">Time</p>
              <p>01.00 PM</p>
            </div>
            <div>
              <p className="label">Payment</p>
              <p>Successful</p>
            </div>
            <div>
              <p className="label">Order</p>
              <p>1904566</p>
            </div>
          </div>

          <div className="divider" />

          
        </div>

        <button className="download-btn">Download E-Ticket</button>
      </div>
    </div>
  );
};

export default ETicket; 