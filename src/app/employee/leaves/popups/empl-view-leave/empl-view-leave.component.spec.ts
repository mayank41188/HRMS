import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplViewLeaveComponent } from './empl-view-leave.component';

describe('EmplViewLeaveComponent', () => {
  let component: EmplViewLeaveComponent;
  let fixture: ComponentFixture<EmplViewLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplViewLeaveComponent]
    });
    fixture = TestBed.createComponent(EmplViewLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
