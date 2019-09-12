import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueServiceService {

  constructor() { }

  getValue() {
    return 'this is real value';
  }
}
