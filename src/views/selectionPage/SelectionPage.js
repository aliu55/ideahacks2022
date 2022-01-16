import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RadioGroup from '../../components/RadioGroup';
import './SelectionPage.css';

/* 2. Use the `useRadioGroup` hook to control a group of custom radios. */
const SelectionPage = () => {
  const timeOptions = ['morning', 'noon', 'afternoon', 'sunset', 'evening'];
  const weatherOptions = ['snowy', 'rainy', 'cool', 'sunny', 'hot'];

  const [time, setTime] = useState('');
  const [weather, setWeather] = useState('');

  return (
    <div className="selection-container">
      <div className="selection-time">
        <h1>when would you like to take a walk?</h1>
        <RadioGroup options={timeOptions} handleChange={(e) => setTime(e)}/>
      </div>
      <div className="selection-weather">
        <h1>what type of weather would you like to walk in?</h1>
        <RadioGroup options={weatherOptions} handleChange={(e) => setWeather(e)}/>
      </div>
      <div className={time !== '' && weather !== '' ? 'enabled ': 'disabled'}>
        <Link to="/text">
            <button className={time !== '' && weather !== '' ? "submit-btn btn-enabled" : "submit-btn btn-disabled"} type="button">next</button>
        </Link>
      </div>
    </div>
  )
}

export default SelectionPage;

