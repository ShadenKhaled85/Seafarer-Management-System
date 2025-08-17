import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafarersFilterComponent } from './seafarers-filter.component';

describe('SeafarersFilterComponent', () => {
  let component: SeafarersFilterComponent;
  let fixture: ComponentFixture<SeafarersFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeafarersFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeafarersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
