import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './features/components/books/book-details/book-details.component';
import { HomepageComponent } from './features/components/homepage/homepage.component';
import { PageNotFoundComponent } from './features/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'book/:bookId',
    component: BookDetailsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
