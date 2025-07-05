import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './public/footer/footer.component';
import { MenuComponent } from "./public/menu/menu.component";
import { AuthService } from "./api/services/auth.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, MenuComponent, CommonModule],
  templateUrl: './app.component.html'
})

export class AppComponent {
  public userService: AuthService = inject(AuthService);
}
