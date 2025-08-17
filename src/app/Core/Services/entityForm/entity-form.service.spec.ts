import { TestBed } from '@angular/core/testing';

import { AddSeafarerFormsService } from './entity-form.service';

describe('AddSeafarerFormsService', () => {
  let service: AddSeafarerFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSeafarerFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
