import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from 'app/core/service/util.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],

})
export class AddEmployeeComponent {
  addEmployee:FormGroup;
  department: any =[ ['Human Resources'], ['Accounts'],  ['Design'],  ['Frontend'], ['Backend'],  ['Backend'], ]
  employeeType: any =[['Intern'], ['Probationary'],['Permanent']]
  // accessType: any=[['Admin'], ['Hr'], ['Manager'], ['Employee']]
  city:any=[['City1'],['City2'],['City3'],]
  state:any=[['State1'], ['State2'], ['State3']]
  country:any=[['country1'], ['country2'], ['country3']]
  dialogRef: any;
  constructor(private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private utilService:UtilService,
    ) {
    this.employeeAddform();
}

employeeAddform(){
  this.addEmployee = this.formBuilder.group({
    name: ['', Validators.required],  
    department: ['', Validators.required],
    employeeId: ['', Validators.required],
    designation1: ['', Validators.required],  
    employeeType: ['', Validators.required],
    // access: ['', Validators.required],
    dateOfbirth: ['', Validators.required],  
    mobileNo: ['', Validators.required],
    emergencyMobileno: [''],
    mail: ['', Validators.required],  
    officeMail: [''],
    leaves: ['', Validators.required],
    aadharNo: ['', Validators.required],  
    panNO: ['', Validators.required],
    pfNo: ['', Validators.required],
    uanNo: [''],  
    supervisor: ['', Validators.required],
    address: ['', Validators.required],
    area: ['', Validators.required],  
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    educationOne: ['', Validators.required],  
    fieldOfStudy: ['', Validators.required],
    selectStartdateEdu: ['', Validators.required],
    selectEnddateEdu: ['', Validators.required],  
    workExperience: [''],
    designation2: ['',], 
    selectStartdate: [''],
    SelectendDate: [''],
    uploadDocuments: [''],

  });
}


onSubmit() {
  console.log('Your form data : ', this.addEmployee.value );
  if(this.addEmployee.valid){
    this.utilService.showSuccessSnack(this.matSnackBar,'Submitted Successfully')
  }
  else{
    this.utilService.showErrorSnack(this.matSnackBar, 'Please fill required field')
  }
}

}




