import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurshopComponent } from './ourshop.component';

describe('OurshopComponent', () => {
  let component: OurshopComponent;
  let fixture: ComponentFixture<OurshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurshopComponent]
    });
    fixture = TestBed.createComponent(OurshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
