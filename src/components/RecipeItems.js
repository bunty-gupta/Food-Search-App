import React from "react";

   const RecipeItems = props => {
       const { name, image, ingredientLines} = props;
       return(
          <div class="col-md-4">
                  <div class="card">
                    <img src={image} class="img-fluid"/>
                      <div class="card-body">    
                          <h4>{name}</h4>
                      </div>    
                      <ul class="list-group">
                       {ingredientLines.map(ingredient => (
                         <li class="list-group-item">
                             {ingredient}
                        </li>
                        ))}
                      </ul>
                  </div>    
                </div>      
       );};

export default RecipeItems;