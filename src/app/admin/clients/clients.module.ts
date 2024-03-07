import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';

const routes: Routes = [
  { path: '', component: ClientsListComponent },
]

@NgModule({
  declarations: [
    ClientsListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class ClientsModule { }
