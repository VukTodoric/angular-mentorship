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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/dorijan-grej.jfif',
  };

  book2: BookDetails = {
    title: '1984',
    firstName: 'Dzordz',
    lastName: 'Orvel',
    year: 1890,
    category: Category.Fantasy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/money-power.jpg',
  };

  book3: BookDetails = {
    title: 'Rat civilizacija',
    firstName: 'Frensis',
    lastName: 'Fukujama',
    year: 1890,
    category: Category.Historic,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/the-lost-trip.jpg',
  };

  booksArray: BookDetails[] = [this.book1, this.book2, this.book3];
  categoryOption?: string;

  constructor() {}

  ngOnInit(): void {}

  populateDropdown() {
    this.booksArray.forEach((book) => {
      this.categoryOption = book.category;
    });
  }
}
