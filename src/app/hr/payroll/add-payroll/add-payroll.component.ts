import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-payroll',
  templateUrl: './add-payroll.component.html',
  styleUrls: ['./add-payroll.component.scss']
})
export class AddPayrollComponent {
  addpayroll: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.employeepayrollform();
    
}

employeepayrollform(){
  this.addpayroll = this.formBuilder.group({
    employeeID: [''],  
    basic: [''],
    hra: [''],  
    convAllown: [''],
    bonus: [''],  
    specialAllown: [''],  
    totalEarnings: [''],  
    professionalTax: [''],  
    tds: [''],  
    pf: [''],  
    advance: [''],  
    totalDeductions: [''],  
    dateOfTransfer: [''],  
    accountHolderName: [''],  
    bankName: [''],  
    accountNumber: [''],  

  });
}

  // onSubmit() {
  //   console.log('Your form data : ', this.addpayroll.value );
  // }

  onSubmit(){
    console.log('Your form data : ', this.addpayroll.value );
    
  }
}
