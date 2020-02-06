import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToRentComponent } from './to-rent.component';

describe('ToRentComponent', () => {
  let component: ToRentComponent;
  let fixture: ComponentFixture<ToRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
