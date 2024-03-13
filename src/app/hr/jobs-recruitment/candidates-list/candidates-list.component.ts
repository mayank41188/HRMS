import { Component } from '@angular/core';
import { AddNewCandidatePopupComponent } from '../popups/add-new-candidate-popup/add-new-candidate-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent {
  constructor(
    private dialog: MatDialog,
  ) { }

  add() {
    this.dialog.open(AddNewCandidatePopupComponent, {
      autoFocus: false
    })
  }


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
  { no: 1, jobId: '125631563', name: 'John Doe', jobtitle: 'Java Developer', department: 'Backend', role:'Developer', status:'Open', source:'RECS542', resume:'John CV.PDF', Action:'',  },
  { no: 2, jobId: '125631564', name: 'Sarah Smith', jobtitle: 'Web Designer', department: 'Frontend', role:'Senior Developer', status:'Hold', source:'LinkedIn', resume:'SM_res.PDF', Action:'',  },
  { no: 3, jobId: '125631565', name: 'Rajesh', jobtitle: 'Tester', department: 'Testing', role:'Developer', status:'Closed', source:'Naukri', resume:'raju_CV.PDF', Action:'',  },
  { no: 4, jobId: '125631566', name: 'Jay Soni', jobtitle: 'PHP Developer', department: 'Backend', role:'Junior Developer', status:'Cancelled', source:'LinkedIn', resume:'--', Action:'',  },
  { no: 5, jobId: '125631567', name: 'Rajesh', jobtitle: 'IOS Developer', department: 'Backend', role:'Developer', status:'Open', source:'Naukri', resume:'raju_CV.PDF', Action:'',  },
  { no: 6, jobId: '125631568', name: 'Nisha', jobtitle: 'Web Designer', department: 'Designing', role:'Manager', status:'Closed', source:'RECS572', resume:'--', Action:'',  },
  ]
  
