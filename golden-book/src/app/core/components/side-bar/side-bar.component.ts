import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { MatDrawer } from '@angular/material/sidenav';
import { CategoriesService } from 'src/app/features/services/categories.service';
import { map, take } from 'rxjs';
import { Category } from 'src/app/features/models/category.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;
  categoryArray!: string[];

  constructor(
    private sidebarService: SidebarService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.toggleMenu();
    this.categoriesService.setCategories();
    this.getAllCategories();
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
