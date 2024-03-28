import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { JobsService } from 'app/hr/hr-services/jobs.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent {


displayedColumns: string[] = ['no', 'jobId', 'jobtitle', 'department', 'role', 'vacancies', 'status', 'Action',];
dataSource = new MatTableDataSource<any>([]);

constructor(private jobService:JobsService){}

getJobList(){
  this.jobService.getJobList().subscribe(data => {
    this.dataSource = data;
  })
}

ngOnInit(): void {
  this.getJobList();
}
}
