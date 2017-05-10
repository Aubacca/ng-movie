import { TestBed, inject } from '@angular/core/testing';

import { MovieSearchServiceService } from './movie-search-service.service';

describe('MovieSearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieSearchServiceService]
    });
  });

  it('should ...', inject([MovieSearchServiceService], (service: MovieSearchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
