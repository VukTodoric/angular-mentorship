import { Component, OnInit } from '@angular/core';
import { Subject, map, take, takeUntil, tap } from 'rxjs';
import { BookDetails } from 'src/app/features/models/book.model';
import { BookService } from 'src/app/features/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './books-wrapper.component.html',
  styleUrls: ['./books-wrapper.component.scss'],
})
export class BooksWrapperComponent implements OnInit {
  searchPlaceholder: string = 'Search by Book Name';
  filterPlaceholder: string = 'Filter by Category';
  booksArray: any = [];
  categoryArray?: string[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
    // this.getAllCategories();
  }

  private getAllBooks() {
    this.bookService
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.booksArray = data;
      });
  }

  // private getAllCategories() {
  //   this.bookService
  //     .getCategories()
  //     .pipe(
  //       takeUntil(this.unsubscribe$),
  //       tap((res) => {
  //         res.forEach((value) => {
  //           Object.values(value).forEach((category) => {
  //             this.categoryArray?.push(category);
  //           });
  //         });
  //       })
  //     )
  //     .subscribe();
  // }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
