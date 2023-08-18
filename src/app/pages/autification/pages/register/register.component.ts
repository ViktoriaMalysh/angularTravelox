import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../../shared/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public formRegister: FormGroup;
  public errorMessage: string = '';
  public hide: boolean = true;
  public hideConfirm: boolean = true;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formRegister = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: [''],
    })
  }

  singUp() {
    this.formRegister.markAllAsTouched();
    if (this.formRegister.invalid) {
      return;
    }
    console.warn('pass: ', this.formRegister.get('password')?.value)
    console.warn('confirmPassword: ', this.formRegister.get('confirmPassword')?.value)
    if (this.formRegister.get('password')?.value !==
      this.formRegister.get('confirmPassword')?.value) {
      this.errorMessage = 'Password need = confirm Password';
      return;
    }

    this.errorMessage = '';

    const data: User = {
      firstName: this.formRegister.get('firstName')?.value,
      lastName: this.formRegister.get('lastName')?.value,
      email: this.formRegister.get('email')?.value,
      password: this.formRegister.get('password')?.value,
    }

    console.warn('data: ', data);
    this.authService.signUp(data)
      .subscribe(
        (value) => {
          console.warn('Successfully Register value', value);
          // this.router.navigate(['/']).then();
        },
        (value) => {
          console.warn('Error Register value', value);
        }
      );
  }

  shownPassword() {
    this.hide = !this.hide;
  }

  shownConfirmPassword() {
    this.hideConfirm = !this.hideConfirm;
  }
}
