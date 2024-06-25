import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {
  constructor(private router: Router) { }
  ngOnInit() {
    // Navigate to the default route on component initialization
    this.productView('All');
  }

  selectedView: string = 'All';
  productView(val: string) {
    this.selectedView = val;
    this.router.navigate(['all-products/product-view'], { queryParams: { filter: val } });
  }
}
