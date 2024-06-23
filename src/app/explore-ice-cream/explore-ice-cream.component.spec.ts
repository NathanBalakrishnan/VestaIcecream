import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreIceCreamComponent } from './explore-ice-cream.component';

describe('ExploreIceCreamComponent', () => {
  let component: ExploreIceCreamComponent;
  let fixture: ComponentFixture<ExploreIceCreamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreIceCreamComponent]
    });
    fixture = TestBed.createComponent(ExploreIceCreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
