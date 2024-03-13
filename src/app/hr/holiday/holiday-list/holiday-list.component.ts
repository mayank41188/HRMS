import { Component } from '@angular/core';
import { AddHolidayPopupComponent } from '../add-holiday-popup/add-holiday-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent {
  constructor(
    private dialog: MatDialog,
  ) { }

  add() {
    this.dialog.open(AddHolidayPopupComponent, {
      autoFocus: false
    })
  }


displayedColumns: string[] = ['no', 'holidayReason', 'holidayDate', 'day', 'status'];
dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
no: number;
holidayReason: string;
holidayDate: string;
day: string;
status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{ no: 1, holidayReason: 'New Year Day', holidayDate: '1-Jan-2024', day: 'Monday', status: 'Weekday',},
{ no: 2, holidayReason: 'Republic Day ', holidayDate: '26-Jan-2024', day: 'Friday', status: 'Weekday'},
{ no: 3, holidayReason: 'Shivrathri', holidayDate: '8-Mar-2024', day: 'Friday', status: 'Weekday', },
{ no: 4, holidayReason: 'Ugadi/Eid ', holidayDate: '9-Apr-2024', day: 'Wednesday', status: 'Weekday',},

]
