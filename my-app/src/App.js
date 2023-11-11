import headerImage from "./foodImages/homepagebanner.png"
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('❌');
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    //👇🏻 Send the SMS by calling the backend
      axios.post('http://127.0.0.1:5000/api/getInstruction', {recipeName: "Space Tartar", ingredients: ['1.5 lbs of beef', '1 lemon', '2 tortilla']})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

  };

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
        <h3>Connected to Backend: {loading ? '🔄 ' : message}</h3>
        <img src={headerImage} alt="food in space" className="headerImage"></img>
        <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
