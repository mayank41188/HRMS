import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from 'app/services/util.service';

@Component({
  selector: 'app-assign-task-popup',
  templateUrl: './assign-task-popup.component.html',
  styleUrls: ['./assign-task-popup.component.scss']
})
export class AssignTaskPopupComponent {
  assignTaskform : FormGroup;

  constructor(
    private fb:FormBuilder,
    private utilService:UtilService,
    private matSnackBar:MatSnackBar,
    private dialogRef: MatDialog,
    ){}

  ngOnInit(): void {
		this.assignTasks();
  }

  assignTasks(){
    this.assignTaskform = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      priority : new FormControl('')
    })
  }

  onSubmit(){
    console.log(this.assignTaskform.value);
    if(this.assignTaskform.valid){
      this.dialogRef.closeAll();
      this.utilService.showSuccessSnack(this.matSnackBar,'Submitted Successfully')
    }
    else{
      this.utilService.showErrorSnack(this.matSnackBar, 'Please fill required field')
    }
  }
}
