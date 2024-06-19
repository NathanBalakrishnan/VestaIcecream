import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { HomeComponent } from './home/home.component';
import { ScreeningFormsComponent } from './screening-forms/screening-forms.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:MemberloginComponent},
  {path:"screening-form",component:ScreeningFormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
