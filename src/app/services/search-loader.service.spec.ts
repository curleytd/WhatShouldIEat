import { TestBed } from '@angular/core/testing';

import { SearchLoaderService } from './search-loader.service';

describe('SearchLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchLoaderService = TestBed.get(SearchLoaderService);
    expect(service).toBeTruthy();
  });
});
