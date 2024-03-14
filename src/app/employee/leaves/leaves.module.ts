import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesListComponent } from './leaves-list/leaves-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { EmplApplyLeaveComponent } from './popups/empl-apply-leave/empl-apply-leave.component';
import { EmplViewLeaveComponent } from './popups/empl-view-leave/empl-view-leave.component';

const routes: Routes = [
  { path: '', component: LeavesListComponent },
  { path: 'empl-apply-leave', component: EmplApplyLeaveComponent },
  { path: 'empl-view-leave', component: EmplViewLeaveComponent },
 
]

@NgModule({
  declarations: [
    LeavesListComponent,
    EmplApplyLeaveComponent,
    EmplViewLeaveComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class LeavesModule { }
