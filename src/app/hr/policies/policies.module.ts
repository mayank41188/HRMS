import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliciesListComponent } from './policies-list/policies-list/policies-list.component';
import { AddPoliciesPopupComponent } from './add-policies-popup/add-policies-popup.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';

const routes: Routes = [
  { path: '', component: PoliciesListComponent },
]

@NgModule({
  declarations: [
    PoliciesListComponent,
    AddPoliciesPopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class PoliciesModule { }
