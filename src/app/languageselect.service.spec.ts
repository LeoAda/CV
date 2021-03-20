import { TestBed } from '@angular/core/testing';

import { LanguageselectService } from './languageselect.service';

describe('LanguageselectService', () => {
  let service: LanguageselectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageselectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
