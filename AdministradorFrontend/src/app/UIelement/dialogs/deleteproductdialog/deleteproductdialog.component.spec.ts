import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproductdialogComponent } from './deleteproductdialog.component';

describe('DeleteproductdialogComponent', () => {
  let component: DeleteproductdialogComponent;
  let fixture: ComponentFixture<DeleteproductdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteproductdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteproductdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
