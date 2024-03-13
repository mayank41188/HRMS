import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHolidayPopupComponent } from './add-holiday-popup.component';

describe('AddHolidayPopupComponent', () => {
  let component: AddHolidayPopupComponent;
  let fixture: ComponentFixture<AddHolidayPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHolidayPopupComponent]
    });
    fixture = TestBed.createComponent(AddHolidayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
