import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Homepage';

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
