import { TestBed } from '@angular/core/testing';

import { NewBookingServiceService } from './new-booking-service.service';

describe('NewBookingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewBookingServiceService = TestBed.get(NewBookingServiceService);
    expect(service).toBeTruthy();
  });
});
