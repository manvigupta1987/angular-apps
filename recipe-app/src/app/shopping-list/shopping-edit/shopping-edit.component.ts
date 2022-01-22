import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

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
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subs = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onAddItem(form:NgForm) {
    // this.shoppingListService.addIngredients(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(form.value.name, form.value.amount));
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredients(new Ingredient(form.value.name, form.value.amount));
    }
    form.reset();
  }

  OnclearForm() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.OnclearForm();
  }
}
