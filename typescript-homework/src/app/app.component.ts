import { Component, OnInit } from '@angular/core';
import { Candidate } from './classes/candidate';

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

  ngOnInit(): void {
    console.log('Canditate 1 is ->', this.candidate1);
    console.log('Canditate 2 is ->', this.candidate2);
  }
}
