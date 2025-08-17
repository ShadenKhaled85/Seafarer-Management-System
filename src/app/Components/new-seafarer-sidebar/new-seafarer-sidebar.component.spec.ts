import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeafarerSidebarComponent } from './new-seafarer-sidebar.component';

describe('NewSeafarerSidebarComponent', () => {
  let component: NewSeafarerSidebarComponent;
  let fixture: ComponentFixture<NewSeafarerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSeafarerSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSeafarerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
