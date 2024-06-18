import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressTimeEntryComponent } from './express-time-entry.component';

describe('ExpressTimeEntryComponent', () => {
  let component: ExpressTimeEntryComponent;
  let fixture: ComponentFixture<ExpressTimeEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpressTimeEntryComponent]
    });
    fixture = TestBed.createComponent(ExpressTimeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
