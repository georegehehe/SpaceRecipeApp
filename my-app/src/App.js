import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header'
import CenterText from './components/CenterText';
import HomeMenuItem from './components/HomeMenuItem';
import astrobites from "./foodImages/astrobites.png";
import galacticgrub from "./foodImages/galacticgrub.png";
import cosmocrunch from "./foodImages/cosmocrunch.png";

function App() {
  const [message, setMessage] = useState('❌');
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    //👇🏻 Send the SMS by calling the backend
      axios.post('http://127.0.0.1:5000/api/getResponse', {recipeName: "Space Tartar", ingredients: ['1.5 lbs of beef', '1 lemon', '2 tortilla'], prompt: "what kind of milk should I use?"})
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

  const astrobitesDiscript = "AstroBites: Nutritious and delicious, these compact, easy-to-handle snacks bring the comfort of earthy flavors to astronauts dining in the vastness of space."
  return (
    <>
      <Header></Header>
      <CenterText></CenterText>
      <div className='menuContainer'>
        <HomeMenuItem food={astrobites} menuName="astrobites" menuDiscription={astrobitesDiscript}></HomeMenuItem>
        <HomeMenuItem food={galacticgrub} menuName="galacticgrub" menuDiscription={astrobitesDiscript}></HomeMenuItem>
        <HomeMenuItem food={cosmocrunch} menuName="galacticgrub" menuDiscription={astrobitesDiscript}></HomeMenuItem>

        <HomeMenuItem food={astrobites} menuName="astrobites" menuDiscription={astrobitesDiscript}></HomeMenuItem>
        <HomeMenuItem food={galacticgrub} menuName="galacticgrub" menuDiscription={astrobitesDiscript}></HomeMenuItem>
        <HomeMenuItem food={cosmocrunch} menuName="galacticgrub" menuDiscription={astrobitesDiscript}></HomeMenuItem>
      </div>
    </>
  );
}

export default App;
