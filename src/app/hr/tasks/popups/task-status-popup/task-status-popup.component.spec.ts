import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusPopupComponent } from './task-status-popup.component';

describe('TaskStatusPopupComponent', () => {
  let component: TaskStatusPopupComponent;
  let fixture: ComponentFixture<TaskStatusPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskStatusPopupComponent]
    });
    fixture = TestBed.createComponent(TaskStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
