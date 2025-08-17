import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafarerEmpDataComponent } from './seafarer-emp-data.component';

describe('SeafarerEmpDataComponent', () => {
  let component: SeafarerEmpDataComponent;
  let fixture: ComponentFixture<SeafarerEmpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeafarerEmpDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeafarerEmpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
