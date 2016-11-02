/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeersService } from './beers.service';

describe('Service: Beers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeersService]
    });
  });

  it('should ...', inject([BeersService], (service: BeersService) => {
    expect(service).toBeTruthy();
  }));
});
