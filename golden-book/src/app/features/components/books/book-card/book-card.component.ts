import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, map, take, takeUntil } from 'rxjs';
import { BookDetails } from 'src/app/features/models/book.model';
import { BookService } from 'src/app/features/services/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit, OnDestroy {
  buttonLabel: string = 'Book overview';

  @Input() book!: BookDetails;
  @Input() fullVisibility: boolean = false;

  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit(): void {}

  onBookOverview() {
    this.router.navigate(['/homepage', this.book?.id]);

    this.bookService
      .getById(this.book)
      .pipe(take(1))
      .subscribe((data) => {
        this.book = data;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
