import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { LoaderComponent } from './ui/loader/loader.component';
import {HttpClientModule} from '@angular/common/http';
import {IngredientServiceService} from './services/ingredient-service.service';
import {RecipeServiceService} from './services/recipe-service.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [IngredientServiceService, RecipeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
