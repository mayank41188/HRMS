import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent {

  displayedColumns: string[] = ['no', 'jobId', 'jobtitle', 'department', 'role', 'vacancies', 'status', 'Action',];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  no: number;
  jobId: string;
  jobtitle: string;
  department: string;
  role: string;
  vacancies: string;
  status: string;
  Action: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, jobId: '125631563', jobtitle: 'Java Developer', department: 'Backend', role:'Developer', vacancies:'5', status:'Open', Action:'',  },
  { no: 2, jobId: '125631564', jobtitle: 'Web Designer', department: 'Frontend', role:'Senior Developer', vacancies:'10', status:'Hold', Action:'',  },
  { no: 3, jobId: '125631565', jobtitle: 'Tester', department: 'Testing', role:'Developer', vacancies:'12',status:'Closed', Action:'',  },
  { no: 4, jobId: '125631566', jobtitle: 'PHP Developer', department: 'Backend', role:'Junior Developer', vacancies:'11', status:'Cancelled', Action:'',  },
  { no: 5, jobId: '125631567', jobtitle: 'IOS Developer', department: 'Backend', role:'Developer', vacancies:'24', status:'Open', Action:'',  },
  { no: 6, jobId: '125631568', jobtitle: 'Web Designer', department: 'Designing', role:'Manager', vacancies:'10', status:'Closed', Action:'',  },
  ]
