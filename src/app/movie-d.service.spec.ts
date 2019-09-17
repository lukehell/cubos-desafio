import { TestBed } from '@angular/core/testing';

import { MovieDService } from './movie-d.service';

describe('MovieDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieDService = TestBed.get(MovieDService);
    expect(service).toBeTruthy();
  });
});
