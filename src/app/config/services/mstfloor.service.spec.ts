import { TestBed, inject } from '@angular/core/testing';

import { MstfloorService } from './mstfloor.service';

describe('MstfloorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstfloorService]
    });
  });

  it('should be created', inject([MstfloorService], (service: MstfloorService) => {
    expect(service).toBeTruthy();
  }));
});
