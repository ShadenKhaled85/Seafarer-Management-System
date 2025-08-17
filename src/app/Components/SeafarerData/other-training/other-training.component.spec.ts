import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTrainingComponent } from './other-training.component';

describe('OtherTrainingComponent', () => {
  let component: OtherTrainingComponent;
  let fixture: ComponentFixture<OtherTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
