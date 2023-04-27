import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/components/homepage/homepage.component';
import { PageNotFoundComponent } from './features/components/page-not-found/page-not-found.component';
import { BooksWrapperComponent } from './features/components/books/books-wrapper/books-wrapper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: BooksWrapperComponent,
      },
    ],
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./features/components/books/books.module').then(
        (module) => module.BooksModule
      ),
  },
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
