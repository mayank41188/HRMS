import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent {
  displayedColumns: string[] = ['Particular', 'Requestedby', 'Department', 'RequestedDate'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  Particular: string;
  Requestedby: string;
  Department: string;
  RequestedDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Particular: 'Leave Approved', Requestedby: 'Sharath', Department: 'Design', RequestedDate: '25 Feb 2024'},
  {Particular: 'Leave Approved', Requestedby: 'Sharath', Department: 'Design', RequestedDate: '25 Feb 2024'},
  {Particular: 'Leave Approved', Requestedby: 'Sharath', Department: 'Design', RequestedDate: '25 Feb 2024'},
  {Particular: 'Leave Approved', Requestedby: 'Sharath', Department: 'Design', RequestedDate: '25 Feb 2024'},
];