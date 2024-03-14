import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFoldersListComponent } from './shared-folders-list.component';

describe('SharedFoldersListComponent', () => {
  let component: SharedFoldersListComponent;
  let fixture: ComponentFixture<SharedFoldersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedFoldersListComponent]
    });
    fixture = TestBed.createComponent(SharedFoldersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
