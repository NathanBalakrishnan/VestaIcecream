import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { HomeComponent } from './home/home.component';
import { ScreeningFormsComponent } from './screening-forms/screening-forms.component';
import { ExploreIceCreamComponent } from './explore-ice-cream/explore-ice-cream.component';
import { OurshopComponent } from './ourshop/ourshop.component';
import { ViewvideosComponent } from './viewvideos/viewvideos.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductviewComponent } from './productview/productview.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberloginComponent,
    HomeComponent,
    ScreeningFormsComponent,
    ExploreIceCreamComponent,
    OurshopComponent,
    ViewvideosComponent,
    ContactusComponent,
    AboutusComponent,
    AllproductsComponent,
    ProductviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
