import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AddHolidayPopupComponent } from './add-holiday-popup/add-holiday-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HolidayListComponent },
]
@NgModule({
  declarations: [
    HolidayListComponent,
    AddHolidayPopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class HolidayModule { }
