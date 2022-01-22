import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-added',
  templateUrl: './recipe-added.component.html',
  styleUrls: ['./recipe-added.component.css']
})
export class RecipeAddedComponent implements OnInit {
  id:number;
  editMode : boolean = false;
  recipeForm: FormGroup;

  constructor(private route:ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.editMode = (params['id'] !== null && params['id'] !== undefined);
      this.initForm();
    })
  }

  private initForm() {
    let recipeName = this.editMode ? this.recipeService.getRecipe(this.id).name : '';
    let imageUrl = this.editMode ? this.recipeService.getRecipe(this.id).imagePath : '';
    let description = this.editMode ? this.recipeService.getRecipe(this.id).description : '';
    let ingredients = new FormArray([]);
    if(this.editMode && this.recipeService.getRecipe(this.id).ingredients) {
      for(let ingredient of this.recipeService.getRecipe(this.id).ingredients) {
        ingredients.push(new FormGroup({
          'name': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*/)])
        }));
      }
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imageUrl, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients
    });
  }

  onSubmit() {
    // let name = this.recipeForm.value['name'];
    // let description = this.recipeForm.value['description'];
    // let imagePath = this.recipeForm.value['imagePath'];
    // let ingredients = this.recipeForm.value['ingredients'];
    // const recipe:Recipe = new Recipe(name, description, imagePath, ingredients);
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.saveRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount':new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*/)])
      })
    )
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index : number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    // this.recipeService.deleteIngredient(index, this.id);
  }
}
