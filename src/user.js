class User {
  constructor(user, pantry) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  
  saveRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeRecipe(recipe) {
    let i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1);
  }

  decideToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  filterRecipes(type) {
    return this.favoriteRecipes.filter(recipe => recipe.type.includes(type));
  }

  checkPantryForIngredients(recipeToCook) {
    let missingIngredients = recipeToCook.ingredients.map(ingredient => {
    let pantryIngredient = this.pantry.checkPantryIngredients(ingredient)
    })
    let notEnoughIngredients = 
    recipeToCook.ingredients.reduce((acc, ingredient) => {
      let result = this.pantry.checkIngredientAmount(ingredient)
      if (!acc.includes(result) && result) {
          acc.push(result)
      }
      return acc
    }, []) 
    console.log('notEnoughIngredients', notEnoughIngredients);
    
      return notEnoughIngredients
    
  //   let thing = missingIngredients.reduce((missingIngredients, ingredient) =>  {
  //     if (ingredient !== true) {
  //       missingIngredients.push(ingredient)
  //     }
  //     return missingIngredients
  // }, [])
  //   return thing.length > 0 ? thing : true
  };
}

module.exports = User;
