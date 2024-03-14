import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidatePopupComponent } from './add-candidate-popup.component';

describe('AddCandidatePopupComponent', () => {
  let component: AddCandidatePopupComponent;
  let fixture: ComponentFixture<AddCandidatePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandidatePopupComponent]
    });
    fixture = TestBed.createComponent(AddCandidatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
