import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsloggedinService {

  isLoggedIn ?: boolean;

  setIsLoggedIn(correctLogin : boolean) {
    this.isLoggedIn = correctLogin;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  constructor() { }
}
