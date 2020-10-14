import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserSellerComponent } from './delete-user-seller.component';

describe('DeleteUserSellerComponent', () => {
  let component: DeleteUserSellerComponent;
  let fixture: ComponentFixture<DeleteUserSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
