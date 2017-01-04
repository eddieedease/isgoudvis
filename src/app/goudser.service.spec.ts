/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoudserService } from './goudser.service';

describe('GoudserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoudserService]
    });
  });

  it('should ...', inject([GoudserService], (service: GoudserService) => {
    expect(service).toBeTruthy();
  }));
});
