import recipeData from "./recipe.json"
import "./styling.css"

const recipeAuthor = recipeData[0].author
const recipeAuthorImage = recipeData.map(img => {
  return (
    <div key={img}>
    <img className="authorImage" src={img.authorImage} alt={recipeAuthor} />
    </div> )
})
const recipeWebsite = recipeData.map(url => {
  return (
    <div key={url}>
    <a href={url.website}>{recipeAuthor}'s Website</a>
    </div>
  )
})

function AuthorInfo() {
   return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 