import headerImage from "./foodImages/homepagebanner.png"
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('❌');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api')
      .then((response) => {
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
        <h1>hello world</h1>
        <img src={headerImage} alt="food in space" className="headerImage"></img>
    </>
  );
}

export default App;
