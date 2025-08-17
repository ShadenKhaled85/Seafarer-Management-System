import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayColumnsComponent } from './display-columns.component';

describe('DisplayColumnsComponent', () => {
  let component: DisplayColumnsComponent;
  let fixture: ComponentFixture<DisplayColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayColumnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
