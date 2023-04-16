import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '../../shared/services/sidebar.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.toggleSidebar$.subscribe((value) => {
      this.drawer.toggle(value);
    });
  }
}
