import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsByVehicleComponent } from './bookings-by-vehicle.component';

describe('BookingsByVehicleComponent', () => {
  let component: BookingsByVehicleComponent;
  let fixture: ComponentFixture<BookingsByVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsByVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsByVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
