import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { HomeComponent } from './home/home.component';
import { ScreeningFormsComponent } from './screening-forms/screening-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberloginComponent,
    HomeComponent,
    ScreeningFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
