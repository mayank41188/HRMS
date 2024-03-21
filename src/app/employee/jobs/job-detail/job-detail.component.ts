import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidatePopupComponent } from '../add-candidate-popup/add-candidate-popup.component';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent {

  constructor(private dialog: MatDialog,) { }

  add() {
    this.dialog.open(AddCandidatePopupComponent, {
      autoFocus: false
    })
  }

  ngOnInit(): void {
  }

}
