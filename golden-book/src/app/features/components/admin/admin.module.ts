import { NgModule } from '@angular/core';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    component: AdminBooksComponent,
  },
];

@NgModule({
  declarations: [AdminBooksComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
