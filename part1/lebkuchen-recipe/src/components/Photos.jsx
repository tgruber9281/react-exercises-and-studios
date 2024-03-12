import styles from './Description.module.css';

function RecipePhoto () {
    const recipePhotoURL = 'https://kitchenfunwithmy3sons.com/wp-content/uploads/2022/11/lebkuchen-feat-500x500.jpg'
    return (
        <img src={recipePhotoURL} alt="Photo of Lebkuchen" className = {styles.imageUpdates} />
    )
}

export default RecipePhoto;