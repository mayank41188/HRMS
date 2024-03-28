import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from 'app/services/util.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})

export class ApplyLeaveComponent {
  applyLeave:FormGroup;
  leaveType: any =[['Casual Leave'],['Sick Leave'],['Emergency Leave'],['Marriage Leave'],['Maternity Leave'],['Other'],]

  constructor(private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private utilService:UtilService,
    private dialogRef: MatDialog,
    ) {
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
  if(this.applyLeave.valid){
    this.dialogRef.closeAll();
    this.utilService.showSuccessSnack(this.matSnackBar,'Submitted Successfully')
  }
  else{
    this.utilService.showErrorSnack(this.matSnackBar, 'Please fill required field')
  }
}
}
