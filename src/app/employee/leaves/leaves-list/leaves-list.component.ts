import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmplApplyLeaveComponent } from '../popups/empl-apply-leave/empl-apply-leave.component';
import { EmplViewLeaveComponent } from '../popups/empl-view-leave/empl-view-leave.component';

@Component({
  selector: 'app-leaves-list',
  templateUrl: './leaves-list.component.html',
  styleUrls: ['./leaves-list.component.scss']
})
export class LeavesListComponent {

  constructor(
    private dialog: MatDialog,
  ) { }

  displayedColumns: string[] = ['no', 'leaveType', 'fromDate', 'toDate', 'days', 'leaveReason', 'status', ];
  dataSource = ELEMENT_DATA;

  apply() {
    this.dialog.open(EmplApplyLeaveComponent, {
      autoFocus: false
    })
  }

    viewleave() {
      this.dialog.open(EmplViewLeaveComponent, {
        autoFocus: false
      })
}
}

export interface PeriodicElement {
  no: number;
  leaveType: string;
  fromDate: string;
  toDate: string;
  days: string;
  leaveReason: string;
  status: string;
  }

  const ELEMENT_DATA: PeriodicElement[] = [
    { no: 1, leaveType: 'Sick Leave', fromDate: '10/02/2024', toDate: '12/02/2024', days:'2r', leaveReason:'5', status:'Approved', },
    ]