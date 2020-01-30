import { Component, OnInit } from '@angular/core';
import {RecipeServiceService} from '../../services/recipe-service.service';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  loaded = false;

  recipes: Recipe[];
  error = null;

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes()
      .subscribe(
        (response) => {
          this.recipes = response;
          this.loaded = true;
        },
        (error) => {
          this.error = error;
          this.loaded = true;
        }
      );
  }

  shortenInstructions(instructions: string) {
    if (instructions.length > 50) {
      return instructions.replace(/^(.{45}[^\s]*).*/, '$1') + '...';
    } else {
      return instructions;
    }
  }

  deleteRecipe(id: string) {
    this.recipeService.deleteRecipe(id)
      .subscribe(
        (response) => {
          alert(response.message);
          this.getRecipes();
        },
        (error) => {
          this.error = error;
        }
      );
  }

}
