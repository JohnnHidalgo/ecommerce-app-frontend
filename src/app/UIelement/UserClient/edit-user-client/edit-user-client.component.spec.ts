import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserClientComponent } from './edit-user-client.component';

describe('EditUserClientComponent', () => {
  let component: EditUserClientComponent;
  let fixture: ComponentFixture<EditUserClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
