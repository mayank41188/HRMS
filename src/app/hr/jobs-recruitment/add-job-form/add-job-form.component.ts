import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-job-form',
  templateUrl: './add-job-form.component.html',
  styleUrls: ['./add-job-form.component.scss']
})
export class AddJobFormComponent {
  addJobForm: FormGroup;
  department: any = [['Human Resources'], ['Accounts'], ['Design'], ['Frontend'], ['Backend'], ['Testing'], ['Other'],]
  role: any = [['Intern'], ['Junior'], ['Senior'], ['Manager'],]
  skills: any = [['Javascript'], ['Ajax'], ['HTML5'], ['CSS3'], ['AngularJS'], ['ReactJS'],]
  status: any = [['Open'], ['Hold'], ['Closed'],]
  constructor(private formBuilder: FormBuilder) {
    this.addJob();
  }

  addJob() {
    this.addJobForm = this.formBuilder.group({
      department: [''],
      role: [''],
      description: [''],
      requirments: [''],
      skills: [''],
      vacancies: [''],
      status: [''],
    });

  }

  onSubmit() {
    console.log('Your form data : ', this.addJobForm.value);
  }

}
