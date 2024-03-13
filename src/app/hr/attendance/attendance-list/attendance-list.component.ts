import { Component } from '@angular/core';
import { AttendanceReportPopupComponent } from '../attendance-report-popup/attendance-report-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent {

  constructor(private dialog: MatDialog,) { }

  generate() {
    this.dialog.open(AttendanceReportPopupComponent, {
      autoFocus: false
    })
  }

  displayedColumns: string[] = ['no', 'Name', 'EmpID', 'Email', 'Action'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  no: number;
  Name: string;
  EmpID: string;
  Email: string;
  Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, Name: 'John Dae', EmpID:'RT0001', Email: 'john@recstech.in', Action: '', },
  {no: 2, Name: 'Sarah Smith', EmpID:'RT0002', Email: 'smith@recstech.in', Action: '', },
  {no: 3, Name: 'Rajesh', EmpID:'RT0003', Email: 'rajesh@recstech.in', Action: '', },
  {no: 4, Name: 'Jay Soni', EmpID:'RT0004', Email: 'jay@recstech.in', Action: '', },
  {no: 5, Name: 'Nisha', EmpID:'RT0005', Email: 'nisha@recstech.in', Action: '', },

];