import React, { useState, useEffect } from 'react'
import db from '../../util/firebase'
import { ref, onValue } from 'firebase/database'
import './ResultsPage.css'

const ResultsPage = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    // read the database data from the specified database reference ("test")
    console.log("HELLO");
    onValue(ref(db, 'test'), (snapshot) => {
      const dbData = snapshot.val();
      console.log("DBDATA: ", dbData);
      if (dbData !== null) {
        setData({ ...dbData });
      } 
    })
  }, [])

  const brightness = brightnessData => {
    let brightnessText = '';
    if (brightnessData === 0) { brightnessText = 'dark' };
    if (brightnessData === 1) { brightnessText = 'dim' };
    if (brightnessData === 2) { brightnessText = 'light' };
    if (brightnessData === 3) { brightnessText = 'bright' };
    if (brightnessData === 4) { brightnessText = 'very sunny' };
    return brightnessText;
  }

  return (
    <div className="default-container results-container">
      <h1>Currently...</h1>
      <div className="info">
        <p>Brightness: {brightness(data.brightness)}</p>
      </div>
      <div className="info">
        <p>Humidity: {data.humidity}%</p>
      </div>
      <div className="info">
        <p>Temperature: {data.temperature} F</p>
      </div>
    </div>
  )
}

export default ResultsPage;
