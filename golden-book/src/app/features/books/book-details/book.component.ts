import { Component, OnInit } from '@angular/core';
import { BookDetails } from '../../models/book.model';
import { Category } from '../../models/category.enum';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  pageTitle: string = 'Book Overview';

  constructor() {}

  book: BookDetails = {
    id: 1,
    title: 'Dorijan Grej',
    firstName: 'Oskar',
    lastName: 'Vajld',
    country: 'Irska',
    isbn: 12456,
    year: 1890,
    category: Category.Drama,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting indust of type and scrambled it to make a type specimen book.',
    imageSrc: '../../../../assets/images/dorijan-grej.jfif',
  };

  ngOnInit(): void {
    console.log();
  }
}
