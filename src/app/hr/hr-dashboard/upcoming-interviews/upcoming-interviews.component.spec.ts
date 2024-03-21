import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingInterviewsComponent } from './upcoming-interviews.component';

describe('UpcomingInterviewsComponent', () => {
  let component: UpcomingInterviewsComponent;
  let fixture: ComponentFixture<UpcomingInterviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingInterviewsComponent]
    });
    fixture = TestBed.createComponent(UpcomingInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
