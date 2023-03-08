import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { BookDetails } from 'src/app/models/book.model';

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
    title: 'Dorijan Grej',
    firstName: 'Oskar',
    lastName: 'Vajld',
    year: 1890,
    category: Category.Drama,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/dorijan-grej.jfif',
  };

  book2: BookDetails = {
    title: '1984',
    firstName: 'Dzordz',
    lastName: 'Orvel',
    year: 1890,
    category: Category.Fantasy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/1984.jfif',
  };

  book3: BookDetails = {
    title: 'Rat civilizacija',
    firstName: 'Frensis',
    lastName: 'Fukujama',
    year: 1890,
    category: Category.Historic,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/the-lost-trip.jpg',
  };

  book4: BookDetails = {
    title: 'Slepilo',
    firstName: 'Hoze',
    lastName: 'Saramago',
    year: 1890,
    category: Category.Drama,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/find-me.jpg',
  };

  book5: BookDetails = {
    title: 'Alhemicar',
    firstName: 'Paolo',
    lastName: 'Koeljo',
    year: 1890,
    category: Category.Fantasy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/darkjpg.jpg',
  };

  book6: BookDetails = {
    title: 'Vreme zla',
    firstName: 'Dobrica ',
    lastName: 'Cosic',
    year: 1890,
    category: Category.Historic,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  of type and scrambled it to make a type specimen book.",
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
  breakpoint?: number;
  heightOfRow: string | number = '500px';

  constructor() {}

  ngOnInit(): void {
    this.heightOfRow = '350px';
    this.breakpoint = window.innerWidth <= 400 ? 1 : 3;
  }

  onResize(event: any) {
    this.heightOfRow = '350px';
    this.breakpoint = event.target.innerWidth >= 1000 ? 3 : 1;
  }
}
