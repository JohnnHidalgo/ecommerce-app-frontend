import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserSellerComponent } from './list-user-seller.component';

describe('ListUserSellerComponent', () => {
  let component: ListUserSellerComponent;
  let fixture: ComponentFixture<ListUserSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
