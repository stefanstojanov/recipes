import { TestBed } from '@angular/core/testing';

import { IngredientServiceService } from './ingredient-service.service';

describe('IngredientServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientServiceService = TestBed.get(IngredientServiceService);
    expect(service).toBeTruthy();
  });
});
