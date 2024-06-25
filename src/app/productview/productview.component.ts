import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductviewService } from '../services/productview.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  products: any[] = [];
  filter: any;

  constructor(private productView: ProductviewService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     
      if (params['Categories'] === "All") {
        this.products = this.productView.getData().datafieldAll;
      }
      else if (params['Categories'] === "Tub_1l_and_500ml") {
        this.products = this.productView.getData().datafield2;
      }
      else if (params['Categories'] === "Conevita_big_100ml_and_small_60ml") {
        this.products = this.productView.getData().datafield3;
      }
      else if (params['Categories'] === "Fruitae_50ml") {
        this.products = this.productView.getData().datafield4;
      }
      else if (params['Categories'] === "Ice_Crush_50ml") {
        this.products = this.productView.getData().datafield5;
      }
      else if (params['filter'] === "Milk_Lolly_60ml") {
        this.products = this.productView.getData().datafield6;
      }
      else if (params['Categories'] === "Ice_Cream_Bar_70ml") {
        this.products = this.productView.getData().datafield7;
      }
      else if (params['Categories'] === "Sundae_125ml") {
        this.products = this.productView.getData().datafield8;
      }
      else if (params['Categories'] === "Fundae_150ml") {
        this.products = this.productView.getData().datafield9;
      }
      else if (params['Categories'] === "Ball") {
        this.products = this.productView.getData().datafield10;
      }
      else if (params['Categories'] === "Paper_Cup") {
        this.products = this.productView.getData().datafield11;
      }
      else if (params['Categories'] === "Bulk_Pack_4l") {
        this.products = this.productView.getData().datafield12;
      }
    });
  }

  // loadProducts(): void {
  //   this.products = this.productView.getProducts(this.filter);
  // }
}
