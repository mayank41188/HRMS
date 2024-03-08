import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewLeaveRequestComponent } from '../popups/view-leave-request/view-leave-request.component';
import { EmployeeListComponent } from 'app/hr/employee/employee-list/employee-list.component';

@Component({
  selector: 'app-leave-request-list',
  templateUrl: './leave-request-list.component.html',
  styleUrls: ['./leave-request-list.component.scss']
})
export class LeaveRequestListComponent {

  constructor(
    private dialog: MatDialog,
  ) { }

  edit() {
    this.dialog.open(ViewLeaveRequestComponent, {
      autoFocus: false
    })
  }

  displayedColumns: string[] = ['no', 'Name', 'appliedOn', 'fromDate', 'toDate', 'leaveType', 'leaveReason','leaveLeft', 'Action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  no: number;
  Name: string;
  appliedOn: string;
  fromDate:string;
  toDate: string;
  leaveType: string;
  leaveReason: string;
  leaveLeft: string;
  Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, Name: 'John Dae', appliedOn:'dd/mm/yyyy', fromDate: 'dd/mm/yyyy', toDate: 'dd/mm/yyyy', leaveType: 'Sick Leave', leaveReason: 'Sick Leave', leaveLeft:'12', Action: '', },
  {no: 2, Name: 'John Dae', appliedOn:'dd/mm/yyyy', fromDate: 'dd/mm/yyyy', toDate: 'dd/mm/yyyy', leaveType: 'Casual Leave', leaveReason: 'Personal Work', leaveLeft:'04', Action: '', },
  {no: 3, Name: 'John Dae', appliedOn:'dd/mm/yyyy', fromDate: 'dd/mm/yyyy', toDate: 'dd/mm/yyyy', leaveType: 'Sick Leave', leaveReason: 'Sick Leave', leaveLeft:'03', Action: '', },
  {no: 4, Name: 'John Dae', appliedOn:'dd/mm/yyyy', fromDate: 'dd/mm/yyyy', toDate: 'dd/mm/yyyy', leaveType: 'Casual Leave', leaveReason: 'Personal Work', leaveLeft:'10', Action: '', },

]