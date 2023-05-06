import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { BookDetailsComponent } from 'src/app/features/components/books/book-details/book-details.component';
import { DialogLeavePageComponent } from 'src/app/features/components/dialogs/dialog-leave-page/dialog-leave-page.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDeactivateGuard
  implements CanDeactivate<BookDetailsComponent>
{
  constructor(private dialog: MatDialog) {}

  canDeactivate(): Observable<boolean> {
    const modal = this.dialog.open(DialogLeavePageComponent);

    const action$ = modal.afterClosed();

    return action$;
  }
}
