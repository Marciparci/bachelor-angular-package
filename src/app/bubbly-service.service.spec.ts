import { TestBed } from '@angular/core/testing';

import { BubblyServiceService } from './bubbly-service.service';

describe('BubblyServiceService', () => {
  let service: BubblyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BubblyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
