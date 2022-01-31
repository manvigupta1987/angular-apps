import { NgModule } from '@angular/core';
import { recipesComponent } from './recipes.component';
import { recipeListComponent } from './recipe-list/recipe-list.component';
import { recipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { recipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeAddedComponent } from './recipe-added/recipe-added.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/auth.guard';
import { RecipesResolverService } from './recipes-resolver.service';
import { SharedModule } from '../shared/shared-module';

const routes: Routes = [
  // its important to have the empty path here for lazy loading to work. Since the 'recipes' module is added
  // in the app.routing.ts, So, whenever /recipe is loaded, it will load the children  module as well. 
  {path: '', component: recipesComponent, canActivate: [AuthGuard], children:[
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeAddedComponent},
    {path: ':id', component: recipeDetailsComponent, resolve: [RecipesResolverService]},
    {path: ':id/edit', component: RecipeAddedComponent, resolve: [RecipesResolverService]},

  ]}
];

@NgModule({
  declarations:[
    recipesComponent,
    recipeListComponent,
    recipeItemComponent,
    recipeDetailsComponent,
    RecipeStartComponent,
    RecipeAddedComponent,
  ],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, SharedModule],
  exports: [
  ]

})
export class RecipeModule {
  
}