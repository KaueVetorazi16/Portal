/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalibreService } from './calibre.service';

describe('Service: Calibre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalibreService]
    });
  });

  it('should ...', inject([CalibreService], (service: CalibreService) => {
    expect(service).toBeTruthy();
  }));
});
