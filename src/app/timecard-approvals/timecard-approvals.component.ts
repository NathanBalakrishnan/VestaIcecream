import { Component } from '@angular/core';

@Component({
  selector: 'app-timecard-approvals',
  templateUrl: './timecard-approvals.component.html',
  styleUrls: ['./timecard-approvals.component.css']
})
export class TimecardApprovalsComponent {
  _datas=[
    {
      approvalGroup:"4301-010",
      description:"Jenifer Luong",
      emplId:"107750",
      name:"Burligh RayT",
      regHrs:"4.75",
      absHrs:"0",
      totalRegAndAbs:"4.75",
      otHrs:"0",
      othUnits:"0",
      approvalStatus:"Supervisor & Timekeeper",
      comments:"comments"
    },
    {
      approvalGroup:"4301-010",
      description:"Robert Michael",
      emplId:"126020",
      name:"Le,Thomas",
      regHrs:"72.00",
      absHrs:"0",
      totalRegAndAbs:"80.00",
      otHrs:"0.25",
      othUnits:"0",
      approvalStatus:"Supervisor & Timekeeper",
      comments:"comments"
    }
  ]
}
