import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { MatDrawer } from '@angular/material/sidenav';
import { CategoriesService } from 'src/app/features/services/categories.service';
import { map, take } from 'rxjs';
import { Category } from 'src/app/features/models/category.model';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;
  categoryArray!: string[];
  isAdmin?: boolean;

  constructor(
    private sidebarService: SidebarService,
    private categoriesService: CategoriesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.toggleMenu();
    this.categoriesService.setCategories();
    this.getAllCategories();
    this.checkIsAdmin();
  }

  checkIsAdmin() {
    this.isAdmin = this.authService.isAdmin();
  }

  getAllCategories() {
    this.categoriesService.categories$
      .pipe(
        take(1),
        map((categories: Category[]) =>
          categories.map((category: Category) => category.name)
        )
      )
      .subscribe((categories) => {
        this.categoryArray = categories;
      });
  }

  private toggleMenu() {
    this.sidebarService.toggleSidebar$.subscribe((value) => {
      this.drawer.toggle(value);
    });
  }
}
