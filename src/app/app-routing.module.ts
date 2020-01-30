import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipesListComponent} from './recipes/recipes-list/recipes-list.component';
import {AddRecipeComponent} from './recipes/add-recipe/add-recipe.component';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RecipesListComponent },
  { path: 'recipeList', component: RecipesListComponent },
  { path: 'addRecipe', component: AddRecipeComponent},
  { path: 'recipeDetails/:id', component: RecipeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
