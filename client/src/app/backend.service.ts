import { Injectable } from '@angular/core';
import { UserEmpty, User } from './models/User.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private user: User = UserEmpty

  constructor() { }

  registerUserData(user:User) {
    this.user  = user
  }

  isLogged(): Promise<boolean> {
    return new Promise((a, r) => {
      a(true)
    })
  }

}
