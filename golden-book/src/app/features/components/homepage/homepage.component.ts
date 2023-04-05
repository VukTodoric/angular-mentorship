import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Subject, map, takeUntil } from 'rxjs';
import { Category } from '../../models/category.enum';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Homepage';
  searchPlaceholder: string = 'Search by Book Name';
  filterPlaceholder: string = 'Filter by Category';

  private unsubscribe$ = new Subject<void>();

  booksArray: any = [];
  categoryArray?: any = [];

  constructor(private bookService: BookService) {}

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
    this.bookService
      .getCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((category) => {
        this.categoryArray = category;
        // console.log(category);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
