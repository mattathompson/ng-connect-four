/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComputerPlayerServiceService } from './computer-player-service.service';

describe('Service: ComputerPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComputerPlayerServiceService]
    });
  });

  it('should ...', inject([ComputerPlayerServiceService], (service: ComputerPlayerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
