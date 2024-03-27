import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],

})
export class AddEmployeeComponent {
  addEmployee:FormGroup;
  department: any =[ ['Human Resources'], ['Accounts'],  ['Design'],  ['Frontend'], ['Backend'],  ['Backend'], ]
  employeeType: any =[['Intern'], ['Probationary'],['Permanent']]
  accessType: any=[['Admin'], ['Hr'], ['Manager'], ['Employee']]
  city:any=[['City1'],['City2'],['City3'],]
  state:any=[['State1'], ['State2'], ['State3']]
  country:any=[['country1'], ['country2'], ['country3']]
  constructor(private formBuilder: FormBuilder) {
    this.employeeAddform();
}

employeeAddform(){
  this.addEmployee = this.formBuilder.group({
    name: [''],  
    department: [''],
    employeeId: [''],
    designation: [''],  
    employeeType: [''],
    access: [''],
    dateOfbirth: [''],  
    mobileNo: [''],
    emergencyMobileno: [''],
    mail: [''],  
    officeMail: [''],
    leaves: [''],
    aadharNo: [''],  
    panNO: [''],
    pfNo: [''],
    uanNo: [''],  
    supervisor: [''],
    address: [''],
    area: [''],  
    street: [''],
    city: [''],
    state: [''],
    country: [''],
    educationOne: [''],  
    fieldOfStudy: [''],
    selectStartdateEdu: [''],
    selectEnddateEdu: [''],  
    workExperience: [''],
    selectStartdate: [''],
    SelectendDate: [''],
    uploadDocuments: [''],

  });
}


onSubmit() {
  console.log('Your form data : ', this.addEmployee.value );
}


}




