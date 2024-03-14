import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-folders-list',
  templateUrl: './shared-folders-list.component.html',
  styleUrls: ['./shared-folders-list.component.scss']
})
export class SharedFoldersListComponent {
  displayedColumns: string[] = ['no', 'attachmentName', 'sharedDate', 'Action',];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  no: number;
  attachmentName: string;
  sharedDate: string;
  Action: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, attachmentName: 'Angela_SalarySlip_Oct23', sharedDate: '02/11/2023', Action: '',},
  { no: 2, attachmentName: 'Angela_SalarySlip_Nov23', sharedDate: '02/11/2023', Action: '',},
  { no: 3, attachmentName: 'Angela_SalarySlip_Dec23', sharedDate: '02/11/2023', Action: '',},
  { no: 4, attachmentName: 'Angela_for16_2023-24', sharedDate: '02/11/2023', Action: '',},
  { no: 5, attachmentName: 'Angela_for16_2022-23', sharedDate: '02/11/2023', Action: '',},
  ]
