import { Component, OnInit } from '@angular/core';
import { Candidate } from './classes/candidate';
import { Customer } from './classes/customer';
import { Employee } from './classes/employee';
import { Product } from './classes/product';
import { User } from './classes/user';
import { BaseEntity } from './interfaces/baseEntity';
import { Book } from './interfaces/book';
import { Job } from './interfaces/job';
import { Post } from './interfaces/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'typescript-homework';

  candidate1: Candidate = new Candidate(
    'Petar',
    'Petrovic',
    new Date('1991-01-01')
  );
  candidate2: Candidate = new Candidate(
    'Marko',
    'Markovic',
    new Date('1992-02-02')
  );

  candidatesArray: Candidate[] = [this.candidate1, this.candidate2];

  empolyee1: Employee = new Employee(
    1,
    'Marija',
    'marija@nesto.com',
    54545464,
    'menadzer'
  );

  empolyee2: Employee = new Employee(
    1,
    'Janko',
    'janko@nesto.com',
    242424,
    'menadzer'
  );

  customer1: Customer = new Customer(
    1,
    'Branko',
    'branko@nesto.com',
    251454,
    'Nemanjina',
    13,
    'Beograd',
    'Serbia'
  );

  user1: User = new User(1, 'Pera', 'pera@nesto.com', 54654);
  user2: User = new User(2, 'Zika', 'zika@nesto.com', 54654);

  newCustomer1: Customer = new Customer(
    1,
    'Janko',
    'janko@nesto.com',
    54564,
    'Hajdukova',
    12,
    'Kraljevo',
    'Serbia'
  );
  newCustomer2: Customer = new Customer(
    2,
    'Zivko',
    'Zivko@nesto.com',
    54564,
    'Hajdukova',
    12,
    'Kraljevo',
    'Serbia'
  );

  newEmployee1: Employee = new Employee(
    1,
    'Marica',
    'marica@nesto.com',
    656565,
    'direktor'
  );
  newEmployee2: Employee = new Employee(
    2,
    'Dragica',
    'dragica@nesto.com',
    656565,
    'direktor'
  );

  product1: Product = new Product(1, 'Chips', 100, 'grickalica');
  product2: Product = new Product(2, 'Smoki', 100, 'grickalica');
  product3: Product = new Product(3, 'Kroasan', 100, 'dezert');
  product4: Product = new Product(4, 'Sladoled', 100, 'slatkis');
  product5: Product = new Product(5, 'Medeno srce', 100, 'slatkis');

  newProduct1: Product = new Product(1, 'Kinder jaje', 100, 'slatkis');
  newUser1: User = new User(1, 'Novica', 'novica@nesto.com', 6645);
  newCustomer3: Customer = new Customer(
    1,
    'Blagoje',
    'blagoje@nesto.com',
    54545,
    'Dubrovacka',
    123,
    'Uzice',
    'Serbia'
  );
  newEmployee3: Employee = new Employee(
    1,
    'Rade',
    'rade@nesto.com',
    54544,
    'HR'
  );
  obj: BaseEntity = {
    id: 1,
  };
  //An Interface cannot be instantiated, a class can be instantiated.

  postInstance1: Post = {
    id: 1,
    title: 'Prva instanca',
    description: 'Nesto nesto',
    dateCreated: new Date(),
    numberOfLikes: 3,
  };

  postInstance2: Post = {
    id: 2,
    title: 'Druga instanca',
    description: 'Nesto nesto',
    dateCreated: new Date(),
    numberOfLikes: 3,
  };

  bookInstance1: Book = {
    id: 1,
    title: 'Knjiga 1',
    description: 'Nesto o lepop stivu',
    dateCreated: new Date(),
    author: 'Peter Petrovic',
    numberOfStars: '5',
    category: 'drama',
  };

  bookInstance2: Book = {
    id: 2,
    title: 'Knjiga 2',
    description: 'Nesto o lepop stivu',
    dateCreated: new Date(),
    author: 'Marko Miljanov',
    numberOfStars: '5',
    category: 'istorija',
  };

  jobInstance1: Job = {
    id: 1,
    title: 'Zidar',
    description: 'Zida zgrade',
    workHours: 45,
    pricePerHour: 15,
  };

  jobInstance2: Job = {
    id: 1,
    title: 'Moler',
    description: 'Kreci zidove',
    workHours: 45,
    pricePerHour: 11,
  };
  ngOnInit(): void {
    console.log('Canditate 1 is ->', this.candidate1);
    console.log('Canditate 2 is ->', this.candidate2);

    console.log('Array of candidates', this.candidatesArray);

    console.log(this.printInformation(this.candidatesArray));

    console.log('Employee 1 ->', this.empolyee1);
    console.log('Employee 2 ->', this.empolyee2);

    console.log(this.customer1.customerInformation());
    console.log(this.customer1.getName());

    console.log(this.user1);
    console.log(this.user2);

    console.log(this.newCustomer1);
    console.log(this.newCustomer2);

    console.log(this.newEmployee1);
    console.log(this.newEmployee2);

    console.log(this.product1);
    console.log(this.product2);
    console.log(this.product3);
    console.log(this.product4);
    console.log(this.product5);

    console.log(this.newProduct1);
    console.log(this.newUser1);
    console.log(this.newCustomer3);
    console.log(this.newEmployee3);
    console.log(this.obj);

    console.log(this.user1.sayHello());
    console.log(this.product1.sayHello());
    console.log(this.customer1.sayHello());
    console.log(this.empolyee1.sayHello());

    console.log(this.postInstance1);
    console.log(this.postInstance2);

    console.log(this.bookInstance1);
    console.log(this.bookInstance2);

    console.log(this.jobInstance1);
    console.log(this.jobInstance2);
  }

  printInformation(arr: Candidate[]) {
    return arr;
  }
}
