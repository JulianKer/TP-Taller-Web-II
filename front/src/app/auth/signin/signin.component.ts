import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../api/services/auth.service';
import { Usuario } from '../../api/models/usuario.model';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
})

export class SigninComponent {
  usuario: Usuario = { email: '', password: '' };
  mensaje = '';

  constructor(private auth: AuthService) {}

  login() {
    this.auth.signin(this.usuario).subscribe({
      next: () => this.mensaje = 'Login correcto ✅',
      error: err => this.mensaje = 'Error: ' + err.error.error
    });
  }
}
