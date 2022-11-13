import { TestBed } from '@angular/core/testing';

import { ViewBookingServiceService } from './view-booking-service.service';

describe('ViewBookingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewBookingServiceService = TestBed.get(ViewBookingServiceService);
    expect(service).toBeTruthy();
  });
});
