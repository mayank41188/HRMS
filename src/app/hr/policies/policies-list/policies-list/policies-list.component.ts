import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPoliciesPopupComponent } from '../../add-policies-popup/add-policies-popup.component';

@Component({
  selector: 'app-policies-list',
  templateUrl: './policies-list.component.html',
  styleUrls: ['./policies-list.component.scss']
})
export class PoliciesListComponent {
  constructor(
    private dialog: MatDialog,
  ) { }

  addPolicy() {
    this.dialog.open(AddPoliciesPopupComponent, {
      autoFocus: false
    })
  }


  displayedColumns: string[] = ['no', 'title', 'file', 'date', 'Action',];
  dataSource = ELEMENT_DATA;
    
  }
  
  export interface PeriodicElement {
    no: number;
    title: string;
    file: string;
    date: string;
    Action: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
    { no: 1, title: 'Attendance Policies', file: 'Attendancepolicies.Pdf', date: '02/11/2023', Action: '',},
    ]