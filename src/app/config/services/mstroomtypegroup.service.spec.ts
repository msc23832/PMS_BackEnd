import { TestBed, inject } from '@angular/core/testing';

import { MstroomtypegroupService } from './mstroomtypegroup.service';

describe('MstroomtypegroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstroomtypegroupService]
    });
  });

  it('should be created', inject([MstroomtypegroupService], (service: MstroomtypegroupService) => {
    expect(service).toBeTruthy();
  }));
});
