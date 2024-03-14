import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';

const routes: Routes = [
  { path: '', component: PolicyListComponent },
]

@NgModule({
  declarations: [
    PolicyListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class PolicyModule { }
