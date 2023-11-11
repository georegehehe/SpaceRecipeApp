import React, { useState } from 'react'
import axios from 'axios';
import astrobites from "../foodImages/astrobites.png";
import "./RecipePage.css"

/* props.pageData JSON object structure
{
    name: str,
    description: str,
    img: str??,
    times: {
        prep: int,
        cook: int
    },
    ingredientsList: {
        hasMultipleSubFoods: bool,
        subFoods: [
            {
                name: str,
                ingredients: ["2 tbps butter", "1/2 cup milk", ...]
            }
        ]
    },
    directionsList: [strings]
}
*/

export default function RecipePage(props) {
    const [instruction, setInstruction] = useState("")

    const handleIngredientRequest = () => {
        axios.post("https://127.0.0.1:5000/api/getInstruction", {recipeName: props.pageData["name"], ingredients:props.pageData.ingredientsList})
        .then((response) => {
            setInstruction(response.message)
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <div id="recipe-page-container">
            <h1 id="name">{props.pageData["name"]}</h1>
            <p id="description">{props.pageData.description}</p>
            <img src={props.pageData.img} alt="food" className='recimg' />
            <div id="time-section">
                <h4 className="time-category"><span className='ident'>Prep Time:</span> <span className="time-estimate"></span></h4>
                <h4 className="time-category"><span className='ident'>Cook Time:</span> <span className="time-estimate"></span></h4>
            </div>
            <h2 className='ident'> Ingredients </h2>
{/* The subFoods array is expected be an array of parts of the food that could
be considered their own recipe (i.e. [Cookies, Filling]). This can just be an
array of strings */}
{/* props.pageData.ingredientsList JSON object format:
    {
        hasMultipleSubFoods: bool,
        subFoods: [
            {
                name: str,
                ingredients: ["2 tbps butter", "1/2 cup milk", ...]
            }
        ]
    } */}
            {props.pageData.ingredientsList.map((ingredientStr, i) => (
                <ul key={"ingredient" + i} className="ingredient">{ingredientStr}</ul>
            ))}
            <h2 id="directions-heading">Directions</h2>
            {props.pageData.directionsList.map((direction, i) => (
                <React.Fragment key={"direction" + i}>
                    <b>Step {i + 1}</b>
                    <p>{direction}</p>
                </React.Fragment>
            ))}
            <div>
            
            <h2 id="nutrition-heading" className='ident'>Nutrition Facts <span id="per-serving">(per serving)</span></h2>
            
            <button className="generate" onClick={handleIngredientRequest}>GENERATE RECIPE</button>
            <h3>{instruction}</h3>
            </div>
        </div>
    )
}