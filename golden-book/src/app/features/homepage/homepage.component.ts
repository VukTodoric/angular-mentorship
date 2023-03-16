import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.enum';
import { BookDetails } from '../models/book.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  pageTitle: string = 'Homepage';
  searchPlaceholder: string = 'Search by Book Name';
  filterPlaceholder: string = 'Filter by Category';

  book1: BookDetails = {
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

  book2: BookDetails = {
    id: 2,
    title: '1984',
    firstName: 'Dzordz',
    lastName: 'Orvel',
    country: 'Velika Britanija',
    isbn: 12442456,
    year: 1890,
    category: Category.Fantasy,
    description:
      'Lorem Ipsum is simply dummy textstandard dummy text ever since the 1500s,  of type and scrambled it to make a type specimen book.',
    imageSrc: '../../../../assets/images/1984.jfif',
  };

  book3: BookDetails = {
    id: 3,
    title: 'Rat civilizacija',
    firstName: 'Frensis',
    lastName: 'Fukujama',
    country: 'SAD',
    isbn: 1245699,
    year: 1890,
    category: Category.Historic,
    description:
      "Lorem Ipsum is simply dummy text of the printinum has been the industry's standard dummy text ever since the 1500s,  of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/the-lost-trip.jpg',
  };

  book4: BookDetails = {
    id: 4,
    title: 'Slepilo',
    firstName: 'Hoze',
    lastName: 'Saramago',
    country: 'Spanija',
    isbn: 12456343,
    year: 1890,
    category: Category.Drama,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem specimen book.',
    imageSrc: '../../../../assets/images/find-me.jpg',
  };

  book5: BookDetails = {
    id: 5,
    title: 'Alhemicar',
    firstName: 'Paolo',
    lastName: 'Koeljo',
    country: 'Spanija',
    isbn: 12456,
    year: 1890,
    category: Category.Fantasy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesettingthe industry's standard dummy text ever since the 1500s,  of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/darkjpg.jpg',
  };

  book6: BookDetails = {
    id: 6,
    title: 'Vreme zla',
    firstName: 'Dobrica ',
    lastName: 'Cosic',
    country: 'Srbija',
    isbn: 12456233,
    year: 1890,
    category: Category.Historic,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ever since the 1500s,  of type and scrambled it to make a type specimen book.',
    imageSrc: '../../../../assets/images/money-power.jpg',
  };

  booksArray: BookDetails[] = [
    this.book1,
    this.book2,
    this.book3,
    this.book4,
    this.book5,
    this.book6,
  ];

  categoryArray: Category[] = [
    Category.Drama,
    Category.Fantasy,
    Category.Historic,
    Category.Romance,
    Category.ScienceFiction,
    Category.Thriller,
  ];

  constructor() {}

  ngOnInit(): void {}
}
