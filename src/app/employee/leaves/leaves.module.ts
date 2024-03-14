import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesListComponent } from './leaves-list/leaves-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LeavesListComponent },
  
]

@NgModule({
  declarations: [
    LeavesListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class LeavesModule { }
