import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExploreMoviePage from './components/ExploreMoviePage';
import DetailsMoviePage from './components/DetailsMoviePage';
import SelectSeatsPage from './components/SelectSeatsPage';
import CheckoutPage from './components/CheckoutPage';
import ETicket from './components/ETicket';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExploreMoviePage />} />
        <Route path="/details/:id" element={<DetailsMoviePage />} />
           <Route path="/select-seats" element={<SelectSeatsPage />} />
           <Route path="/checkout" element={<CheckoutPage />} />
           <Route path="/ticket" element={<ETicket />} />
      </Routes>
    </Router>
  );
}

export default App;