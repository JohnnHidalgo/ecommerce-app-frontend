import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDashboarddialogComponent } from './delete-dashboarddialog.component';

describe('DeleteDashboarddialogComponent', () => {
  let component: DeleteDashboarddialogComponent;
  let fixture: ComponentFixture<DeleteDashboarddialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDashboarddialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDashboarddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
