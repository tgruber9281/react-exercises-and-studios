import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://kitchenfunwithmy3sons.com/";
   let authorPhoto = "https://kitchenfunwithmy3sons.com/wp-content/uploads/2022/08/mom-and-sons-square.jpg";
   let authorName = "Jill Mills";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['1/2 cup honey', '1 cup dark brown sugar', '1/4 cup unsalted butter', '1 large egg', '2 tsp lemon zest'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Lebkuchen</h1>
            <p>Lebkuchen are a German spiced cookie</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src='https://kitchenfunwithmy3sons.com/wp-content/uploads/2022/11/lebkuchen-feat-500x500.jpg' alt="Lebkuchen" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
