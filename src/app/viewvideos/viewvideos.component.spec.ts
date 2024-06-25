import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvideosComponent } from './viewvideos.component';

describe('ViewvideosComponent', () => {
  let component: ViewvideosComponent;
  let fixture: ComponentFixture<ViewvideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewvideosComponent]
    });
    fixture = TestBed.createComponent(ViewvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
