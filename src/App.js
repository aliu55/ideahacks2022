import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import './App.css';

// components
import SelectionPage from './views/selectionPage/SelectionPage';
import ConfirmationPage from './views/confirmationPage/ConfirmationPage';
import PhonePage from "./views/phonePage/PhonePage";
import LandingPage from "./views/landingPage/LandingPage";
import ResultsPage from "./views/resultsPage/ResultsPage";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/select" element={<SelectionPage />} />
          <Route path="/confirm" element={<ConfirmationPage />} />
          <Route path="/text" element={<PhonePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
    </Router>
  );
}

export default App;
