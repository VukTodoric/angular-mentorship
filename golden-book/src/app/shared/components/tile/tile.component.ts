import { Component, Input, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/models/book.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  buttonLabel: string = 'Book overview';

  @Input() book?: BookDetails;

  constructor() {}

  ngOnInit(): void {}

  onBookOverview() {
    console.log('book overview');
  }
}
