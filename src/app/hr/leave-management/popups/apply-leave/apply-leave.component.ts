import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})

export class ApplyLeaveComponent {
  applyLeave:FormGroup;
  leaveType: any =[['Casual Leave'],['Sick Leave'],['Emergency Leave'],['Marriage Leave'],['Maternity Leave'],['Other'],]

  constructor(private formBuilder: FormBuilder) {
    this.popupApplyLeave();
}

popupApplyLeave(){
  this.applyLeave = this.formBuilder.group({
    leaveType: [''],  
    fromDate: [''],  
    toDate: [''],
    reason: [''],
  });
}

onSubmit() {
  console.log('Your form data : ', this.applyLeave.value );
}

}