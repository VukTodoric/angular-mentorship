import { Component, OnInit } from '@angular/core';
import { Address } from './classes/address';
import { ApiResponse } from './classes/api-response';
import { Candidate } from './classes/candidate';
import { Customer } from './classes/customer';
import { Employee } from './classes/employee';
import { Product } from './classes/product';
import { User } from './classes/user';
import { DateFormats } from './enums/date-formats';
import { BaseEntity } from './interfaces/base-entity.model';
import { Book } from './interfaces/book';
import { Job } from './interfaces/job';
import { Post } from './interfaces/post';
import { SumResult } from './types/sum-result';

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
    new Date('1991-01-01').getFullYear()
  );
  candidate2: Candidate = new Candidate(
    'Marko',
    'Markovic',
    new Date('1992-02-02').getFullYear()
  );

  candidatesArray: Candidate[] = [this.candidate1, this.candidate2];

  empolyee1: Employee = new Employee(
    new User(1, 'Predrag', 'predrag@nesto.com', 5656),
    'menadzer'
  );

  empolyee2: Employee = new Employee(
    new User(2, 'Danica', 'danica@nesto.com', 5656),
    'menadzer'
  );

  customer1: Customer = new Customer(
    new User(1, 'Branko', 'branko@nesto.com', 454545),
    new Address('Srpskih vladar', 12, 'Beograd', 'Serbia')
  );

  user1: User = new User(1, 'Pera', 'pera@nesto.com', 54654);
  user2: User = new User(2, 'Zika', 'zika@nesto.com', 54654);

  newCustomer1: Customer = new Customer(
    new User(2, 'Dragan', 'dragan@nesto.com', 454545),
    new Address('Nemanjina', 12, 'Kraljevo', 'Serbia')
  );
  newCustomer2: Customer = new Customer(
    new User(1, 'Milovan', 'milovan@nesto.com', 454545),
    new Address('Dubrovacka', 12, 'Novi sad', 'Serbia')
  );

  newEmployee1: Employee = new Employee(
    new User(1, 'Ivan', 'ivan@nesto.com', 5656),
    'direktor'
  );
  newEmployee2: Employee = new Employee(
    new User(2, 'Marija', 'marija@nesto.com', 5656),
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
    new User(3, 'Ana', 'ana@nesto.com', 454545),
    new Address('Nemanjina', 12, 'Kraljevo', 'Serbia')
  );
  newEmployee3: Employee = new Employee(
    new User(3, 'Rade', 'rade@nesto.com', 5656),
    'HR'
  );
  obj: BaseEntity = {
    id: 1,
    sayHello() {
      return 'Hello all';
    },
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

  jobInstance1: Job = new Job(1, 'Zidar', 'Zida zgrade', 45, 15);
  jobInstance2: Job = new Job(2, 'Moler', 'Kreci zidove', 45, 12);

  jobArray: Job[] = [this.jobInstance1, this.jobInstance2];
  bookArray: Book[] = [this.bookInstance1, this.bookInstance2];
  postArray: Post[] = [this.postInstance1, this.postInstance2];

  apiResponseJob: ApiResponse<Job> = new ApiResponse(this.jobArray, 1, 2, 1);
  apiResponseBook: ApiResponse<Book> = new ApiResponse(this.bookArray, 2, 2, 3);
  apiResponsePost: ApiResponse<Post> = new ApiResponse(this.postArray, 6, 2, 4);

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
    console.log(this.customer1.customer.sayHello());
    console.log(this.empolyee1.employee.sayHello());

    console.log(this.postInstance1);
    console.log(this.postInstance2);

    console.log(this.bookInstance1);
    console.log(this.bookInstance2);

    console.log(this.jobInstance1);
    console.log(this.jobInstance2);

    console.log(this.jobInstance1.getSalary());
    console.log(this.jobInstance2.getSalary());

    this.formatDate(new Date(), 0);
    this.formatDate(new Date(), 1);
    this.formatDate(new Date(), 2);

    console.log(this.calculate(3, 5));
    console.log(this.calculate(7, 9));
    console.log(this.calculate(23, 6));

    console.log(this.apiResponseJob);
    console.log(this.apiResponseBook);
    console.log(this.apiResponsePost);
  }

  printInformation(candidateArr: Candidate[]) {
    return candidateArr.map((res) => `${res.getFullName()} : ${res.birthday}`);
  }

  formatDate(dateInput: Date, formatOfDate: DateFormats) {
    let date = dateInput.getDate();
    let month = dateInput.getMonth();
    let year = dateInput.getFullYear();

    switch (formatOfDate) {
      case 0:
        console.log(`Formatira datum yyyy-mm-dd: ${year}-${month}-${date}`);
        break;
      case 1:
        console.log(`Formatira datum dd/mm/yyyy: ${date}-${month}-${year}`);
        break;
      case 2:
        console.log(`Formatira datum mm-dd-yyyy: ${month}-${date}-${year}`);
        break;
    }
  }

  calculate(a: number, b: number): SumResult {
    const sum = a + b;

    return { a, b, sum };
  }
}
