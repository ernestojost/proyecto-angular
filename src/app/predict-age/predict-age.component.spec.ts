import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictAgeComponent } from './predict-age.component';

describe('PredictAgeComponent', () => {
  let component: PredictAgeComponent;
  let fixture: ComponentFixture<PredictAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
