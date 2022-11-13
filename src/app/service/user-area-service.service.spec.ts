import { TestBed } from '@angular/core/testing';

import { UserAreaServiceService } from './user-area-service.service';

describe('UserAreaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAreaServiceService = TestBed.get(UserAreaServiceService);
    expect(service).toBeTruthy();
  });
});
