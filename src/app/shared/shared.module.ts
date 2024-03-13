import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessPopupComponent } from './popups/success-popup/success-popup.component';
import { CautionPopupComponent } from './popups/caution-popup/caution-popup.component';
import { MaterialModule } from 'app/material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ ]

@NgModule({
  declarations: [
    SuccessPopupComponent,
    CautionPopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class SharedModule { }
