import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {HeaderComponent} from './header/header.component';
import { recipesComponent } from './recipes/recipes.component';
import { recipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { recipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { recipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeAddedComponent } from './recipes/recipe-added/recipe-added.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    recipesComponent,
    recipeListComponent,
    recipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    recipeDetailsComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeAddedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
