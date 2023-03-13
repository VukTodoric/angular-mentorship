import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  pageLength: number = 100;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 15, 25, 100];

  constructor() {}

  ngOnInit(): void {}
}
