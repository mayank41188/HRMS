import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEventsComponent } from './employee-events/employee-events.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';

const routes: Routes = [
  { path: '', component: EmployeeEventsComponent },

]


@NgModule({
  declarations: [
    EmployeeEventsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class EventsModule { }
