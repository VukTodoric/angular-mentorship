import { Injectable } from '@angular/core';
import {  CanLoad, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): boolean {
    if (!this.authService.isAdmin()) {
      this.router.navigateByUrl('/homepage');
    }
    return true;
  }
}
