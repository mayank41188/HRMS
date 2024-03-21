import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFoldersListComponent } from './shared-folders-list/shared-folders-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SharedFoldersListComponent },
]

@NgModule({
  declarations: [
    SharedFoldersListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class SharedFoldersModule { }
