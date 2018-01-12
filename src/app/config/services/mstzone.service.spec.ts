import { TestBed, inject } from '@angular/core/testing';

import { MstzoneService } from './mstzone.service';

describe('MstzoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MstzoneService]
    });
  });

  it('should be created', inject([MstzoneService], (service: MstzoneService) => {
    expect(service).toBeTruthy();
  }));
});
