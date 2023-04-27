import { NgModule } from '@angular/core';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BooksTableComponent } from './admin-books/books-table/books-table.component';
import { DescriptionModalComponent } from './admin-books/description-modal/description-modal.component';

const routes: Routes = [
  {
    path: 'books',
    component: AdminBooksComponent,
  },
];

@NgModule({
  declarations: [AdminBooksComponent, BooksTableComponent, DescriptionModalComponent],
  imports: [RouterModule.forChild(routes), SharedModule, MaterialModule],
  exports: [RouterModule],
})
export class AdminModule {}
