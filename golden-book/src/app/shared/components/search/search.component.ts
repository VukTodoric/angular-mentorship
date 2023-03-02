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

  onSearchAction(input: HTMLInputElement) {
    console.log(input.value);
  }
}
