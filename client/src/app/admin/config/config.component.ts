import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from 'src/app/backend.service';
import { ConfigEmpty } from 'src/app/models/Config.model';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

  @Input() config = ConfigEmpty()

  constructor(private backend : BackendService, private matSnackBar: MatSnackBar) {}

  onSubmit(form: NgForm) {
    this.backend.saveConfig(this.config).subscribe(data => {
      this.matSnackBar.open("Configuração salva com sucesso", "Ok", {duration: 3000})
    }, err => {
      this.matSnackBar.open("Não foi possível salvar o formulário. Verifique.", "Ok")
    })
  }
}
