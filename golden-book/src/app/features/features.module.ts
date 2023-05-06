import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';
import { DialogModule } from './components/dialogs/dialog.module';

@NgModule({
  declarations: [HomepageComponent, PageNotFoundComponent],
  imports: [CommonModule, AppRoutingModule, DialogModule],
  exports: [],
})
export class FeaturesModule {}
