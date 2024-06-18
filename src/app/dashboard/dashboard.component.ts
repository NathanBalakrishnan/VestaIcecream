import { Component } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  ngOnInit() {
    jQuery(".sidebar-wrapper").show();
    jQuery("#nav-bar-header").show();
    jQuery(".page-footer").show();
    jQuery("header").show();
    jQuery(".page-wrapper-none").addClass("page-wrapper");
    jQuery(".page-wrapper").removeClass("page-wrapper-none");
    if (localStorage.getItem("login") == "yes") {
      localStorage.setItem("login", "success");
      localStorage.setItem("nc", "yes");
      location.reload()
    }
  }

}
