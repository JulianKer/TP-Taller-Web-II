import { Component } from '@angular/core';
import { AuthService } from '../../api/services/auth.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  usuarioNombre: string | null  = localStorage.getItem("usuarioNombre") 

  constructor(private router: Router, private userService: AuthService) {

  }

  cerrarSesion(): void {
    this.userService.cerrarSesion();
    this.router.navigate(['/auth', ]);
  }
}
