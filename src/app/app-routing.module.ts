import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberloginComponent } from './memberlogin/memberlogin.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductviewComponent } from './productview/productview.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact-us",component:ContactusComponent},
  {path:"about-us",component:AboutusComponent},
  {
    path: 'all-products',
    component: AllproductsComponent,
    children: [
      { path: 'product-view', component: ProductviewComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
