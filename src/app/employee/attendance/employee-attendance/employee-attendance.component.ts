import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.scss']
})
export class EmployeeAttendanceComponent {

  constructor() { }

  displayedColumns: string[] = ['date', 'loginTime', 'logoutTime', 'workingHours', 'status'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  date: string;
  loginTime: string;
  logoutTime: string;
  workingHours: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '22/02/2024', loginTime: '09:35 AM', logoutTime:'06:32 PM', workingHours: '08:15', status: 'Working', },
  {date: '21/02/2024', loginTime: '09:45 AM', logoutTime:'06:35 PM', workingHours: '08:25', status: 'Working', },
  {date: '20/02/2024', loginTime: '10:02 AM', logoutTime:'06:32 PM', workingHours: '08:15', status: 'Working', },
  {date: '19/02/2024', loginTime: '10:12 AM', logoutTime:'06:35 PM', workingHours: '08:25', status: 'Working', },
  {date: '18/02/2024', loginTime: '09:45 AM', logoutTime:'06:35 PM', workingHours: '08:25', status: 'Working', },
];

