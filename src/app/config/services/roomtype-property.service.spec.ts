import { TestBed, inject } from '@angular/core/testing';

import { RoomtypePropertyService } from './roomtype-property.service';

describe('RoomtypePropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomtypePropertyService]
    });
  });

  it('should be created', inject([RoomtypePropertyService], (service: RoomtypePropertyService) => {
    expect(service).toBeTruthy();
  }));
});
