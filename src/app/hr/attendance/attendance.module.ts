import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { AttendanceReportPopupComponent } from './attendance-report-popup/attendance-report-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AttendanceListComponent },
  { path: 'attendance-detail', component: AttendanceDetailComponent },
]

@NgModule({
  declarations: [
    AttendanceListComponent,
    AttendanceDetailComponent,
    AttendanceReportPopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class AttendanceModule { }
