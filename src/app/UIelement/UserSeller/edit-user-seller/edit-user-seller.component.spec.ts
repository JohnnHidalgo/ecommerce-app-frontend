import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserSellerComponent } from './edit-user-seller.component';

describe('EditUserSellerComponent', () => {
  let component: EditUserSellerComponent;
  let fixture: ComponentFixture<EditUserSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
