import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysListComponent } from './holidays-list/holidays-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HolidaysListComponent },
  
]


@NgModule({
  declarations: [
    HolidaysListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class HolidaysModule { }
