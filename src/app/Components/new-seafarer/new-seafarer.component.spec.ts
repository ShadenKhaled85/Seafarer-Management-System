import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeafarerComponent } from './new-seafarer.component';

describe('NewSeafarerComponent', () => {
  let component: NewSeafarerComponent;
  let fixture: ComponentFixture<NewSeafarerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSeafarerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSeafarerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
