import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header'
import CenterText from './components/CenterText';
import HomeMenuItem from './components/HomeMenuItem';
import astrobites from "./foodImages/astrobites.png";
import galacticgrub from "./foodImages/galacticgrub.png";
import cosmocrunch from "./foodImages/cosmocrunch.png";
import orbitaloats from "./foodImages/orbitaloats.png";
import starsnacks from "./foodImages/starsnacks.png"
import zerogzest from "./foodImages/zerogzest.png"
import RecipePage from './components/RecipePage';

function App() {
  const [message, setMessage] = useState('❌');
  const [loading, setLoading] = useState(true);
  const [showingRecipe, setShowingRecipe] = useState(false);

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

  const onLearnMore = () => {
    setShowingRecipe((prevState) => (!prevState));
  }

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

  const temp = {
    "name": "astrobites",
    "description": "food",
    "img": "src",
    "times": {
        "prep": "1 hr",
        "cook": "45 min"
    },
    "ingredientsList": {
        "hasMultipleSubFoods": false,
        "subFoods": []
    },
    "directionsList": ["cook it"]
}

  const astrobitesDiscript = "AstroBites: Nutritious and delicious, these compact, easy-to-handle snacks bring the comfort of earthy flavors to astronauts dining in the vastness of space."
  const galacticgrubDiscript = "GalacticGrub is a compact, nutrient-rich meal designed for astronauts, offering a balanced blend of essential vitamins and minerals in a space-friendly form.";
  const cosmoDiscript = "Cosmo Crunch is an energy-packed snack for astronauts, featuring a crunchy texture and a mix of savory and sweet flavors, tailored for consumption in zero-gravity environments.";
  const orbitalDiscript = "OrbitalOats are a quick-cooking, hearty oatmeal blend fortified with nutrients and designed to provide sustained energy for astronauts during long missions in space.";
  const starDiscript = "Star Snacks are a variety of bite-sized, nutritious treats for astronauts, crafted to maintain freshness and provide a burst of flavor during space expeditions.";
  const zeroDiscript = "Zero G Zest is a specially formulated, tangy and refreshing meal option for astronauts, engineered to stay flavorful and satisfying in the weightlessness of space.";
  return (
    <>
      <Header></Header>
      <div>
      {!showingRecipe
      ?
      <>
        <CenterText></CenterText>
        <div className='menuContainer'>
          <HomeMenuItem clickAction={onLearnMore} food={astrobites} menuName="astrobites" menuDiscription={astrobitesDiscript}></HomeMenuItem>
          <HomeMenuItem clickAction={onLearnMore} food={galacticgrub} menuName="galacticgrub" menuDiscription={galacticgrubDiscript}></HomeMenuItem>
          <HomeMenuItem clickAction={onLearnMore} food={cosmocrunch} menuName="cosmo crunch" menuDiscription={cosmoDiscript}></HomeMenuItem>

          <HomeMenuItem clickAction={onLearnMore} food={orbitaloats} menuName="orbital oats" menuDiscription={orbitalDiscript}></HomeMenuItem>
          <HomeMenuItem clickAction={onLearnMore} food={starsnacks} menuName="star snacks" menuDiscription={starDiscript}></HomeMenuItem>
          <HomeMenuItem clickAction={onLearnMore} food={zerogzest} menuName="zero g zest" menuDiscription={zeroDiscript}></HomeMenuItem>
        </div>
      </>
      : 
        <RecipePage pageData={temp}></RecipePage>
      }
      </div>
    </>
  );
}

export default App;
