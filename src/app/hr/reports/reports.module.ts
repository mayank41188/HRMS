import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list/report-list/report-list.component';
import { AddReportsComponent } from './popups/add-reports/add-reports/add-reports.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ReportListComponent },
]

@NgModule({
  declarations: [
    ReportListComponent,
    AddReportsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class ReportsModule { }
