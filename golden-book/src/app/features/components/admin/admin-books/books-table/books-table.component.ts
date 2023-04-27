import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BookDetails } from 'src/app/features/models/book.model';
import { BookService } from 'src/app/features/services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { DescriptionModalComponent } from '../description-modal/description-modal.component';
@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
})
export class BooksTableComponent implements OnInit {
  booksArray: BookDetails[] = [];
  columns: string[] = [
    'imageSrc',
    'title',
    'year',
    'description',
    'isbn',
    'reviewer/review',
  ];

  private unsubscribe$ = new Subject<void>();

  constructor(private bookService: BookService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllActiveBooks();
  }

  getAllActiveBooks() {
    this.bookService
      .getAllBooks()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.booksArray = data;
      });
  }

  readMoreDialog(modalData: BookDetails) {
    this.dialog
      .open(DescriptionModalComponent, {
        data: modalData,
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
