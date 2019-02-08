import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { CoreModule } from '../core.module';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      CoreModule,
    ],
  }));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });
});
