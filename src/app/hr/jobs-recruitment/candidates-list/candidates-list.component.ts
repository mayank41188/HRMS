import { Component } from '@angular/core';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent {
  // constructor(
  //   private dialog: MatDialog,
  // ) { }

  // add() {
  //   this.dialog.open(, {
  //     autoFocus: false
  //   })
  // }


displayedColumns: string[] = ['no', 'jobId', 'name', 'jobtitle', 'department', 'role', 'status', 'source', 'resume', 'Action',];
dataSource = ELEMENT_DATA;
  
}


export interface PeriodicElement {
  no: number;
  jobId: string;
  name: string;
  jobtitle: string;
  department: string;
  role: string;
  status: string;
  source: string;
  resume: string;
  Action: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, jobId: 'New Year Day', name: '1-Jan-2024', jobtitle: 'Monday', department: 'Weekday', role:'', status:'', source:'', resume:'', Action:'',  },
  ]
  
