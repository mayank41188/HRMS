import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFormsComponent } from './upload-forms.component';

describe('UploadFormsComponent', () => {
  let component: UploadFormsComponent;
  let fixture: ComponentFixture<UploadFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadFormsComponent]
    });
    fixture = TestBed.createComponent(UploadFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
