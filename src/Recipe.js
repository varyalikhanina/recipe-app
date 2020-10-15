import React from 'react';

function Recipe({title, link, image, ingredients, labels}) {
    return (
        <div className="recipes__item">
            <div className="recipes__labels">
                {labels.map((label) => (
                    <p className="recipes__label">{label}</p>
                ))}
            </div>
            <img src={image} alt="Recipe Image"/>
            <h2 className="recipes__item-title">{title}</h2>
            <ul className="recipes__item-list">
                {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <a className="recipes__item-link" href={link} target="_blank">Click to see the recipe</a>
        </div>
    );
}

export default Recipe;