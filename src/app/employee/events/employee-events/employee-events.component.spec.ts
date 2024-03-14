import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEventsComponent } from './employee-events.component';

describe('EmployeeEventsComponent', () => {
  let component: EmployeeEventsComponent;
  let fixture: ComponentFixture<EmployeeEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeEventsComponent]
    });
    fixture = TestBed.createComponent(EmployeeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
