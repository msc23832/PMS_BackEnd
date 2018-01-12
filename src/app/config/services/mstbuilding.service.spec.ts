import { TestBed, inject } from '@angular/core/testing';

import { MstbuildingService } from './mstbuilding.service';

describe('MstbuildingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstbuildingService]
    });
  });

  it('should be created', inject([MstbuildingService], (service: MstbuildingService) => {
    expect(service).toBeTruthy();
  }));
});
