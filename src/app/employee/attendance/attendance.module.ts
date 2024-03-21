import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';

const routes: Routes = [
  { path: '', component: EmployeeAttendanceComponent },
  
]

@NgModule({
  declarations: [
    EmployeeAttendanceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class AttendanceModule { }
