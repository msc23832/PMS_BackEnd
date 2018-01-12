import { TestBed, inject } from '@angular/core/testing';

import { MstroomtypeService } from './mstroomtype.service';

describe('MstroomtypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstroomtypeService]
    });
  });

  it('should be created', inject([MstroomtypeService], (service: MstroomtypeService) => {
    expect(service).toBeTruthy();
  }));
});
