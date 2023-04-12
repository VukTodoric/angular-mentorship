import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BookDetails } from 'src/app/features/models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit, OnDestroy {
  buttonLabel: string = 'Book overview';
  deleteLabel: string = 'Delete';

  @Input() book!: BookDetails;
  @Input() fullVisibility: boolean = false;

  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBookOverview() {
    this.router.navigate(['/book', this.book?.id]);
  }

  onBookDelete() {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
