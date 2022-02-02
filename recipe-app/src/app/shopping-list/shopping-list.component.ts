import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.action';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  
  
  ingredients:Observable<{ingredients: Ingredient[]}> ;
  constructor( private shoppingListService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }
// key in the store should be same as defined in the app.module.ts file. 

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.subs = this.shoppingListService.ingredientChanged.subscribe((ingredients:Ingredient[])=> {
    //   this.ingredients = ingredients;
    // })
   }

   onEditItem(index: number) {
     this.store.dispatch(new ShoppingListActions.StartEdit(index))
    //  this.shoppingListService.startedEditing.next(index);
   }
}
