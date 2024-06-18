import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
//import { DataTablesModule } from 'angular-datatables';
import { MockpageComponent } from './mockpage/mockpage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { CaseManagementComponent } from './case-management/case-management.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ExpressTimeEntryComponent } from './express-time-entry/express-time-entry.component';
import { ApprovalComponent } from './approval/approval.component';
import { TimecardApprovalsComponent } from './timecard-approvals/timecard-approvals.component';
//import { NewComplaintComponent } from './new-complaint/new-complaint.component';
//import { CaseTypeComponent } from './case-type/case-type.component';
//import { NoticeTemplateComponent } from './notice-template/notice-template.component';
//import { ViolationsComponent } from './violations/violations.component';
//import { FineComponent } from './fine/fine.component';
//import { CaseHistoryComponent } from './case-history/case-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MemberloginComponent,
    MockpageComponent,
    ExpressTimeEntryComponent,
    ApprovalComponent,
    TimecardApprovalsComponent,
    //  NewComplaintComponent,
    //  CaseManagementComponent,
    //CaseTypeComponent,
    //NoticeTemplateComponent,
    //  ViolationsComponent,
    //FineComponent,
    //CaseHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //  DataTablesModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
