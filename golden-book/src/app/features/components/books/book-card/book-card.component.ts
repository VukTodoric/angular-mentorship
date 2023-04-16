import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, map, switchMap, take, tap } from 'rxjs';
import { BookDetails } from 'src/app/features/models/book.model';
import { BookService } from 'src/app/features/services/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit, OnDestroy {
  buttonLabel: string = 'Book overview';
  deleteLabel: string = 'Delete';
  selectedId?: number;

  @Input() book!: BookDetails;
  @Input() fullVisibility: boolean = false;

  private unsubscribe$ = new Subject<void>();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}

  onBookOverview() {
    this.router.navigate(['/book', this.book?.id]);
  }

  onBookDelete(book: BookDetails) {
    this.bookService.deleteBook(book).subscribe((data) => {
      this.getBooks();
    });
  }

  getBooks() {
    this.bookService
      .getAll()
      .pipe(
        take(1),
        map((data) => {
          data.map((data) => {
            console.log(data);
          });
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
