import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorRejectBookingComponent } from './acceptor-reject-booking.component';

describe('AcceptorRejectBookingComponent', () => {
  let component: AcceptorRejectBookingComponent;
  let fixture: ComponentFixture<AcceptorRejectBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptorRejectBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptorRejectBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
