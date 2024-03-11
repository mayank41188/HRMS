import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { AssignTaskPopupComponent } from './popups/assign-task-popup/assign-task-popup.component';
import { TaskStatusPopupComponent } from './popups/task-status-popup/task-status-popup.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TaskListComponent },
]

@NgModule({
  declarations: [
    TaskListComponent,
    AssignTaskPopupComponent,
    TaskStatusPopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class TasksModule { }
