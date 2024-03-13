import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTaskPopupComponent } from './assign-task-popup.component';

describe('AssignTaskPopupComponent', () => {
  let component: AssignTaskPopupComponent;
  let fixture: ComponentFixture<AssignTaskPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignTaskPopupComponent]
    });
    fixture = TestBed.createComponent(AssignTaskPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
