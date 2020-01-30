import { Ingredient } from './ingredient';

export interface Recipe {
  _id?: string;
  name: string;
  source: string;
  ingredients: Ingredient[];
  prepTime: { hours: number, minutes: number };
  prepInstructions: string;
}
