import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SignupComponent } from '../app/auth/signup/signup.component';
import { SigninComponent } from '../app/auth/signin/signin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {}
