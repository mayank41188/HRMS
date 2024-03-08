import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LeaveRequestComponent },
]

@NgModule({
  declarations: [
    LeaveRequestComponent,
    ApplyLeaveComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class LeaveManagementModule { }
