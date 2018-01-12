import { TestBed, inject } from '@angular/core/testing';

import { MstexposureService } from './mstexposure.service';

describe('MstexposureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstexposureService]
    });
  });

  it('should be created', inject([MstexposureService], (service: MstexposureService) => {
    expect(service).toBeTruthy();
  }));
});
