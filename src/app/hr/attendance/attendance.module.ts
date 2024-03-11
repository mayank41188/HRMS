import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AttendanceListComponent },
]

@NgModule({
  declarations: [
    AttendanceListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class AttendanceModule { }
