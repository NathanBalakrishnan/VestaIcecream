import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-memberlogin',
  templateUrl: './memberlogin.component.html',
  styleUrls: ['./memberlogin.component.css']
})
export class MemberloginComponent implements OnInit {

  ngOnInit(): void {
    this.initializeJQuery();
  }

  initializeJQuery(): void {
    jQuery(document).ready(() => {
      jQuery("#signIn").show();
      jQuery("#signUp").hide();
      jQuery("#frmBlock").removeClass("form-block-si");
      jQuery("#frmBlock").removeClass("form-block");
      jQuery("#frmBlock").addClass("form-block-si");
    });
  }

  showSignUp(): void {
    jQuery("#frmBlock").removeClass("form-block-si");
    jQuery("#frmBlock").removeClass("form-block");
    jQuery("#frmBlock").addClass("form-block");
    jQuery("#signIn").hide();
    jQuery("#signUp").show();
  }

  showSignIn(): void {
    jQuery("#frmBlock").removeClass("form-block-si");
    jQuery("#frmBlock").removeClass("form-block");
    jQuery("#frmBlock").addClass("form-block-si");
    jQuery("#signIn").show();
    jQuery("#signUp").hide();
  }

  signIn(): void {
    window.location.href = "index.html";
  }
}
