import { TestBed } from '@angular/core/testing';

import { AddSeafarerFormService } from './add-seafarer-form.service';

describe('AddSeafarerFormService', () => {
  let service: AddSeafarerFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSeafarerFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
