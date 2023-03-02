import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesModule } from '../features/features.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, SharedModule, FeaturesModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
