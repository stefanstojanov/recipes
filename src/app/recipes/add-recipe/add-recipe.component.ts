import { Component, OnInit } from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';
import {Router} from '@angular/router';
import {Recipe} from '../recipe';
import {NgForm} from '@angular/forms';
import {Ingredient} from '../ingredient';
import {IngredientServiceService} from '../../services/ingredient-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe;
  ingredientsList: Ingredient[];
  selectedIngredients = [];
  selectedIngredient: Ingredient;

  loaded = false;
  error = null;

  constructor(private recipeService: RecipeServiceService, private router: Router, private ingredientService: IngredientServiceService) { }

  ngOnInit() {

    this.initializeRecipe();

    this.ingredientService.getIngredients()
      .subscribe(
        (response) => {
          this.ingredientsList = response;
          this.loaded = true;
        },
        (error) => {
          this.error = error;
        }
      );
  }

  onSubmit(form: NgForm) {

    this.recipeService.addRecipe(this.recipe)
      .subscribe(
        (response) => {
          alert('Recipe has been added successfully');
          this.router.navigate(['/']);
        },
        (error) => {
          this.error = error;
        }
      );
  }

  addIngredient(ingredientName: string, ingredientQuantity: number) {
    const ingredient = {
      name: ingredientName,
      quantity: ingredientQuantity
    };

    this.selectedIngredients.push(ingredient);
    this.updateRecipe();
  }

  removeIngredient(ingredient: Ingredient) {
    const index = this.selectedIngredients.indexOf(ingredient);

    if (index > -1) {
      this.selectedIngredients.splice(index, 1);
      this.updateRecipe();
    }
  }

  updateRecipe() {
    this.recipe.ingredients = this.selectedIngredients;
  }

  initializeRecipe() {
    this.recipe = {
      name: '',
      source: '',
      prepInstructions: '',
      prepTime: {
        hours: 0,
        minutes: 0
      },
      ingredients: []
    };

    this.selectedIngredient = {
      name: 'flour',
      quantity: 1
    };
  }

  validation() {
    if (
      this.recipe.name !== '' &&
      this.recipe.source !== '' &&
      this.recipe.prepTime.hours >= 0 &&
      this.recipe.prepTime.minutes >= 0 &&
      this.recipe.ingredients.length > 0 &&
      this.recipe.prepInstructions !== ''
    ) {
      return true;
    } else {
      return false;
    }
  }



}
