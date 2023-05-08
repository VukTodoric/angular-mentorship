import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookDetailsComponent } from 'src/app/features/components/books/book-details/book-details.component';
import { DialogLeavePageComponent } from 'src/app/features/components/dialogs/dialog-leave-page/dialog-leave-page.component';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDeactivateGuard
  implements CanDeactivate<BookDetailsComponent>
{
  constructor(private dialog: MatDialog, private authService: AuthService) {}

  canDeactivate(): Observable<boolean> {
    if (!this.authService.isAutheticated()) {
      return of(true);
    }

    const modal = this.dialog.open(DialogLeavePageComponent);

    const action$ = modal.afterClosed();

    return action$;
  }
}
