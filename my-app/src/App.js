import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header'
import CenterText from './components/CenterText';

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
      <Header></Header>
      <CenterText></CenterText>
    </>
  );
}

export default App;
