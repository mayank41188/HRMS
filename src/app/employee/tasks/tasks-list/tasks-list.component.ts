import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../tasks-popups/create-task/create-task.component';
import { ViewTaskStatusComponent } from '../tasks-popups/view-task-status/view-task-status.component';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  displayedColumns: string[] = ['no', 'title', 'description', 'assignedby', 'assignedon', 'priority'];
  dataSource = ELEMENT_DATA;

  constructor(
    private dialog: MatDialog,
  ) { }

  add() {
    this.dialog.open(CreateTaskComponent, {
      autoFocus: false
    })
  }
    edit() {
      this.dialog.open(ViewTaskStatusComponent, {
        autoFocus: false
      })
    }
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
  { no: 1, title: 'Title comes Here', description: 'Description comes here', assignedby: 'Mayank Sharma', assignedon: '28 Feb 2024', priority:'High', },
  ]