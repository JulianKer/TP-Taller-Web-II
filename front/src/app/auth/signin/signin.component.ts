import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../api/services/auth.service';
import { Usuario } from '../../api/models/usuario.model';

import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
})

export class SigninComponent {
  usuario: Usuario = { email: '', password: '' };
  mensaje = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.signin(this.usuario).subscribe({
      next: (respuestaDelBack) => {
        this.auth.setearLocalStorageConInfoDelUser(respuestaDelBack);
        this.router.navigate(['/inicio']);
    },
      error: err => this.mensaje = 'Error: ' + err.error.error
    });
  }
}
