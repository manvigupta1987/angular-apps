import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private httpClient:HttpClient, private recipeService: RecipeService) {

  }

  saveData() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient.put('https://recipe-app-angular-335fa-default-rtdb.firebaseio.com/recipes.json',
        recipes).subscribe((resData)=> {
          console.log(resData);
        });
  }

  fetchData() {
    this.httpClient.get('https://recipe-app-angular-335fa-default-rtdb.firebaseio.com/recipes.json')
      .subscribe((resData)=>{
    console.log(resData);       
  })
  }
}