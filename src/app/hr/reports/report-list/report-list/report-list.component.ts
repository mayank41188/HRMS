import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReportsComponent } from '../../popups/add-reports/add-reports/add-reports.component';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent {
  constructor(
    private dialog: MatDialog,
  ) { }

  add() {
    this.dialog.open(AddReportsComponent, {
      autoFocus: false
    })
  }
  
displayedColumns: string[] = ['no', 'expense', 'purchasedfrom', 'purchasedate', 'mode', 'invoice', 'amount', 'Action'];
dataSource = ELEMENT_DATA;
  
}

export interface PeriodicElement {
  no: number;
  expense: string;
  purchasedfrom: string;
  purchasedate: string;
  mode: string;
  invoice: string;
  amount: string;
  Action: string;
 
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, expense: 'Laptop', purchasedfrom: 'Shop', purchasedate: '02/11/2023', mode: 'Card', invoice:'laptop.Pdf', amount: '70,000', Action:'', },
  ]

