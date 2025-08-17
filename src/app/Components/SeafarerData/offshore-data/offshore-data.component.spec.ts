import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffshoreDataComponent } from './offshore-data.component';

describe('OffshoreDataComponent', () => {
  let component: OffshoreDataComponent;
  let fixture: ComponentFixture<OffshoreDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffshoreDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffshoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
