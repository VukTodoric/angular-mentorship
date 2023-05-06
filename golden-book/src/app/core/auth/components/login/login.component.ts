import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials.interface';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: Credentials = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.form).pipe(take(1)).subscribe();
  }
}
