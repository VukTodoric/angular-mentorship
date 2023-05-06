import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggle: boolean = false;

  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onToggleSidebar() {
    this.toggle = !this.toggle;
    this.sidebarService.toggleSidebar$.next(this.toggle);
  }

  onLogout() {
    this.authService.logout();
  }
}
