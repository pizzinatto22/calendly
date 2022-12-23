import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigEmpty } from 'src/app/models/Config.model';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

  @Input() config = ConfigEmpty()

  onSubmit(form: NgForm) {
    console.log(this.config)
  }
}
