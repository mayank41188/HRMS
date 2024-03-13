import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCandidatePopupComponent } from './add-new-candidate-popup.component';

describe('AddNewCandidatePopupComponent', () => {
  let component: AddNewCandidatePopupComponent;
  let fixture: ComponentFixture<AddNewCandidatePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCandidatePopupComponent]
    });
    fixture = TestBed.createComponent(AddNewCandidatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
