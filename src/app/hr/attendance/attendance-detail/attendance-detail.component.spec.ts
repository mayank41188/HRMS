import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceDetailComponent } from './attendance-detail.component';

describe('AttendanceDetailComponent', () => {
  let component: AttendanceDetailComponent;
  let fixture: ComponentFixture<AttendanceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceDetailComponent]
    });
    fixture = TestBed.createComponent(AttendanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
