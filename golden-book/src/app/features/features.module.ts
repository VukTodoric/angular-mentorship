import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { BookDetailsComponent } from './books/book-details/book.component';

@NgModule({
  declarations: [HomepageComponent, BookDetailsComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [HomepageComponent],
})
export class FeaturesModule {}
