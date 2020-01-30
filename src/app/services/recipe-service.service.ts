import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe} from '../recipes/recipe';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(environment.baseUrl + 'recipes');
  }

  deleteRecipe(identifier: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: identifier,
      },
    };
    return this.http.delete(environment.baseUrl + 'recipe', options);
  }

  addRecipe(recipe: Recipe) {
    const options = {
    };
    return this.http.put(environment.baseUrl + 'recipe', recipe);
  }

  getRecipe(identifier: string): Observable<any> {
    const options = {
      id: identifier
    };
    return this.http.post(environment.baseUrl + 'recipe', options);
  }
}
