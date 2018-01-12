import { TestBed, inject } from '@angular/core/testing';

import { MstroomfeaturesService } from './mstroomfeatures.service';

describe('MstroomfeaturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstroomfeaturesService]
    });
  });

  it('should be created', inject([MstroomfeaturesService], (service: MstroomfeaturesService) => {
    expect(service).toBeTruthy();
  }));
});
