import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttentionComponent } from '../../attention/attention/attention.component';

@Component({
  selector: 'app-share-form',
  templateUrl: './share-form.component.html',
  styleUrls: ['./share-form.component.scss']
})
export class ShareFormComponent {
  constructor(
    private dialog: MatDialog,
  ) { }

  share() {
    this.dialog.open(AttentionComponent, {
      autoFocus: false
    })
  }
}
