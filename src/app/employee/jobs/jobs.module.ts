import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list/job-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { AddCandidatePopupComponent } from './add-candidate-popup/add-candidate-popup.component';

const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'job-detail', component: JobDetailComponent },
  
]

@NgModule({
  declarations: [
    JobListComponent,
    JobDetailComponent,
    AddCandidatePopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class JobsModule { }
