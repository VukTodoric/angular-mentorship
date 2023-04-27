import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { BookDetails } from 'src/app/features/models/book.model';
import { BookService } from 'src/app/features/services/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  buttonLabel: string = 'Book overview';
  deleteLabel: string = 'Delete';
  softDeleteLabel: string = 'Soft Delete';
  selectedId?: number;

  @Input() book!: BookDetails;
  @Input() fullVisibility: boolean = false;

  @Output() delete = new EventEmitter<void>();
  @Output() softDelete = new EventEmitter<void>();

  constructor(private bookService: BookService, private router: Router) {}

  onBookOverview() {
    this.router.navigate(['/book', this.book?.id]);
  }

  onBookDelete(book: BookDetails) {
    this.bookService
      .deleteBook(book)
      .pipe(take(1))
      .subscribe(() => {
        this.delete.emit();
      });
  }

  onSoftDeleteBook(book: BookDetails) {
    this.bookService
      .softDeleteBook(book)
      .pipe(take(1))
      .subscribe(() => {
        this.softDelete.emit();
      });
  }
}
