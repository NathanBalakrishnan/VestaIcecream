import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-screening-forms',
  templateUrl: './screening-forms.component.html',
  styleUrls: ['./screening-forms.component.css']
})
export class ScreeningFormsComponent implements OnInit {

  ngOnInit(): void {
    jQuery(document).ready(() => {
      jQuery("#bqYes").show();
      jQuery("#bqNo").hide();
      jQuery("#approvedForm").hide();
      jQuery("#approvalForm").show();
      jQuery("#informationboard").show();
      jQuery("#submissionMessage").hide();
      jQuery("#screeningForm").show();
    });
  }

  bqYes(): void {
    jQuery("#bqYes").show();
    jQuery("#bqNo").hide();
  }

  bqNo(): void {
    jQuery("#bqYes").hide();
    jQuery("#bqNo").show();
  }

  replaceForm(flag: number): void {
    if (flag == 1) {
      jQuery("#replaceForm").show();
    } else {
      jQuery("#replaceForm").hide();
    }
  }

  oachk(): void {
    if (jQuery("#oachk").is(":checked")) {
      jQuery("#dps").hide();
    } else {
      jQuery("#dps").show();
    }
  }

  verifyAndApprove(): void {
    jQuery("#txtFirmName").text(jQuery("#firmName").val());
    jQuery("#txtEmail").text(jQuery("#firmEmail").val());
    jQuery("#txtTelephone").text(jQuery("#firmTelephone").val());
    jQuery("#txtApprovalCode").text(jQuery("#verificationCode").val());
    jQuery("#txtLicenseNumber").text(jQuery("#licenseNumber").val());
    jQuery("#txtDT").text("June 04, 2024 09:35AM");
    jQuery("#approvedForm").show();
    jQuery("#approvalForm").hide();
  }

  submitScreeningForm(): void {
    jQuery("#submissionMessage").show();
    jQuery("#informationboard").hide();
    jQuery("#screeningForm").hide();
  }
}
