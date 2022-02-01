import { Action } from '@ngrx/store';
import * as ShoppingListActions from './shopping-list.action';
import { Ingredient } from 'src/app/shared/ingredient-model';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)  
  ]
}
export function shoppingListReducer(state = initialState, action : ShoppingListActions.AddIngredient) {
  switch(action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state, 
        ingredients: [...state.ingredients, action.payload]
      }
    default : 
      return state;
  }
}