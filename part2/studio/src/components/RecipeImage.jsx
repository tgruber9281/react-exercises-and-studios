import recipeData from "./recipe.json";

function RecipeImage() {
  return (
    <div>
      <img className="recipeImage" src={recipeData[0].recipeImage} alt={recipeData[0].name}/>
    </div>
  );
}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
