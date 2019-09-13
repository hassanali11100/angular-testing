import { Injectable } from '@angular/core';
import { ValueServiceService } from './value-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private valueServiceService: ValueServiceService,
    private http: HttpClient) { }

  getValue() {
    return this.valueServiceService.getValue();
  }

  getQuizzes() {
    return this.http.get<any>('/data');
  }
}
