import { TestBed } from '@angular/core/testing';

import { DtpSharedUtilsService } from './dtp-shared-utils.service';

describe('DtpSharedUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DtpSharedUtilsService = TestBed.get(DtpSharedUtilsService);
    expect(service).toBeTruthy();
  });
});
