import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-acces',
  templateUrl: './add-acces.component.html',
  styleUrls: ['./add-acces.component.scss']
})
export class AddAccesComponent {
  addAccessForm : FormGroup;

  displayedColumns: string[] = [ 'ModulePermission', 'Read', 'Create', 'Delete',];
  dataSource = ELEMENT_DATA;
  constructor(private formBuilder: FormBuilder) {
    this.addAccess();
  }

  addAccess() {
    this.addAccessForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  
  onSubmit(){
    console.log(this.addAccessForm.value);
  }

}

export interface PeriodicElement {
  ModulePermission: string;
  Read: string;
  Create: string;
  Delete: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ModulePermission: 'Employee', Read:'', Create: '', Delete: '',},
  { ModulePermission: 'Leave Management', Read:'', Create: '', Delete: '',},
  { ModulePermission: 'Holiday', Read:'', Create: '', Delete: '',},
  { ModulePermission: 'Payroll', Read:'', Create: '', Delete: '',},
  { ModulePermission: 'Attendance', Read:'', Create: '', Delete: '',},
  { ModulePermission: 'Jobs', Read:'', Create: '', Delete: '',},
  { ModulePermission: 'Task', Read:'', Create: '', Delete: '',},
  { ModulePermission: 'Events', Read:'', Create: '', Delete: '',},
  { ModulePermission: 'Employee', Read:'', Create: '', Delete: '',},

];



