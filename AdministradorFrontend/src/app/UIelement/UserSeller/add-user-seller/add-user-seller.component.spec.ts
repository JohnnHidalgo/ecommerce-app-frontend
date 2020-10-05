import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserSellerComponent } from './add-user-seller.component';

describe('AddUserSellerComponent', () => {
  let component: AddUserSellerComponent;
  let fixture: ComponentFixture<AddUserSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
