import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
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
