import { Ingredient } from '../shared/ingredient-model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

  // ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients:Ingredient[] = [];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    // this.ingredientChanged.emit([...this.ingredients]);
    this.ingredientChanged.next([...this.ingredients]);

  }

  addAllIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    // this.ingredientChanged.emit([...this.ingredients]);
    this.ingredientChanged.next([...this.ingredients]);

  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientChanged.next([...this.ingredients]);
  }

  deleteIngredient(index:number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next([...this.ingredients]);
  }
}