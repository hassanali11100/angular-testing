import { TestBed } from '@angular/core/testing';

import { MasterServiceService } from './master-service.service';
import { ValueServiceService } from './value-service.service';

fdescribe('MasterServiceService', () => {
  let masterService: MasterServiceService;
  let valueServiceSpy: jasmine.SpyObj<ValueServiceService>;

  beforeEach(() => {
    const spyServiceObj = jasmine.createSpyObj('ValueService', ['getValue']);

    TestBed.configureTestingModule({
      providers: [
        MasterServiceService,
        { provide: ValueServiceService, useValue: spyServiceObj }
      ]
    })

    masterService = TestBed.get(MasterServiceService);
    valueServiceSpy = TestBed.get(ValueServiceService);
  })

  it('should return the real value', () => {
    const stubbedValue = 'this is stubbed value';
    valueServiceSpy.getValue.and.returnValue(stubbedValue);

    expect(masterService.getValue()).toBe(stubbedValue);
  })
});
