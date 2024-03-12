import styles from './Ingredients.module.css';

function RecipeIngredients() {

    const ingredients = ['1/2 cup honey', '1 cup dark brown sugar', '1/4 cup unsalted butter', '1 large egg', '2 tsp lemon zest']
    
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                {ingredients.map((ingred,index) => (
                    <li key = {index}> {ingred}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeIngredients;