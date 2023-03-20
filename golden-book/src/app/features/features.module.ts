import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookCardComponent } from './books/book-card/book-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [HomepageComponent, BookDetailsComponent, BookCardComponent, PageNotFoundComponent],
  imports: [CommonModule, SharedModule, MaterialModule, AppRoutingModule],
  exports: [],
})
export class FeaturesModule {}
