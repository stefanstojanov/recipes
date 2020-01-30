import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Ingredient} from '../recipes/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientServiceService {

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(environment.baseUrl + 'ingredients');
  }
}
