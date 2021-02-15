/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MunicaoService } from './municao.service';

describe('Service: Municao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MunicaoService]
    });
  });

  it('should ...', inject([MunicaoService], (service: MunicaoService) => {
    expect(service).toBeTruthy();
  }));
});
