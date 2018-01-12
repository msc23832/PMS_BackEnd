import { TestBed, inject } from '@angular/core/testing';

import { MstfeatureService } from './mstfeature.service';

describe('MstfeatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstfeatureService]
    });
  });

  it('should be created', inject([MstfeatureService], (service: MstfeatureService) => {
    expect(service).toBeTruthy();
  }));
});
