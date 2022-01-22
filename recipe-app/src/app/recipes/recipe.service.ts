import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // this also can be replaced with Subject 

  private recipes:Recipe[] = [
    new Recipe('Tasty Pasta', 'A super creamy Pasta', 'https://cdn.pixabay.com/photo/2016/07/13/16/19/creamy-pasta-1514893_1280.jpg', [
      new Ingredient("Pasta", 1),
      new Ingredient("Garlic", 1),
      new Ingredient("Spinach", 1),
      new Ingredient("Cream Cheese", 1),  
    ]),
    new Recipe('A Big fat Burger', 'What else do you want to say? ', 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg', [
      new Ingredient("Buns", 2),
      new Ingredient("Chicken Patty", 1),
      new Ingredient("Cheese", 1),
      new Ingredient("Onions", 1),
      new Ingredient("Tomato", 1),
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addAllIngredients(ingredients);
  }

  getRecipe(id:number) {
    return this.recipes[id];
  }

  saveRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}