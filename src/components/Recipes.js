import React from "react";
import RecipeItems from './RecipeItems'

 const Recipes = props =>{
     const { recipes }= props;
     return(
       <div class="row">
         {recipes.map(recipe =>
            <RecipeItems 
              name={recipe.recipe.label}
              image = {recipe.recipe.image}
              ingredientLines = {recipe.recipe.ingredientLines}
              />
          )}
          {recipes && recipes.length==0 &&

            <h2>Please Try with Some Different Search</h2>

          }
       </div>    
     );
 };

export default Recipes;