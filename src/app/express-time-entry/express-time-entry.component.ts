import { Component } from '@angular/core';

@Component({
  selector: 'app-express-time-entry',
  templateUrl: './express-time-entry.component.html',
  styleUrls: ['./express-time-entry.component.css']
})
export class ExpressTimeEntryComponent {
  rows = [
    {
      id:1,
      selectValue: '1',
      inputValue: '',
      description: 'ITD ADMINISTRATION'
    }
  ];
  _activeTab: string = 'home';

  selectTab(_tab: string) {
    this._activeTab = _tab;
  }
  addRow() {
    const newRowId = this.rows.length + 1;
    this.rows.push({
      id: newRowId,
      selectValue: '1',
      inputValue: '',
      description: ''
    });
  }
  removeRow(id: number) {
    this.rows = this.rows.filter(row => row.id !== id);
  }
}
