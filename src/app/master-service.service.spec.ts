import { TestBed } from '@angular/core/testing';

import { MasterServiceService } from './master-service.service';
import { ValueServiceService } from './value-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

fdescribe('MasterServiceService', () => {
  let masterService: MasterServiceService;
  let valueServiceSpy: jasmine.SpyObj<ValueServiceService>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    const spyServiceObj = jasmine.createSpyObj('ValueService', ['getValue']);
    const spyHttpClientObj = jasmine.createSpyObj('DataService', ['get'])
    const httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get'])

    TestBed.configureTestingModule({
      providers: [
        MasterServiceService,
        { provide: ValueServiceService, useValue: spyServiceObj },
        { provide: HttpClient, useValue: httpClientSpyObj }
      ]
    })

    masterService = TestBed.get(MasterServiceService);
    valueServiceSpy = TestBed.get(ValueServiceService);
    httpClientSpy = TestBed.get(HttpClient);
  })

  it('should return the real value', () => {
    const stubbedValue = 'this is stubbed value';
    valueServiceSpy.getValue.and.returnValue(stubbedValue);

    expect(masterService.getValue()).toBe(stubbedValue);
  })

  it('#getQuizzes should return quizzes', () => {
    const stubbedValue = [{id: 1, title: 'test Quiz', description: 'This is a test quiz'}];
    httpClientSpy.get.and.returnValue(of(stubbedValue));

    masterService.getQuizzes().subscribe(
      (quizzes) => expect(quizzes).toEqual(stubbedValue),
      fail
    )
  })

  it('#getQuizzes should return error', () => {
    const stubbedError = new HttpErrorResponse({
      error: '404 error',
      status: 404,
      statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(throwError(stubbedError));

    masterService.getQuizzes().subscribe(
      (quizzes) => {},
      (error) => {expect(error.message).toContain('404')}
    )
  })
});

