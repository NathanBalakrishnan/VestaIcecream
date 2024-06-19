import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningFormsComponent } from './screening-forms.component';

describe('ScreeningFormsComponent', () => {
  let component: ScreeningFormsComponent;
  let fixture: ComponentFixture<ScreeningFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreeningFormsComponent]
    });
    fixture = TestBed.createComponent(ScreeningFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
