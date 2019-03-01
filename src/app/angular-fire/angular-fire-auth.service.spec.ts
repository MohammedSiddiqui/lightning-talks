import { TestBed } from '@angular/core/testing';

import { AngularFireAuthService } from './angular-fire-auth.service';

describe('AngularFireAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularFireAuthService = TestBed.get(AngularFireAuthService);
    expect(service).toBeTruthy();
  });
});
