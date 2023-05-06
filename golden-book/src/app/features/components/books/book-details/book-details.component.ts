import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from '../../../models/book.model';
import { BookService } from 'src/app/features/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  pageTitle: string = 'Book Overview';
  selectedId?: number;
  singleBook!: BookDetails;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.params['bookId'];
    this.getBookById(this.selectedId);
  }

  private getBookById(id: number) {
    this.bookService.getBookById(id).subscribe((data) => {
      this.singleBook = data;
    });
  }
}
