import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../../models/credentials.interface';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/[\W\w]+/),
    ]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.value).pipe(take(1)).subscribe();
  }
}
