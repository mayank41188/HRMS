import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './tasks-popups/create-task/create-task.component';
import { ViewTaskStatusComponent } from './tasks-popups/view-task-status/view-task-status.component';

const routes: Routes = [
  { path: '', component: TasksListComponent },
  
  
]

@NgModule({
  declarations: [
    TasksListComponent,
    CreateTaskComponent,
    ViewTaskStatusComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class TasksModule { }
