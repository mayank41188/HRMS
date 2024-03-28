import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _moment from 'moment';

@Component({
  selector: 'app-attendance-report-popup',
  templateUrl: './attendance-report-popup.component.html',
  styleUrls: ['./attendance-report-popup.component.scss']
})
export class AttendanceReportPopupComponent {
  exportAttendance: FormGroup;
  selectCompany: any = [['Simbiotik Tech'], ['Recstech'],]

  constructor(private formBuilder: FormBuilder) {
    this.exportAttendancePop();
  
  }

  exportAttendancePop() {
    this.exportAttendance = this.formBuilder.group({
      fromDate: [''],
      toDate: [''],
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.exportAttendance.value);
  }


    //date picker
    setMonthAndYear($event: any, _t15: any) {
      throw new Error('Method not implemented.');
    }


  }
