import { Component } from '@angular/core';

import { SignupComponent } from '../../auth/signup/signup.component';
import { SigninComponent } from '../../auth/signin/signin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignupComponent, SigninComponent],
  templateUrl: './auth.component.html'
})
export class AuthComponent {}
