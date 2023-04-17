import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  toggleSidebar$: Subject<boolean> = new Subject<boolean>();
  constructor() {}
}
