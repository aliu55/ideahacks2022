import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './PhonePage.css'

const PhonePage = () => {

  let navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = { phone: phoneNumber };
    const res = await axios.post('https://quiet-escarpment-02048.herokuapp.com/sendSMS', formData);
    navigate('/confirm');
  }

  return (
    <div className='default-container phone-container'>
      <h1>You're one step away!</h1>
      <form className="phone-form" onSubmit={(e) => onSubmit(e)}>
        <div>
          <label>Enter your phone number: </label>
          <input
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="1234567890"
            required
          />
        </div>
        <input type="submit" value="submit" className="submit-btn btn-enabled"/>
      </form>
    </div>
  )
}

export default PhonePage;
