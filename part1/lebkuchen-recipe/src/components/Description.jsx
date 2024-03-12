import React from "react";
import styles from "./Description.module.css";

function RecipeAuthor() {
  const authorLink = "https://kitchenfunwithmy3sons.com/";
  const authorPhoto =
    "https://kitchenfunwithmy3sons.com/wp-content/uploads/2022/08/mom-and-sons-square.jpg";
  const authorName = "Jill Mills";
  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Reasonable alt text"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Kitchen Fun with My Three Sons</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Lebkuchen</h1>
          <p>Lebkuchen are a German spiced cookie</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
