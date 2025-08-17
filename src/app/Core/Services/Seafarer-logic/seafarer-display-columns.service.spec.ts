import { TestBed } from '@angular/core/testing';

import { SeafarerDisplayColumnsService } from './seafarer-display-columns.service';

describe('SeafarerDisplayColumnsService', () => {
  let service: SeafarerDisplayColumnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeafarerDisplayColumnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
