import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
})
export class DialogModalComponent implements OnInit {
  @Input() title?: string;

  constructor() {}

  ngOnInit(): void {}
}
