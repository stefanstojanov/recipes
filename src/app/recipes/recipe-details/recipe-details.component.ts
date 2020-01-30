import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../recipe';
import {RecipeServiceService} from '../../services/recipe-service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  loaded = false;

  recipe: Recipe;
  error = null;

  constructor(private route: ActivatedRoute, private recipeService: RecipeServiceService, private router: Router) { }

  ngOnInit() {
    this.getIdParam();
  }

  getIdParam() {
    this.route.params.subscribe(
      (params) => {
        this.getRecipe(params.id);
      }
    );
  }

  getRecipe(id: string) {
    this.recipeService.getRecipe(id)
      .subscribe(
        (response) => {
          this.recipe = response;
          this.loaded = true;
        },
        (error) => {
          this.error = error;
        }
      );
  }

  deleteRecipe(id: string) {
    if (confirm('Are you sure you want to remove this recipe?')){
      this.recipeService.deleteRecipe(id)
        .subscribe(
          (response) => {
            alert(response.message);
            this.router.navigate(['/']);
          },
          (error) => {
            this.error = error;
          }
        );
    }
  }

}
