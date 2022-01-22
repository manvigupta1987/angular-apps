import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ingredients:Ingredient[] = [];
  private subs:Subscription;
  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subs = this.shoppingListService.ingredientChanged.subscribe((ingredients:Ingredient[])=> {
      this.ingredients = ingredients;
    })
   }

   onEditItem(index: number) {
     this.shoppingListService.startedEditing.next(index);
   }
}
