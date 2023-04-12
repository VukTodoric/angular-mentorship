import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './features/components/books/book-details/book-details.component';
import { HomepageComponent } from './features/components/homepage/homepage.component';
import { PageNotFoundComponent } from './features/components/page-not-found/page-not-found.component';
import { BookComponent } from './features/components/books/book/book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage/',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: BookComponent,
      },
    ],
  },
  {
    path: 'book/:bookId',
    component: BookDetailsComponent,
  },
  // {
  //   path: 'book',
  //   loadChildren: () =>
  //     import('./features/components/books/books.module').then(
  //       (module) => module.BooksModule
  //     ),
  // },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/components/admin/admin.module').then(
        (module) => module.AdminModule
      ),
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
