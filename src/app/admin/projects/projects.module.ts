import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [{ path: 'projects/view', component: ProjectsListComponent },
    { path: '', component: ProjectViewComponent }
]

@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class ProjectsModule { }
