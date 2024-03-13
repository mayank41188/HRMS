import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionPopupComponent } from './caution-popup.component';

describe('CautionPopupComponent', () => {
  let component: CautionPopupComponent;
  let fixture: ComponentFixture<CautionPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CautionPopupComponent]
    });
    fixture = TestBed.createComponent(CautionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
