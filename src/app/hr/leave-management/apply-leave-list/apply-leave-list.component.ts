import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplyLeaveComponent } from '../popups/apply-leave/apply-leave.component';

@Component({
  selector: 'app-apply-leave-list',
  templateUrl: './apply-leave-list.component.html',
  styleUrls: ['./apply-leave-list.component.scss']
})
export class ApplyLeaveListComponent {
  constructor(
    private dialog: MatDialog,
  ) { }

  apply() {
    this.dialog.open(ApplyLeaveComponent, {
      autoFocus: false
    })
  }

  displayedColumns: string[] = ['no', 'appliedOn', 'fromDate', 'toDate', 'leaveType', 'leaveReason', 'leaveLeft',];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  no: number;
  appliedOn: string;
  fromDate: string;
  toDate: string;
  leaveType: string;
  leaveReason: string;
  leaveLeft: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, appliedOn: 'dd/mm/yyyy', fromDate: 'dd/mm/yyyy', toDate: 'dd/mm/yyyy', leaveType: 'Sick Leave', leaveReason: 'Sick Leave', leaveLeft: '12', },
  { no: 2, appliedOn: 'dd/mm/yyyy', fromDate: 'dd/mm/yyyy', toDate: 'dd/mm/yyyy', leaveType: 'Casual Leave', leaveReason: 'Personal Work', leaveLeft: '04', },
  { no: 3, appliedOn: 'dd/mm/yyyy', fromDate: 'dd/mm/yyyy', toDate: 'dd/mm/yyyy', leaveType: 'Sick Leave', leaveReason: 'Sick Leave', leaveLeft: '03', },
  { no: 4, appliedOn: 'dd/mm/yyyy', fromDate: 'dd/mm/yyyy', toDate: 'dd/mm/yyyy', leaveType: 'Casual Leave', leaveReason: 'Personal Work', leaveLeft: '10', },

]
