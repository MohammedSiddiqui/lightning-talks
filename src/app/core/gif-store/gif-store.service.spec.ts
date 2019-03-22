import { TestBed } from '@angular/core/testing';

import { GifStoreService } from './gif-store.service';

describe('GifStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifStoreService = TestBed.get(GifStoreService);
    expect(service).toBeTruthy();
  });
});
