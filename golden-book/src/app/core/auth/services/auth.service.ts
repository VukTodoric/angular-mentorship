import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials } from '../models/credentials.interface';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'logged_user';

  constructor(private httpClient: HttpClient, private router: Router) {}

  isAutheticated() {
    return localStorage.getItem(this.storageKey) != null;
  }

  login(user: Credentials) {
    return this.httpClient
      .get(
        `${environment.baseApiUrl}users?email=${user.email}&password=${user.password}`
      )
      .pipe(
        tap((data: any) => {
          const responseToString = JSON.stringify({
            firstName: data[0].firstName,
            lastName: data[0].lastName,
            role: data[0].role,
          });

          if (data.length) {
            localStorage.setItem(this.storageKey, responseToString);
            this.router.navigateByUrl('/');
          }
        })
      );
  }

  logout() {
    localStorage.removeItem(this.storageKey);
    this.router.navigateByUrl('/login');
  }
}
