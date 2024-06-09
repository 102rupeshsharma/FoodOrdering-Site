import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users: any[] = [];
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUser: any = null;

  constructor() { }

  addUser(user: any) {
    this.users.push(user);
    console.log(this.users);
  }

  getAllUsers() {
    return this.users;
  } 

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
  }

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  associateCheckoutDetails(checkoutDetails: any) {
    if (this.currentUser) {
      this.currentUser.checkoutDetails = checkoutDetails;
      // Ensure the current user is updated in the users array
      const index = this.users.findIndex(user => user.id === this.currentUser.id);
      if (index !== -1) {
        this.users[index] = this.currentUser;
      }
    }
  }

  getCheckoutDetails(): any {
    if (this.currentUser) {
      return this.currentUser.checkoutDetails;
    }
    return null;
  }
}
