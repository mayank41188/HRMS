import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoliciesPopupComponent } from './add-policies-popup.component';

describe('AddPoliciesPopupComponent', () => {
  let component: AddPoliciesPopupComponent;
  let fixture: ComponentFixture<AddPoliciesPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPoliciesPopupComponent]
    });
    fixture = TestBed.createComponent(AddPoliciesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
