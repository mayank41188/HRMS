import { Component } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent {
  displayedColumns: string[] = ['no', 'Image', 'Client', 'ContactPerson', 'Project', 'ClientID', 'Email', 'Mobile', 'Action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  no: number;
  Image: string;
  Client: string;
  ContactPerson: string;
  Project: string;
  ClientID: string;
  Email: string;
  Mobile: string;
  Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, Image: 'hi', Client: 'DMS', ContactPerson:'John Doe', Project: 'DMS', ClientID: 'SIM-0001', Email: 'john@recstech.in', Mobile: '+91 9182736451', Action: '', },
  {no: 2, Image: 'hi', Client: 'DMS', ContactPerson:'John Doe', Project: 'DMS', ClientID: 'SIM-0001', Email: 'john@recstech.in', Mobile: '+91 9182736451', Action: '', },
  {no: 3, Image: 'hi', Client: 'DMS', ContactPerson:'John Doe', Project: 'DMS', ClientID: 'SIM-0001', Email: 'john@recstech.in', Mobile: '+91 9182736451', Action: '', },
  {no: 4, Image: 'hi', Client: 'DMS', ContactPerson:'John Doe', Project: 'DMS', ClientID: 'SIM-0001', Email: 'john@recstech.in', Mobile: '+91 9182736451', Action: '', },

];
