import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrDashboardComponent } from './hr-dashboard.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { UpcomingInterviewsComponent } from './upcoming-interviews/upcoming-interviews.component';
import { AddNewInterviewComponent } from './upcoming-interviews/add-new-interview/add-new-interview.component';
import { RescheduleInterviewComponent } from './upcoming-interviews/reschedule-interview/reschedule-interview.component';

const routes: Routes = [
  { path: '', component: HrDashboardComponent },
  { path: 'recent-activity', component: RecentActivityComponent },
  { path: 'upcoming-interviews', component: UpcomingInterviewsComponent },
]

@NgModule({
  declarations: [
    HrDashboardComponent,
    RecentActivityComponent,
    UpcomingInterviewsComponent,
    AddNewInterviewComponent,
    RescheduleInterviewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class HrDashboardModule { }
