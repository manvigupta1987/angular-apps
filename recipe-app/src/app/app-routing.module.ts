import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { recipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { recipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeAddedComponent } from './recipes/recipe-added/recipe-added.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';

const routes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: recipesComponent, children:[
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeAddedComponent},
    {path: ':id', component: recipeDetailsComponent, resolve: [RecipesResolverService]},
    {path: ':id/edit', component: RecipeAddedComponent},

  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
