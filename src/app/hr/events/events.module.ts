import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';

const routes: Routes = [
  { path: '', component: EventsComponent },

]

@NgModule({
  declarations: [
    EventsComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class EventsModule { }
