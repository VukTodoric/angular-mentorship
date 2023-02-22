import { Component, OnInit } from '@angular/core';
import { Candidate } from './classes/candidate';
import { Customer } from './classes/customer';
import { Employee } from './classes/employee';
import { User } from './classes/user';

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
  }

  printInformation(arr: Candidate[]) {
    return arr;
  }
}
