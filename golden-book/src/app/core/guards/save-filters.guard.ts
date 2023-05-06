import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { BooksWrapperComponent } from 'src/app/features/components/books/books-wrapper/books-wrapper.component';
import { DialogSaveFilterComponent } from 'src/app/features/components/dialogs/dialog-save-filter/dialog-save-filter.component';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SaveFiltersGuard implements CanDeactivate<BooksWrapperComponent> {
  constructor(private dialog: MatDialog, private authService: AuthService) {}

  canDeactivate(component: BooksWrapperComponent): Observable<boolean> {
    if (!this.authService.isAutheticated()) {
      return of(true);
    }
    const modal = this.dialog.open(DialogSaveFilterComponent);
    const action$ = modal.afterClosed().pipe(
      map((shouldSave) => {
        if (shouldSave) {
          const filter = {
            userSerch: component.userSerch,
            categoryName: component.categoryName,
          };
          const filterToString = JSON.stringify(filter);
          localStorage.setItem('filter', filterToString);
        }
        return shouldSave;
      })
    );
    return action$;
  }
}
