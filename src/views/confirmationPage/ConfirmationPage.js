import React from 'react';
import { Link } from 'react-router-dom'
import './ConfirmationPage.css'

const ConfirmationPage = () => {
  return (
    <div className="default-container confirm-container">
      <h1>You're all set!</h1>
      <p>We will curate the perfect time for you to talk and notify you via text message.</p>
      <p>In the meantime, check out what the weather is like right now...</p>
      <Link to="/results"><button type="button" className="submit-btn btn-enabled">view weather</button></Link>
    </div>
  )
}

export default ConfirmationPage;
