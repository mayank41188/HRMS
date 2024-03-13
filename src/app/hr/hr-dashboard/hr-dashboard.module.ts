import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrDashboardComponent } from './hr-dashboard.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';

const routes: Routes = [
  { path: '', component: HrDashboardComponent },
  { path: 'recent-activity', component: RecentActivityComponent },
]

@NgModule({
  declarations: [
    HrDashboardComponent,
    RecentActivityComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class HrDashboardModule { }
