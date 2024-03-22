import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-holiday-popup',
  templateUrl: './add-holiday-popup.component.html',
  styleUrls: ['./add-holiday-popup.component.scss']
})
export class AddHolidayPopupComponent {
  addHoliday: FormGroup;
  selectCompany: any = [['Simbiotik Tech'], ['Recstech'],]

  constructor(private formBuilder: FormBuilder) {
    this.popupAddHoliday();
  }

  popupAddHoliday() {
    this.addHoliday = this.formBuilder.group({
      selectCompany: [''],
      reason: [''],
      date: [''],
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.addHoliday.value);
  }
}