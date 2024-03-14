import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  displayedColumns: string[] = ['no', 'projectName', 'startDate', 'endDate', 'deadline', 'progress', 'status',];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  no: number;
  projectName: string;
  startDate: string;
  endDate: string;
  deadline: string;
  progress: string;
  status: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, projectName: 'Dealer Management System(DMS)', startDate: '05-Jan-2021', endDate: '----', deadline: '24-Nov-2024', progress:'', status:'Active',},
  { no: 2, projectName: 'Dash Parking - Web App', startDate: '15-Dec-2021', endDate: '24-Jan-2024', deadline: '24-Jan-2024', progress:'', status:'Delivered',},
  { no: 3, projectName: 'Aeon Mobile Banking', startDate: '05-Jan-2021', endDate: '----', deadline: '24-Nov-2024', progress:'', status:'Active',},
  { no: 4, projectName: 'Toyota Drive App', startDate: '15-Dec-2023', endDate: '----', deadline: '14-Jan-2024', progress:'', status:'Hold',},
  { no: 5, projectName: 'P2P', startDate: '05-Jan-2021', endDate: '----', deadline: '04-Nov-2024', progress:'', status:'Active',},
  
  
  ]