import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollListComponent } from './payroll-list/payroll-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AddPayrollComponent } from './add-payroll/add-payroll.component';


const routes: Routes = [
  { path: '', component: PayrollListComponent },
  { path: 'add-payroll', component: AddPayrollComponent},

]
@NgModule({
  declarations: [
    PayrollListComponent,
    AddPayrollComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class PayrollModule { }
