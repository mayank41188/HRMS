import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.scss']
})
export class PayrollListComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['no', 'Name', 'EmpID', 'EmpType', 'Email', 'Action'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  no: number;
  Name: string;
  EmpID: string;
  EmpType: string;
  Email: string;
  Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, Name: 'John Dae', EmpID:'RT0001', EmpType: 'Probation', Email: 'john@recstech.in', Action: '', },
  {no: 2, Name: 'Sarah Smith', EmpID:'RT0002', EmpType: 'Permanent', Email: 'smith@recstech.in', Action: '', },
  {no: 3, Name: 'Rajesh', EmpID:'RT0003', EmpType: 'Intern', Email: 'rajesh@recstech.in', Action: '', },
  {no: 4, Name: 'Jay Soni', EmpID:'RT0004', EmpType: 'Probation', Email: 'jay@recstech.in', Action: '', },
  {no: 5, Name: 'Nisha', EmpID:'RT0005', EmpType: 'Permanent', Email: 'nisha@recstech.in', Action: '', },

];

