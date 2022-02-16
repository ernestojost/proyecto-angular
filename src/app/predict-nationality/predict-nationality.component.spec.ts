import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictNationalityComponent } from './predict-nationality.component';

describe('PredictNationalityComponent', () => {
  let component: PredictNationalityComponent;
  let fixture: ComponentFixture<PredictNationalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictNationalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
