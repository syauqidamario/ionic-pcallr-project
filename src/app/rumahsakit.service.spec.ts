import { TestBed } from '@angular/core/testing';

import { RumahsakitService } from './rumahsakit.service';

describe('RumahsakitService', () => {
  let service: RumahsakitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RumahsakitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
