import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttentionComponent } from '../../popups/attention/attention/attention.component';
import { ShareFormComponent } from '../../popups/share-form/share-form/share-form.component';

@Component({
  selector: 'app-tax-form-list',
  templateUrl: './tax-form-list.component.html',
  styleUrls: ['./tax-form-list.component.scss']
})
export class TaxFormListComponent {
  constructor(
    private dialog: MatDialog,
  ) { }

  shareall() {
    this.dialog.open(AttentionComponent, {
      autoFocus: false
    })
  }
  shareicon() {
    this.dialog.open(ShareFormComponent, {
      autoFocus: false
    })
  }

  displayedColumns: string[] = ['check', 'name', 'employeeID', 'email', 'uploaddate','attachement', 'Action', ];
dataSource = ELEMENT_DATA;
  
}

export interface PeriodicElement {
  check: string;
  name: string;
  employeeID: string;
  email: string;
  uploaddate: string;
  attachement: string;
  Action: string;
 
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
  { check: '', name: 'John Doe',  employeeID: 'RT0001', email: 'john@recstech.in', uploaddate: '15/01/2024', attachement: 'John_form16_2022-23', Action: '', },
  ]

