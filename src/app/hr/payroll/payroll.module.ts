import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PayrollListComponent } from './payroll-list/payroll-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AddPayrollComponent } from './add-payroll/add-payroll.component';
import { PayslipListComponent } from './payslip-list/payslip-list.component';
import { GeneratePayslipComponent } from './popups/generate-payslip/generate-payslip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'payroll-list', component: PayrollListComponent },
  { path: 'add-payroll', component: AddPayrollComponent},
  { path: 'payslip-list', component: PayslipListComponent},

]
@NgModule({
  declarations: [
    PayrollListComponent,
    AddPayrollComponent,
    PayslipListComponent,
    GeneratePayslipComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    AsyncPipe,
  ]
})
export class PayrollModule { }
