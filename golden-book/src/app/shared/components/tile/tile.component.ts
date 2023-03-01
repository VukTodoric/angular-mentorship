import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  buttonLabel: string = 'Book overview';
  @Input() title?: string;
  @Input() fullname?: string;
  @Input() year?: number;
  @Input() category?: string;
  @Input() description?: string;
  @Input() imageSrc?: string;

  constructor() {}

  ngOnInit(): void {}

  onBookOverview(event: Event) {
    console.log(event);
  }
}
