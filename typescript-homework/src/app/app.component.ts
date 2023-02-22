import { Component, OnInit } from '@angular/core';
import { Candidate } from './classes/candidate';
import { Employee } from './classes/employee';

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

  ngOnInit(): void {
    console.log('Canditate 1 is ->', this.candidate1);
    console.log('Canditate 2 is ->', this.candidate2);

    console.log('Array of candidates', this.candidatesArray);

    console.log(this.printInformation(this.candidatesArray));

    console.log('Employee 1 ->', this.empolyee1);
    console.log('Employee 2 ->', this.empolyee2);
  }

  printInformation(arr: Candidate[]) {
    return arr;
  }
}
