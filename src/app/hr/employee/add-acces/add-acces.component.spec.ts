import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccesComponent } from './add-acces.component';

describe('AddAccesComponent', () => {
  let component: AddAccesComponent;
  let fixture: ComponentFixture<AddAccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAccesComponent]
    });
    fixture = TestBed.createComponent(AddAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
