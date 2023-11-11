import React from 'react'

/* pageData JSON object structure
{
    name: str,
    description: str,
    img: str??,
    times: {
        prep: int,
        cook: int,
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
    directionsList: [strings],
}
*/

export default function RecipePage(pageData) {
    return (
        <div id="recipe-page-container">
            <h1 id="name">{pageData.name}</h1>
            <p id="description">{pageData.description}</p>
            <img src={pageData.imgSrc} />
            <div id="time-section">
                <h4 className="time-category">Prep Time: <span className="time-estimate"></span></h4>
                <h4 className="time-category">Cook Time: <span className="time-estimate"></span></h4>
            </div>
            <h2> Ingredients </h2>
{/* The subFoods array is expected be an array of parts of the food that could
be considered their own recipe (i.e. [Cookies, Filling]). This can just be an
array of strings */}
{/* pageData.ingredientsList JSON object format:
    {
        hasMultipleSubFoods: bool,
        subFoods: [
            {
                name: str,
                ingredients: ["2 tbps butter", "1/2 cup milk", ...]
            }
        ]
    } */}
            {pageData.ingredientsList.subFoods.map((subFood, i) => (
                <React.Fragment key={"subfood" + i}>
                    {pageData.ingredientsList.hasMultipleSubFoods && 
                    <h3 className="subfood-name">{subFood.name}</h3>}
                    {subFood.ingredients.map((ingredientStr, i) => (
                        <ul key={"ingredient" + i} className="ingredient">{ingredientStr}</ul>
                    ))}
                </React.Fragment>
            ))}
            <h2 id="directions-heading">Directions</h2>
            {pageData.directionsList.map((direction, i) => (
                <React.Fragment key={"direction" + i}>
                    <b>Step {i}</b>
                    <p>{direction}</p>
                </React.Fragment>
            ))}
            <h2 id="nutrition-heading">Nutrition Facts <span id="per-serving">(per serving)</span></h2>
            
        </div>
    )
}