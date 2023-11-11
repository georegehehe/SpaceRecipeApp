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
  const [currentRecipe, setCurrentRecipe] = useState({});

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

  const onLearnMore = (recipe) => {
    setCurrentRecipe(recipe);
    setShowingRecipe((prevState) => (!prevState));
  }

  const toHomePage = () => {
    setShowingRecipe(false);
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

  const astrobitesInfo = {
    "name": "astrobites",
    "description": "AstroBites: Nutritious and delicious, these compact, easy-to-handle snacks bring the comfort of earthy flavors to astronauts dining in the vastness of space.",
    "img": astrobites,
    "times": {
        "prep": "30 min",
        "cook": "30min"
    },
    "ingredientsList": [
      "1 butter",
      "2 milk",
      "3 oats",
      "4 space juice",
      "5 computer parts"
    ],
    "directionsList": ["cook it"]
  }

  const galacticgrubInfo = {
    "name": "galacticgrub",
    "description": "GalacticGrub is a compact, nutrient-rich meal designed for astronauts, offering a balanced blend of essential vitamins and minerals in a space-friendly form.",
    "img": galacticgrub,
    "times": {
        "prep": "5 min",
        "cook": "15 min"
    },
    "ingredientsList": [
        '1 star powder',
        '2 vegan milk',
        '3 water',
        '4 stawberries'
    ],
    "directionsList": ["cook it"]
  }

  const cosmocrunchInfo = {
    "name": "cosmic crunch",
    "description": "AstroBites: Nutritious and delicious, these compact, easy-to-handle snacks bring the comfort of earthy flavors to astronauts dining in the vastness of space.",
    "img": cosmocrunch,
    "times": {
        "prep": "30 min",
        "cook": "30min"
    },
    "ingredientsList": [
      "1 butter",
      "2 milk",
      "3 sugar",
      "4 space sugar",
      "5 coffe"
    ],
    "directionsList": ["cook it"]
  }

  const orbitaloatsInfo = {
    "name": "galacticgrub",
    "description": "GalacticGrub is a compact, nutrient-rich meal designed for astronauts, offering a balanced blend of essential vitamins and minerals in a space-friendly form.",
    "img": orbitaloats,
    "times": {
        "prep": "5 min",
        "cook": "15 min"
    },
    "ingredientsList": [
        '1 love',
        '2 lettuce',
        '3 sunlight',
        '4 water',
        '5 grapes'
    ],
    "directionsList": ["cook it"]
  }

  const starsnacksInfo = {
    "name": "Star Snacks",
    "description": "AstroBites: Nutritious and delicious, these compact, easy-to-handle snacks bring the comfort of earthy flavors to astronauts dining in the vastness of space.",
    "img": starsnacks,
    "times": {
        "prep": "30 min",
        "cook": "30min"
    },
    "ingredientsList": [
      "1 apple juice",
      "2 star light",
      "3 bread crumbs",
      "4 pineapple",
      "5 water",
      "6 flour"
    ],
    "directionsList": ["cook it"]
  }

  const zerogzestInfo = {
    "name": "Zero G Zest",
    "description": "GalacticGrub is a compact, nutrient-rich meal designed for astronauts, offering a balanced blend of essential vitamins and minerals in a space-friendly form.",
    "img": zerogzest,
    "times": {
        "prep": "5 min",
        "cook": "15 min"
    },
    "ingredientsList": [
        '1 gravity',
        '2 edible rocket fuel',
        '3 brown sugar',
        '4 chocolate chips',
        '5 baking soda',
        '6 root beer'
    ],
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
          <HomeMenuItem clickAction={() => onLearnMore(astrobitesInfo)} food={astrobites} menuName="astrobites" menuDiscription={astrobitesDiscript}></HomeMenuItem>
          <HomeMenuItem clickAction={() => onLearnMore(galacticgrubInfo)} food={galacticgrub} menuName="galacticgrub" menuDiscription={galacticgrubDiscript}></HomeMenuItem>
          <HomeMenuItem clickAction={() => onLearnMore(cosmocrunchInfo)} food={cosmocrunch} menuName="cosmo crunch" menuDiscription={cosmoDiscript}></HomeMenuItem>

          <HomeMenuItem clickAction={() => onLearnMore(orbitaloatsInfo)} food={orbitaloats} menuName="orbital oats" menuDiscription={orbitalDiscript}></HomeMenuItem>
          <HomeMenuItem clickAction={() => onLearnMore(starsnacksInfo)} food={starsnacks} menuName="star snacks" menuDiscription={starDiscript}></HomeMenuItem>
          <HomeMenuItem clickAction={() => onLearnMore(zerogzestInfo)} food={zerogzest} menuName="zero g zest" menuDiscription={zeroDiscript}></HomeMenuItem>
        </div>
      </>
      : 
        <RecipePage pageData={currentRecipe} onBack={toHomePage}></RecipePage>
      }
      </div>
    </>
  );
}

export default App;
