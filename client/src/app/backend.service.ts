import { Injectable } from '@angular/core';
import { ScheduleData } from './models/Schedule.model';
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

  schedule(data : ScheduleData): Promise<boolean> {
    return new Promise((a, r) => {
      setTimeout(() => {
        a(true)
      }, 2000);
    })
  }
}
