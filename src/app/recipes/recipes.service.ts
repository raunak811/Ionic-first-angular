import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Cake',
      imageurl: 'https://d2z4fd79oscvvx.cloudfront.net/0027672_birthday_chocolate_cake_385.jpeg',
      ingredients: ['malai', 'Milk', 'Sugar']
    },
    {
      id: 'r2',
      title: 'Spghetti',
      imageurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Spaghettata.JPG/270px-Spaghettata.JPG',
      ingredients: ['spaghetti', 'Meat', 'Tomato']
    }
  ];

  constructor() { }

  getAllrecipes() {
    return [...this.recipes];
  }

  getRecipe(reciepeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === reciepeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    console.log('kkk', this.recipes);
  }
}
