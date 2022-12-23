import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { User, UserEmpty } from '../models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  

  dados: User = UserEmpty

  constructor(private backend: BackendService, private router:Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.backend.registerUserData(this.dados)
      this.router.navigate(["admin"])
    }
  }
}
