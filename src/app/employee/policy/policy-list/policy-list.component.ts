import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})
export class PolicyListComponent {

  constructor() { }

  displayedColumns: string[] = ['no', 'title', 'file', 'date', 'Action',];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  no: number;
  title: string;
  file: string;
  date: string;
  Action: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, title: 'Attendance Policies', file: 'Attendancepolicies.Pdf', date: '02/11/2023', Action: '',},
  { no: 2, title: 'Leave Policies', file: 'Leavepolicies.Pdf', date: '28/10/2023', Action: '',},
  { no: 3, title: 'Employee Provident Fund', file: 'Employeepf.Pdf', date: '15/10/2023', Action: '',},
  { no: 4, title: 'Paternity And Maternity Leave Policy', file: 'Paternity-Maternity-Leave-Policy.Pdf', date: '10/10/2023', Action: '',},
  { no: 5, title: 'Employment Contract', file: 'Employment Contract.Xlsx', date: '02/10/2023', Action: '',},
  ]
