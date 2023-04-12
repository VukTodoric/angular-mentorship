import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Subject, map, take, takeUntil } from 'rxjs';
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
  categoryArray?: string[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
    this.getAllCategories();
  }

  private getAllBooks() {
    this.bookService
      .getAll()
      .pipe(take(1))
      .subscribe((data) => {
        this.booksArray = data;
      });
  }

  private getAllCategories() {
    this.bookService
      .getCategories()
      .pipe(
        takeUntil(this.unsubscribe$),
        map((data) => {
          data.forEach((d) => {
            Object.values(d).forEach((c) => {
              this.categoryArray = [c];
            });
          });
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
