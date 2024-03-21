import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInterviewComponent } from './add-new-interview.component';

describe('AddNewInterviewComponent', () => {
  let component: AddNewInterviewComponent;
  let fixture: ComponentFixture<AddNewInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewInterviewComponent]
    });
    fixture = TestBed.createComponent(AddNewInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
