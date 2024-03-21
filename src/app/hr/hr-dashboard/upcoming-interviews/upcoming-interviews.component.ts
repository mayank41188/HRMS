import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewInterviewComponent } from './add-new-interview/add-new-interview.component';
import { RescheduleInterviewComponent } from './reschedule-interview/reschedule-interview.component';

@Component({
  selector: 'app-upcoming-interviews',
  templateUrl: './upcoming-interviews.component.html',
  styleUrls: ['./upcoming-interviews.component.scss']
})
export class UpcomingInterviewsComponent {
  displayedColumns: string[] = ['Time','Name', 'JobID', 'Department', 'Role','Action'];
  dataSource = ELEMENT_DATA;

  constructor(private dialog:MatDialog){}

  add(){
    this.dialog.open(AddNewInterviewComponent)
  }
  Reschedule(){
    this.dialog.open(RescheduleInterviewComponent)
  }
}
export interface PeriodicElement {
  Time:string;
  Name: string;
  JobID: string;
  Department: string;
  Role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Time: '02:30 PM', Name: 'John Doe', JobID: '125631563', Department: 'Java',Role:'Developer'},
  {Time: '02:30 PM', Name: 'John Doe', JobID: '125631563', Department: 'Java',Role:'Developer'},
  {Time: '02:30 PM', Name: 'John Doe', JobID: '125631563', Department: 'Java',Role:'Developer'},
  {Time: '02:30 PM', Name: 'John Doe', JobID: '125631563', Department: 'Java',Role:'Developer'},
];