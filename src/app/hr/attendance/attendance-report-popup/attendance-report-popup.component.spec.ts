import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceReportPopupComponent } from './attendance-report-popup.component';

describe('AttendanceReportPopupComponent', () => {
  let component: AttendanceReportPopupComponent;
  let fixture: ComponentFixture<AttendanceReportPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceReportPopupComponent]
    });
    fixture = TestBed.createComponent(AttendanceReportPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
