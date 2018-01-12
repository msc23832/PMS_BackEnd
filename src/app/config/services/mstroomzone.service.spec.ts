import { TestBed, inject } from '@angular/core/testing';

import { MstroomzoneService } from './mstroomzone.service';

describe('MstroomzoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstroomzoneService]
    });
  });

  it('should be created', inject([MstroomzoneService], (service: MstroomzoneService) => {
    expect(service).toBeTruthy();
  }));
});
