import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserClientComponent } from './list-user-client.component';

describe('ListUserClientComponent', () => {
  let component: ListUserClientComponent;
  let fixture: ComponentFixture<ListUserClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
