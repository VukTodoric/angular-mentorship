import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() placeholder?: string;
  @Input() selectField?: any;
  @Output() onDropdownAction = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  dropdownAction() {
    this.onDropdownAction.emit();
  }
}
