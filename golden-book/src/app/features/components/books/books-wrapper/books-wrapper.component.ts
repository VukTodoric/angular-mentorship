import { Component, OnInit } from '@angular/core';
import { Subject, map, take, takeUntil } from 'rxjs';
import { BookDetails } from 'src/app/features/models/book.model';
import { Category } from 'src/app/features/models/category.model';
import { BookService } from 'src/app/features/services/book.service';
import { CategoriesService } from 'src/app/features/services/categories.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book',
  templateUrl: './books-wrapper.component.html',
  styleUrls: ['./books-wrapper.component.scss'],
})
export class BooksWrapperComponent implements OnInit {
  searchPlaceholder: string = 'Search by Book Name';
  filterPlaceholder: string = 'Filter by Category';
  booksArray: BookDetails[] = [];
  categoryArray!: string[];
  categoryName: string = '';
  userSerch: string = '';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private bookService: BookService,
    private categoriesService: CategoriesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllActiveBooks();
    this.getAllCategories();
  }

  getAllActiveBooks() {
    this.bookService
      .getAllBooks()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.booksArray = data;
      });
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

  storeCategory(categoryName: string) {
    this.categoryName = categoryName;
  }

  storeSearch(search: string) {
    this.userSerch = search;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
