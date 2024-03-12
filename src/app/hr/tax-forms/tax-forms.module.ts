import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxFormListComponent } from './tax-form-list/tax-form-list/tax-form-list.component';
import { ShareFormComponent } from './popups/share-form/share-form/share-form.component';
import { AttentionComponent } from './popups/attention/attention/attention.component';
import { UploadFormComponent } from './popups/upload-form/upload-form/upload-form.component';
import { SuccessComponent } from './popups/success/success/success.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';

const routes: Routes = [
  { path: '', component: TaxFormListComponent },
  { path: 'add-forms', component: UploadFormComponent },
]

@NgModule({
  declarations: [
    TaxFormListComponent,
    ShareFormComponent,
    AttentionComponent,
    UploadFormComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class TaxFormsModule { }
