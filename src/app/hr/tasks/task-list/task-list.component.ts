import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewLeaveRequestComponent } from 'app/hr/leave-management/popups/view-leave-request/view-leave-request.component';
import { AssignTaskPopupComponent } from '../popups/assign-task-popup/assign-task-popup.component';
import { TaskStatusPopupComponent } from '../popups/task-status-popup/task-status-popup.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  constructor(
    private dialog: MatDialog,
  ) { }

  add() {
    this.dialog.open(AssignTaskPopupComponent, {
      autoFocus: false
    })
  }
    edit() {
      this.dialog.open(TaskStatusPopupComponent, {
        autoFocus: false
      })
    }
    
  
  
displayedColumns: string[] = ['no', 'title', 'description', 'assignedby', 'assignedon', 'priority'];
dataSource = ELEMENT_DATA;
  
}

export interface PeriodicElement {
  no: number;
  title: string;
  description: string;
  assignedby: string;
  assignedon: string;
  priority: string;
 
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, title: 'Title comes Here', description: 'Description comes here', assignedby: 'Mayank Sharma', assignedon: '28 Feb 2024', priority:'', },
  ]