/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArmaService } from './arma.service';

describe('Service: Arma', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArmaService]
    });
  });

  it('should ...', inject([ArmaService], (service: ArmaService) => {
    expect(service).toBeTruthy();
  }));
});
