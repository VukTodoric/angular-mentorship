import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import {
  interval,
  Observable,
  Subscriber,
  fromEvent,
  debounceTime,
  combineLatest,
  forkJoin,
  map,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  timer$?: number;
  intervalSubscription?: Subscription;

  currentTime$ = new Observable<Date | number>(
    (observer: Subscriber<Date | number>) => {
      observer.next(new Date());
    }
  );

  searchInput$ = new Observable((observer: Subscriber<string>) => {
    observer.next(
      (document.getElementById('search')! as HTMLInputElement).value
    );
  });

  input1$ = new Observable((observer: Subscriber<string>) => {
    observer.next(
      (document.getElementById('input1')! as HTMLInputElement).value
    );
  });

  input2$ = new Observable((observer: Subscriber<string>) => {
    observer.next(
      (document.getElementById('input2')! as HTMLInputElement).value
    );
  });

  ngOnInit(): void {
    interval(1000).subscribe(() =>
      this.currentTime$.subscribe((res) => {
        // console.log(res);
      })
    );

    fromEvent(document.getElementById('search')!, 'keydown')
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.searchInput$.subscribe((data) => {
          console.log(data);
        });
      });

    fromEvent(document.getElementById('input1')!, 'keydown')
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.input1$.subscribe((data) => {
          console.log(data);
        });
      });

    fromEvent(document.getElementById('input2')!, 'keydown')
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.input2$.subscribe((data) => {
          console.log(data);
        });
      });

    combineLatest([this.input1$, this.input2$]).subscribe((data) => {
      console.log(data);
    });

    const data1$ = ajax('https://jsonplaceholder.typicode.com/users');
    const data2$ = ajax(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );

    forkJoin([data1$, data2$]).subscribe((data) => {
      console.log(data);
    });
  }

  onStart() {
    this.intervalSubscription = interval(1000).subscribe((data) => {
      this.timer$ = data;
    });
  }

  onStop() {
    this.intervalSubscription?.unsubscribe();
  }
}
