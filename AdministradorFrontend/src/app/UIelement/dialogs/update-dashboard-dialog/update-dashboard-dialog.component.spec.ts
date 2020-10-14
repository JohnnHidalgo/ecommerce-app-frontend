import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDashboardDialogComponent } from './update-dashboard-dialog.component';

describe('UpdateDashboardDialogComponent', () => {
  let component: UpdateDashboardDialogComponent;
  let fixture: ComponentFixture<UpdateDashboardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDashboardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDashboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
