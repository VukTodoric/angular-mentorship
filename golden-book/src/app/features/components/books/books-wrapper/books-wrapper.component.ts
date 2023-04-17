import { Component, OnInit } from '@angular/core';
import { Subject, filter, map, take, takeUntil, tap } from 'rxjs';
import { BookDetails } from 'src/app/features/models/book.model';
import { Category } from 'src/app/features/models/category.model';
import { BookService } from 'src/app/features/services/book.service';
import { CategoriesService } from 'src/app/features/services/categories.service';

@Component({
  selector: 'app-book',
  templateUrl: './books-wrapper.component.html',
  styleUrls: ['./books-wrapper.component.scss'],
})
export class BooksWrapperComponent implements OnInit {
  searchPlaceholder: string = 'Search by Book Name';
  filterPlaceholder: string = 'Filter by Category';
  booksArray: any = [];
  categoryArray!: string[];

  private unsubscribe$ = new Subject<void>();

  constructor(
    private bookService: BookService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
    this.getAllCategories();
  }

  private getAllBooks() {
    this.bookService
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.booksArray = data;
      });
  }

  private getAllCategories() {
    this.categoriesService
      .getCategories()
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
