import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    SidebarAdminComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    SidebarAdminComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
