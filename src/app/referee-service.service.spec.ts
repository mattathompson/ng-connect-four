/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RefereeServiceService } from './referee-service.service';

describe('Service: RefereeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefereeServiceService]
    });
  });

  it('should ...', inject([RefereeServiceService], (service: RefereeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
