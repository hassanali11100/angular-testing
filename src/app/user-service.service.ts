import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  currentUser: string = 'Hassan'

  constructor() { }

  getUser() {
    return this.currentUser;
  }
}
