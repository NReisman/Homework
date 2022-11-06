 // jshint -W119
 // jshint -W117
(async function () {
    'use strict';

    // const recipeSelect = $('#recipes');
    // const nameElem = $('#name');
    // const pictureElem = $('#picture');
    // const ingredientsElem = $('#ingredients');
    // const noRecipe = $('.noRecipe');

    
    try {
      const response = await fetch('recipes.json');
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const recipes = await response.json();
      recipes.forEach(recipe => {
        //$(`<option>${recipe.name}</option>`)
        //.appendTo(recipeSelect)
  
        recipeSelect
          .append(`<option value="${recipe.id}">${recipe.name}</option>`);
      });
  
      recipeSelect.change(async function (e) {
        //console.log(e.target.value);
        //console.log(recipeSelect.val());
        //console.log(this.value);
  
        try {
          const response = await fetch(`${this.value}.json`);
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          const recipe = await response.json();
  
          nameElem.text(recipe.name);
          pictureElem.attr('src', recipe.picture);
  
          ingredientsElem.empty();
          recipe.ingredients.forEach(ingredient => {
            ingredientsElem.append(`<li>${ingredient}</li>`);
          });
          noRecipe.show();
        }
        catch (e) {
          console.error('oops', e);
        }
      });
    } catch (e) {
      console.error('oops', e);
    }

    // async function loadJson(url) {
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok) {
    //             throw new Error(`${response.status} ${response.statusText}`);
    //         }
    //         const result = await response.json();
    //         return result;
    //     }
    //     catch (e) {
    //         console.error('oops', e);
    //     }
    // }

    // async function loadRecipes() {
    //     const recipes = await loadJson('recipes.json')
    //     recipes.forEach(recipe => {
    //         recipeSelect
    //             .append(`<option value="${recipe.id}">${recipe.name}</option>`);
    //     });

    //     recipeSelect.change(recipeSelected);
    // }

    // async function recipeSelected(e) {
    //     const recipe = await loadJson(`${this.value}.json`);

    //     nameElem.text(recipe.name);
    //     pictureElem.attr('src', recipe.picture);

    //     ingredientsElem.empty();
    //     recipe.ingredients.forEach(ingredient => {
    //         ingredientsElem.append(`<li>${ingredient}</li>`);
    //     });
    //     noRecipe.show();
    // }

    // loadRecipes();
}());


