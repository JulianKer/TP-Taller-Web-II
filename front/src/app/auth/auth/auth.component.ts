import { Component } from '@angular/core';

import { SignupComponent } from '../../auth/signup/signup.component';
import { SigninComponent } from '../../auth/signin/signin.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SignupComponent, SigninComponent],
  templateUrl: './auth.component.html'
})
export class AuthComponent {}
