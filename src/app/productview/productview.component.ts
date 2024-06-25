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
      console.log("Filter parameter:", params['filter']);
      if (params['filter'] === "All") {
        this.products = this.productView.getData().datafieldAll;
      }
      else if (params['filter'] === "Tub 1l & 500ml") {
        this.products = this.productView.getData().datafield2;
      }
      else if (params['filter'] === "Conevita big 100ml & small 60ml") {
        this.products = this.productView.getData().datafield3;
      }
      else if (params['filter'] === "Fruitae 50ml") {
        this.products = this.productView.getData().datafield4;
      }
      else if (params['filter'] === "Ice Crush 50ml") {
        this.products = this.productView.getData().datafield5;
      }
      else if (params['filter'] === "Milk Lolly 60ml") {
        this.products = this.productView.getData().datafield6;
      }
      else if (params['filter'] === "Ice Cream Bar 70ml") {
        this.products = this.productView.getData().datafield7;
      }
      else if (params['filter'] === "Sundae 125ml") {
        this.products = this.productView.getData().datafield8;
      }
      else if (params['filter'] === "Fundae 150ml") {
        this.products = this.productView.getData().datafield9;
      }
      else if (params['filter'] === "Ball") {
        this.products = this.productView.getData().datafield10;
      }
      else if (params['filter'] === "Paper Cup") {
        this.products = this.productView.getData().datafield11;
      }
      else if (params['filter'] === "Bulk Pack 4l") {
        this.products = this.productView.getData().datafield12;
      }
    });
  }

  // loadProducts(): void {
  //   this.products = this.productView.getProducts(this.filter);
  // }
}
