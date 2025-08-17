import { TestBed } from '@angular/core/testing';

import { SeafarersApiService } from './seafarers-api.service';

describe('SeafarersApiService', () => {
  let service: SeafarersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeafarersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
