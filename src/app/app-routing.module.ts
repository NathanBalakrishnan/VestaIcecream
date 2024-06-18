import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CaseManagementComponent } from './case-management/case-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { MockpageComponent } from './mockpage/mockpage.component';
//import { NewComplaintComponent } from './new-complaint/new-complaint.component';
import { ManageComplaintsComponent } from './manage-complaints/manage-complaints.component';
import { FormsModule } from '@angular/forms';
import { ExpressTimeEntryComponent } from './express-time-entry/express-time-entry.component';
import { ApprovalComponent } from './approval/approval.component';
// import { CaseTypeComponent } from './case-type/case-type.component';
// import { NoticeTemplateComponent } from './notice-template/notice-template.component';
// import { ViolationsComponent } from './violations/violations.component';
// import { FineComponent } from './fine/fine.component';
// import { CaseHistoryComponent } from './case-history/case-history.component';
const routes: Routes = [
  { path: "", component: MemberloginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "timeentry", component: ExpressTimeEntryComponent},
  { path: "approval", component: ApprovalComponent}
  //{ path: "casemanagement", component: CaseManagementComponent },
  //{ path: "newcomplaint", component: NewComplaintComponent },
  //{ path: "mockpage", component: MockpageComponent },
  //{ path: "casetype", component: CaseTypeComponent },
  //{ path: "noticetemplate", component: NoticeTemplateComponent },
  //{ path: "violation", component: ViolationsComponent },
  // { path: "fine", component: FineComponent },
  //{ path: "casehistory", component: CaseHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
  declarations: [
    ManageComplaintsComponent
  ]
})
export class AppRoutingModule { }
