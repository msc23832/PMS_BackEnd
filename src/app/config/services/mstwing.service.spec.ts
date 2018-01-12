import { TestBed, inject } from '@angular/core/testing';

import { MstwingService } from './mstwing.service';

describe('MstwingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstwingService]
    });
  });

  it('should be created', inject([MstwingService], (service: MstwingService) => {
    expect(service).toBeTruthy();
  }));
});
