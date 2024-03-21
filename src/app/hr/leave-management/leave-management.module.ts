import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestListComponent } from './leave-request-list/leave-request-list.component';
import { ApplyLeaveListComponent } from './apply-leave-list/apply-leave-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ViewLeaveRequestComponent } from './popups/view-leave-request/view-leave-request.component';
import { ApplyLeaveComponent } from './popups/apply-leave/apply-leave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'list', component: LeaveRequestListComponent },
  { path: 'apply-leave', component: ApplyLeaveListComponent },
]

@NgModule({
  declarations: [
    LeaveRequestListComponent,
    ApplyLeaveListComponent,
    ViewLeaveRequestComponent,
    ApplyLeaveComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class LeaveManagementModule { }
