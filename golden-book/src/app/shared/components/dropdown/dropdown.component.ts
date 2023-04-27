import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() placeholder?: string;
  @Input() selectField?: string[];

  @Output() selectedValue = new EventEmitter<string>();

  defaultValue = '';
  constructor() {}

  ngOnInit(): void {
    const filter = localStorage.getItem('filter');
    if (filter) {
      const filterToString = JSON.parse(filter);
      this.defaultValue = filterToString.categoryName;
    }
  }

  onChange(event: string) {
    this.selectedValue.emit(event);
  }
}
