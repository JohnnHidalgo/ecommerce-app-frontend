import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpermisodialogComponent } from './addpermisodialog.component';

describe('AddpermisodialogComponent', () => {
  let component: AddpermisodialogComponent;
  let fixture: ComponentFixture<AddpermisodialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpermisodialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpermisodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
