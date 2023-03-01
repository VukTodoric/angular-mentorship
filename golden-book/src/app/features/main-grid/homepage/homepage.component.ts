import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/enums/category.model';
import { Author } from 'src/app/models/author.model';
import { BookDetails } from 'src/app/models/interfaces/book.model';
import { User } from 'src/app/models/interfaces/user.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  pageTitle: string = 'Homepage';
  searchPlaceholder: string = 'Search by Book Name';
  filterPlaceholder: string = 'Filter by Category';

  user1: User = {
    id: 1,
    name: 'Oskar',
    lastName: 'Vajld',
  };

  user2: User = {
    id: 2,
    name: 'Dzordz',
    lastName: 'Orvel',
  };

  user3: User = {
    id: 3,
    name: 'Samjuel',
    lastName: 'Hantington',
  };

  book1: BookDetails = {
    title: 'Dorijan Grej',
    fullName: new Author(this.user1).getFullName(),
    year: 1890,
    category: Category.Drama,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/dorijan-grej.jfif',
  };

  book2: BookDetails = {
    title: '1984',
    fullName: new Author(this.user2).getFullName(),
    year: 1890,
    category: Category.Fantasy,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/money-power.jpg',
  };

  book3: BookDetails = {
    title: 'Rat civilizacija',
    fullName: new Author(this.user3).getFullName(),
    year: 1890,
    category: Category.Historic,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageSrc: '../../../../assets/images/the-lost-trip.jpg',
  };

  booksArray: BookDetails[] = [this.book1, this.book2, this.book3];
  categoryOption?: any;

  constructor() {}

  ngOnInit(): void {}

  populateDropdown() {
    this.booksArray.forEach((book) => {
      this.categoryOption = book.category;
    });
  }
}
