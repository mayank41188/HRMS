import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss']
})
export class AttentionComponent {
  constructor(
    private dialog: MatDialog,
  ) { }

  share() {
    this.dialog.open(AttentionComponent, {
      autoFocus: false
    })
  }
}

