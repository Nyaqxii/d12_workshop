import { TestBed } from '@angular/core/testing';

import { PdDetailGuard } from './pd-detail.guard';

describe('PdDetailGuard', () => {
  let guard: PdDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PdDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
