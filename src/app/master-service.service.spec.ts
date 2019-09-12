import { TestBed } from '@angular/core/testing';

import { MasterServiceService } from './master-service.service';
import { ValueServiceService } from './value-service.service';

fdescribe('MasterServiceService', () => {
  let masterService: MasterServiceService;
  // beforeEach(() => TestBed.configureTestingModule({}));

  // it('should be created', () => {
  //   const service: MasterServiceService = TestBed.get(MasterServiceService);
  //   expect(service).toBeTruthy();
  // });

  it('#getValue should return real value from the real service', () => {
    masterService = new MasterServiceService(new ValueServiceService);
    expect(masterService.getValue()).toBe('this is real value');
  })
});
