import { TestBed, inject } from '@angular/core/testing';

import { MstroomService } from './mstroom.service';

describe('MstroomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstroomService]
    });
  });

  it('should be created', inject([MstroomService], (service: MstroomService) => {
    expect(service).toBeTruthy();
  }));
});
