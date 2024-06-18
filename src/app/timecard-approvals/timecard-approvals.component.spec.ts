import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardApprovalsComponent } from './timecard-approvals.component';

describe('TimecardApprovalsComponent', () => {
  let component: TimecardApprovalsComponent;
  let fixture: ComponentFixture<TimecardApprovalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimecardApprovalsComponent]
    });
    fixture = TestBed.createComponent(TimecardApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
