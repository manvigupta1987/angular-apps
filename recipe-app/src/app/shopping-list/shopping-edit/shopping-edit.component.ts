import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.action';
import * as fromShoppingList from '../store/shopping-list.reducer';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  // @ViewChild('nameInput', {static: false}) nameInput : ElementRef;
  // @ViewChild('amountInput', {static: false}) amountInput: ElementRef;
  @ViewChild('f', {static: false}) shoppingListForm : NgForm;
  subs: Subscription;
  editMode = false;
  editedItem: Ingredient;
  constructor( private shoppingListService: ShoppingListService , private store: Store<fromShoppingList.AppState>) { }

  ngOnInit(): void {
    this.subs = this.store.select('shoppingList').subscribe(stateData => {
      if(stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      } else {
        this.editMode = false;
      }
    })
    
    // shoppingListService.startedEditing.subscribe((index: number) => {
    //   this.editMode = true;
    //   this.editedItemIndex = index;
    //   this.editedItem = this.shoppingListService.getIngredient(index);
    //   this.shoppingListForm.setValue({
    //     name: this.editedItem.name,
    //     amount: this.editedItem.amount
    //   })
    // })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit())
  }

  onAddItem(form:NgForm) {
    // this.shoppingListService.addIngredients(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    if(this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(new Ingredient(form.value.name, form.value.amount)));
      // this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(form.value.name, form.value.amount));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(new Ingredient(form.value.name, form.value.amount)));
      // this.shoppingListService.addIngredients(new Ingredient(form.value.name, form.value.amount));
    }
    this.editMode = false;
    form.reset();
  }

  OnclearForm() { 
    this.shoppingListForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit())
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.OnclearForm();
  }
}
