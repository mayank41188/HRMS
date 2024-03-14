import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplApplyLeaveComponent } from './empl-apply-leave.component';

describe('EmplApplyLeaveComponent', () => {
  let component: EmplApplyLeaveComponent;
  let fixture: ComponentFixture<EmplApplyLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplApplyLeaveComponent]
    });
    fixture = TestBed.createComponent(EmplApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
