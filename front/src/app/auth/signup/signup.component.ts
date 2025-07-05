import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../api/services/auth.service';
import { Usuario } from '../../api/models/usuario.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  usuario: Usuario = { email: '', password: '', nombre: '', apellido: '', direccion: '' };
  mensaje = '';

  constructor(private auth: AuthService) {}

  registrar() {
    this.auth.signup(this.usuario).subscribe({
      next: () => this.mensaje = 'Usuario registrado correctamente ✅',
      error: err => this.mensaje = 'Error: ' + err.error.error
    });
  }
}
