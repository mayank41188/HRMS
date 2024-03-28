import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { AddAccesComponent } from './add-acces/add-acces.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'employee-profile', component: EmployeeProfileComponent },
  { path: 'add-access', component: AddAccesComponent },
]

@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeProfileComponent,
    AddAccesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    MatRadioModule,
  ]
})
export class EmployeeModule { }
