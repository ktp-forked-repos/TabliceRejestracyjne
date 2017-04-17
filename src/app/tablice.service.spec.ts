import { TestBed, inject } from '@angular/core/testing';

import { TabliceService } from './tablice.service';

describe('TabliceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabliceService]
    });
  });

  it('should ...', inject([TabliceService], (service: TabliceService) => {
    expect(service).toBeTruthy();
  }));
});
