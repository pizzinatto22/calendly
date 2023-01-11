import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './models/Config.model';
import { ScheduleData } from './models/ScheduleData.model';
import { UserEmpty, User } from './models/User.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private user: User = UserEmpty

  constructor(private http:HttpClient) { }

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

  getConfig() {
    return this.http.get<Config>("/api/config")
  }

  saveConfig (data: Config) {
    return this.http.post("/api/config", data)
  }
}
