import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from 'app/core/service/util.service';

@Component({
  selector: 'app-add-policies-popup',
  templateUrl: './add-policies-popup.component.html',
  styleUrls: ['./add-policies-popup.component.scss']
})
export class AddPoliciesPopupComponent {
  addPolicies:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private utilService:UtilService,
    ) {
    this.popupAddPolicies();
}

popupAddPolicies(){
  this.addPolicies = this.formBuilder.group({
    title: [''],  
    date: [''],  
  });
}

onSubmit() {
  console.log('Your form data : ', this.addPolicies.value );
}
}
