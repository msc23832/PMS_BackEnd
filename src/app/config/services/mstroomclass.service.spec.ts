import { TestBed, inject } from '@angular/core/testing';

import { MstroomclassService } from './mstroomclass.service';

describe('MstroomclassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstroomclassService]
    });
  });

  it('should be created', inject([MstroomclassService], (service: MstroomclassService) => {
    expect(service).toBeTruthy();
  }));
});
