import { Component, Input, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/features/models/book.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  buttonLabel: string = 'Book overview';

  @Input() book?: BookDetails;
  @Input() fullVisibility: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onBookOverview(value: BookDetails | undefined) {
    console.log(value);
  }
}
