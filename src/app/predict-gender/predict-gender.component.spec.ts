import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictGenderComponent } from './predict-gender.component';

describe('PredictGenderComponent', () => {
  let component: PredictGenderComponent;
  let fixture: ComponentFixture<PredictGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
