import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import { BookCardComponent } from './components/books/book-card/book-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomepageComponent,
    BookDetailsComponent,
    BookCardComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialModule, AppRoutingModule],
  exports: [],
})
export class FeaturesModule {}
