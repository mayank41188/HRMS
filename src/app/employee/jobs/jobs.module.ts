import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list/job-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';

const routes: Routes = [
  { path: '', component: JobListComponent },
  
]

@NgModule({
  declarations: [
    JobListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class JobsModule { }
