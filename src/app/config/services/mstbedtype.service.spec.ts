import { TestBed, inject } from '@angular/core/testing';

import { MstbedtypeService } from './mstbedtype.service';

describe('MstbedtypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstbedtypeService]
    });
  });

  it('should be created', inject([MstbedtypeService], (service: MstbedtypeService) => {
    expect(service).toBeTruthy();
  }));
});
