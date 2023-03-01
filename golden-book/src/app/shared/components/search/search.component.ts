import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() placeholder?: string;

  constructor() {}

  ngOnInit(): void {}

  onSearcAction() {
    return (document.getElementById('searchId') as HTMLInputElement).value; //TODO: Need to ask question
  }
}
