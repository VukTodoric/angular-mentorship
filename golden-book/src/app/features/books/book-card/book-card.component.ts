import { Component, Input, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/features/models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  buttonLabel: string = 'Book overview';

  @Input() book?: BookDetails;
  @Input() fullVisibility: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onBookOverview(value: BookDetails | undefined) {
    console.log(value);
  }
}
