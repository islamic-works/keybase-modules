import { TestBed } from '@angular/core/testing';

import { KeybaseService } from './keybase.service';

describe('KeybaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeybaseService = TestBed.get(KeybaseService);
    expect(service).toBeTruthy();
  });
});
