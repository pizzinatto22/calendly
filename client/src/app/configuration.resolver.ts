
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

import { Config, ConfigEmpty } from './models/Config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationResolver implements Resolve<Config> {
  constructor(private backend:BackendService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Config> | Promise<Config> | Config {
    return this.backend.getConfig()
  }

}
