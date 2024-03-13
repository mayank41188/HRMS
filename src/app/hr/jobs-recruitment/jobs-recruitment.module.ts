import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCandidatePopupComponent } from './popups/add-new-candidate-popup/add-new-candidate-popup.component';
import { AddJobFormComponent } from './add-job-form/add-job-form.component';
import { ViewJobComponent } from './view-job/view-job.component';

const routes: Routes = [
  { path: 'list', component: JobsListComponent },
  { path: 'candidatelist', component: CandidatesListComponent },
  { path: 'add-job', component: AddJobFormComponent },
  { path: 'view-job', component: ViewJobComponent },
]

@NgModule({
  declarations: [
    JobsListComponent,
    CandidatesListComponent,
    AddNewCandidatePopupComponent,
    AddJobFormComponent,
    ViewJobComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class JobsRecruitmentModule { }
