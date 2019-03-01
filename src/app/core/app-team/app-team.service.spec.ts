import { TestBed } from '@angular/core/testing';

import { AppTeamService } from './app-team.service';

describe('AppTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppTeamService = TestBed.get(AppTeamService);
    expect(service).toBeTruthy();
  });
});
