import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/components/homepage/homepage.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { BooksWrapperComponent } from './features/components/books/books-wrapper/books-wrapper.component';
import { MainGridComponent } from './core/components/main-grid/main-grid.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ConfirmDeactivateGuard } from './core/guards/confirm-deactivate.guard';
import { SaveFiltersGuard } from './core/guards/save-filters.guard';
import { RegistrationComponent } from './core/auth/components/registration/registration.component';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: MainGridComponent,
    children: [
      {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full',
      },
      {
        path: 'homepage',
        component: HomepageComponent,
        canActivate: [AuthGuard],
        canDeactivate: [SaveFiltersGuard],
        children: [
          {
            path: '',
            component: BooksWrapperComponent,
          },
        ],
      },
      {
        path: 'book',
        canLoad: [AuthGuard],
        canDeactivate: [ConfirmDeactivateGuard],
        loadChildren: () =>
          import('./features/components/books/books.module').then(
            (module) => module.BooksModule
          ),
      },
      {
        path: 'admin',
        canLoad: [AuthGuard, AdminGuard],
        loadChildren: () =>
          import('./features/components/admin/admin.module').then(
            (module) => module.AdminModule
          ),
      },
      {
        path: 'page-not-found',
        component: PageNotFoundComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
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
