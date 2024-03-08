import { Component, OnInit } from '@angular/core';
import { GeneratePayslipComponent } from '../popups/generate-payslip/generate-payslip.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payslip-list',
  templateUrl: './payslip-list.component.html',
  styleUrls: ['./payslip-list.component.scss']
})
export class PayslipListComponent implements OnInit {

  constructor(private dialog: MatDialog,) { }

  generate() {
    this.dialog.open(GeneratePayslipComponent, {
      autoFocus: false
    })
  }

  displayedColumns: string[] = ['no', 'Name', 'EmpID', 'GeneratedOn', 'Details', 'Action'];
  dataSource = ELEMENT_DATA;


  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  no: number;
  Name: string;
  EmpID: string;
  GeneratedOn: string;
  Details: string;
  Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, Name: 'John Dae', EmpID:'RT0001', GeneratedOn: '12-10-2023', Details: 'Nov 2023 - Jan 2024', Action: '', },
  {no: 2, Name: 'Sarah Smith', EmpID:'RT0002', GeneratedOn: '12-10-2023', Details: 'Sep 2023 - Oct 2023', Action: '', },
  {no: 3, Name: 'Rajesh', EmpID:'RT0003', GeneratedOn: '12-10-2023', Details: 'Aug 2023 - Sep 2023', Action: '', },
  {no: 4, Name: 'Jay Soni', EmpID:'RT0004', GeneratedOn: '12-10-2023', Details: 'Sep 2023 - Oct 2023', Action: '', },
  {no: 5, Name: 'Nisha', EmpID:'RT0005', GeneratedOn: '12-10-2023', Details: 'Nov 2023 - Jan 2024', Action: '', },

];

