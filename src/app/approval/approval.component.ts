import { Component } from '@angular/core';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent {
  _activeTab: string = 'home';

  selectTab(_tab: string) {
    this._activeTab = _tab;
  }
}
