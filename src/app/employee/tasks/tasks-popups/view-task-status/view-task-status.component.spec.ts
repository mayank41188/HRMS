import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskStatusComponent } from './view-task-status.component';

describe('ViewTaskStatusComponent', () => {
  let component: ViewTaskStatusComponent;
  let fixture: ComponentFixture<ViewTaskStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTaskStatusComponent]
    });
    fixture = TestBed.createComponent(ViewTaskStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
