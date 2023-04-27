import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCardComponent } from './book-card/book-card.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddColorDirective } from '../../directives/add-color.directive';
import { BooksWrapperComponent } from './books-wrapper/books-wrapper.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogModule } from '../dialogs/dialog.module';

const routes: Routes = [
  {
    path: ':bookId',
    component: BookDetailsComponent,
  },
];

@NgModule({
  declarations: [
    BookDetailsComponent,
    AddColorDirective,
    BooksWrapperComponent,
    BookCardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
    CommonModule,
  ],
  exports: [RouterModule],
})
export class BooksModule {}
