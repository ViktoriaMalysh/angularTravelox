import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formLogin: FormGroup;
  public hide: boolean = true;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  singIn() {
    this.formLogin.markAllAsTouched();
    if (this.formLogin.invalid) {
      return;
    }

    const email = this.formLogin.get('email')?.value;
    const password = this.formLogin.get('password')?.value;
    this.authService.signIn(email, password)
      .subscribe(
      (value) => {
        console.warn('Successfully login value', value);
        // this.router.navigate(['/']).then();
      },
      (value) => {
        console.warn('Error login value', value);
      }
    );
  }

  shownPassword() {
    this.hide = !this.hide;
  }
}
