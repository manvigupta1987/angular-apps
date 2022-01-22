import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService
  ) {}

  saveData() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient
      .put(
        'https://recipe-app-angular-335fa-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(resData => {
        console.log(resData);
      });
  }

  fetchData() {
    return this.httpClient
      .get<Recipe[]>(
        'https://recipe-app-angular-335fa-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe, 
            ingredients: recipe.ingredients ? recipe.ingredients : []
          }
        })
      }), 
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      }))
  }
}
