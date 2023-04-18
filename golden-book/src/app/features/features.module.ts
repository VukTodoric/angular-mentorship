import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HomepageComponent, PageNotFoundComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [],
})
export class FeaturesModule {}
