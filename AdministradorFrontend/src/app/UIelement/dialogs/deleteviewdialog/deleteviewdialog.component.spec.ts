import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteviewdialogComponent } from './deleteviewdialog.component';

describe('DeleteviewdialogComponent', () => {
  let component: DeleteviewdialogComponent;
  let fixture: ComponentFixture<DeleteviewdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteviewdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteviewdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
