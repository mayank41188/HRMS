import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFormListComponent } from './tax-form-list.component';

describe('TaxFormListComponent', () => {
  let component: TaxFormListComponent;
  let fixture: ComponentFixture<TaxFormListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxFormListComponent]
    });
    fixture = TestBed.createComponent(TaxFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
