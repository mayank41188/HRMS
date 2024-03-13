import { Component} from '@angular/core';
import { AddEventComponent } from '../add-event/add-event.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  constructor(private dialog: MatDialog,) { }

  add() {
    this.dialog.open(AddEventComponent, {
      autoFocus: false
    })
  }

  ngOnInit(): void {
  }


}

