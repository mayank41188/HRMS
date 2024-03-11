import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: JobsListComponent },
  { path: 'candidatelist', component: CandidatesListComponent },
]

@NgModule({
  declarations: [
    JobsListComponent,
    CandidatesListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class JobsRecruitmentModule { }
