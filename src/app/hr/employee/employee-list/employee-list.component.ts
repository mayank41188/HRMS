import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplyLeaveComponent } from 'app/hr/leave-management/popups/apply-leave/apply-leave.component';
import { CautionPopupComponent } from 'app/shared/popups/caution-popup/caution-popup.component';
import { SuccessPopupComponent } from 'app/shared/popups/success-popup/success-popup.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  constructor(
    private dialog: MatDialog,
  ) { }

  caution() {
    
    this.dialog.open(CautionPopupComponent, {
      autoFocus: false
    })
  }

  displayedColumns: string[] = ['no', 'Image', 'Name', 'Department', 'Role', 'Mobile', 'Email', 'Access', 'Action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  no: number;
  Image: string;
  Name: string;
  Department: string;
  Role: string;
  Mobile: string;
  Email: string;
  Access: string;
  Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, Image: '', Name: 'John Dae', Department:'Design', Role: 'Lead', Mobile: '+91 9182736451', Email: 'john@recstech.in', Access: 'Lead', Action: '', },
  {no: 2, Image: '', Name: 'John Dae', Department:'Design', Role: 'Lead', Mobile: '+91 9182736451', Email: 'john@recstech.in', Access: 'Lead', Action: '', },
  {no: 3, Image: '', Name: 'John Dae', Department:'Design', Role: 'Lead', Mobile: '+91 9182736451', Email: 'john@recstech.in', Access: 'Lead', Action: '', },
  {no: 4, Image: '', Name: 'John Dae', Department:'Design', Role: 'Lead', Mobile: '+91 9182736451', Email: 'john@recstech.in', Access: 'Lead', Action: '', },

];
