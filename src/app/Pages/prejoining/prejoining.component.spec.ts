import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrejoiningComponent } from './prejoining.component';

describe('PrejoiningComponent', () => {
  let component: PrejoiningComponent;
  let fixture: ComponentFixture<PrejoiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrejoiningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrejoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
