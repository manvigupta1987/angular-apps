import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { recipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { recipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeAddedComponent } from './recipes/recipe-added/recipe-added.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: recipesComponent, canActivate: [AuthGuard], children:[
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeAddedComponent},
    {path: ':id', component: recipeDetailsComponent, resolve: [RecipesResolverService]},
    {path: ':id/edit', component: RecipeAddedComponent, resolve: [RecipesResolverService]},

  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
