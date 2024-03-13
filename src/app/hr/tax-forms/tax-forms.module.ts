import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxFormListComponent } from './tax-form-list/tax-form-list/tax-form-list.component';
import { ShareFormComponent } from './popups/share-form/share-form/share-form.component';
import { AttentionComponent } from './popups/attention/attention/attention.component';
import { SuccessComponent } from './popups/success/success/success.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material/material.module';
import { UploadFormsComponent } from './tax-form-list/upload-forms/upload-forms.component';

const routes: Routes = [
  { path: '', component: TaxFormListComponent },
  { path: 'add-forms', component: UploadFormsComponent },
]

@NgModule({
  declarations: [
    TaxFormListComponent,
    ShareFormComponent,
    AttentionComponent,
    SuccessComponent,
    UploadFormsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class TaxFormsModule { }
