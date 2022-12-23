import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientScheduleComponent } from './client-schedule/client-schedule.component';
import { ConfigurationResolver } from './configuration.resolver';
import { LoggedGuard } from './logged.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "admin", 
    component: AdminComponent, 
    canActivate:[LoggedGuard],
    resolve: {
      configData: ConfigurationResolver
    }
  },
  {
    path: "**",
    component: ClientScheduleComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
